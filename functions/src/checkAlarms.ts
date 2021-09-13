import { database } from "./firebaseApp";
import { Alarm } from "./Alarm";
import { Company } from "./Company";

export const checkAlarms = async () => {
    const companiesRef = database.ref("company");
    const companiesSnapshot = await companiesRef.once("value");
    const companies: Record<string, Company> = companiesSnapshot.val();

    const alarmsRef = database.ref("alarm");
    const alarmsSnapshot = await alarmsRef.once("value");
    const alarms: Record<string, Alarm[]> = alarmsSnapshot.val();

    if (alarms) {
        Object.entries(alarms).map(async ([ticker, alarmList]) => {
            for (const alarm of alarmList) {
                if (alarm.active) {
                    if (alarm.type === 'Upper' && companies[ticker].stockPrice > alarm.target) {
                        const newAlarmList = alarmList.filter(tempAlarm => tempAlarm.target !== alarm.target);
                        await database
                            .ref(`alarm/${ticker}/`)
                            .set(newAlarmList);
                    }
                    else if (alarm.type === 'Lower' && companies[ticker].stockPrice < alarm.target) {
                        const newAlarmList = alarmList.filter(tempAlarm => tempAlarm.target !== alarm.target);
                        await database
                            .ref(`alarm/${ticker}/`)
                            .set(newAlarmList);
                    }
                }
                else {
                    if (alarm.type === 'Upper' && companies[ticker].stockPrice < alarm.target) {
                        let newAlarmList = alarmList.filter(tempAlarm => tempAlarm.target !== alarm.target);
                        const newAlarm = { ...alarm, ...{ 'active': true } };
                        newAlarmList.push(newAlarm);
                        await database
                            .ref(`alarm/${ticker}/`)
                            .set(newAlarmList);
                    }
                    else if (alarm.type === 'Lower' && companies[ticker].stockPrice > alarm.target) {
                        let newAlarmList = alarmList.filter(tempAlarm => tempAlarm.target !== alarm.target);
                        const newAlarm = { ...alarm, ...{ 'active': true } };
                        newAlarmList.push(newAlarm);
                        await database
                            .ref(`alarm/${ticker}/`)
                            .set(newAlarmList);
                    }
                }
            }
        });
    }
};
