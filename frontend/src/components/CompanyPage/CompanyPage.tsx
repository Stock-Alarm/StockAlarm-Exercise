import "./CompanyPage.css";
import { Company } from "../../Company";
import { Alarm } from "../../Alarm";
import { AlarmDisplay } from "../AlarmDisplay/AlarmDisplay";
import { AlarmButton } from "../AddAlarm/AlarmButton";
import { AlarmInput } from "../AddAlarm/AlarmInput";
import { useState, useEffect } from "react";
import { uuid } from 'uuidv4';
import { database } from "../../firebase";
import { useObjectVal } from "react-firebase-hooks/database";

function objectsAreSame(x: Alarm[], y: Alarm[]) {
    var objectsAreSame = true;
    for (var propertyName in x) {
        if (x[propertyName] !== y[propertyName]) {
            objectsAreSame = false;
            break;
        }
    }
    return objectsAreSame;
}

export const CompanyPage = (company: Company) => {

    const [toggleInput, setToggleInput] = useState(false);
    const [alarmsObj] = useObjectVal(database.ref(`/alarm/${company.ticker}`));

    const storedAlarms = Object.values(
        (alarmsObj as any as Record<string, Alarm>) || {}
    );
    const [alarms, setAlarms] = useState<Alarm[]>(storedAlarms);

    useEffect(() => {
        if (alarms.length !== storedAlarms.length || !objectsAreSame(alarms, storedAlarms)) {
            setAlarms(storedAlarms);
        }
    }, [storedAlarms])

    function handleAlarmAdd(alarmData: Alarm) {
        let active = false;
        if (alarmData.type === 'Upper'){
            if (alarmData.target >= company.stockPrice){
                active = true;
            }
        }
        else if (alarmData.type === 'Lower'){
            if (alarmData.target <= company.stockPrice){
                active = true;
            }
        }
        const alarmId = {
            id: uuid(),
            active,
        };
        const newAlarm = { ...alarmId, ...alarmData };
        const newAlarmList = [...alarms, newAlarm];
        database
            .ref(`alarm/${company.ticker}`)
            .set(newAlarmList);
        setAlarms(newAlarmList);
    }

    function handleToggleInput() {
        setToggleInput(!toggleInput);
    }

    return (
        <div className="company-page">
            <div className="company-page__container">
                <div className="row" style={{ marginBottom: '8px' }}>
                    <p className="company-page__name">{company.name} <span className="company-page__ticker">({company.ticker})</span></p>
                </div>
                <div className="row" style={{ marginBottom: '40px' }}>
                    <p className="company-page__stock-price">€{company.stockPrice}</p>
                </div>
                <div className="row" style={{ marginBottom: '16px' }}><p className="company-page__alarm-text">Alarms</p></div>
                <div className="row" style={{ marginBottom: '16px' }}>{alarms.map(alarm => {
                    return (
                        <AlarmDisplay key={alarm.id} {...alarm} />
                    )
                })}</div>
                <div className="row justify-center">{toggleInput ?
                    <AlarmInput handleAlarmAdd={handleAlarmAdd} /> :
                    <AlarmButton handleToggleInput={handleToggleInput} />}
                </div>
            </div>
        </div>
    );
}