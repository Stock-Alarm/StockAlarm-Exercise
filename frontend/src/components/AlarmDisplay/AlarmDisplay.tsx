import { Alarm } from "../../Alarm";
import './AlarmDisplay.css'

export const AlarmDisplay = ({type, target, active}: Alarm) => {
    return (
        <div className="alarm-display"><p> <span className="alarm-display__emoji">{active ? '🔋' : '😴'}</span> - {type} limit at €{target}</p></div>
    );
}