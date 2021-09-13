import "./AlarmButton.css";

interface CallbackFunction {
    handleToggleInput: () => void;
}

export const AlarmButton = ({handleToggleInput}: CallbackFunction) => {
    return (
        <button className="alarm-button__button" onClick={handleToggleInput}>+ Add alarm</button>
    );
}

