import { useState } from "react";
import { Alarm } from "../../Alarm";
import './AlarmInput.css'

interface AlarmChange {
    type?: string;
    target?: number;
}

interface CallbackFunction {
    handleAlarmAdd: (alarmData: Alarm) => void
}

export const AlarmInput = ({ handleAlarmAdd }: CallbackFunction) => {
    const [alarmData, setAlarmData] = useState({ type: "Lower", target: 0, id: 1, active: false });

    function handleChange(changes: AlarmChange) {
        setAlarmData({ ...alarmData, ...changes });
    }
    return (
        <div>
            <span>Type: </span>
            <select id="alarm-input-limit" onChange={e => handleChange({ 'type': e.target.value })}>
                <option value="Lower">Lower Limit</option>
                <option value="Upper">Upper Limit</option>
            </select>
            <span>  Target: € </span>

            <input type="number" id="alarm-input-target" min="0"
                value={alarmData.target}
                onInput={e => handleChange({ 'target': parseInt((e.target as HTMLInputElement).value) || 0 })}>
            </input>
            <button className="alarm-input__button" onClick={e => handleAlarmAdd(alarmData)}>+</button>
        </div>
    );
}

