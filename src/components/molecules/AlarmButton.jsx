import ibuttoncss from "./IButton.module.scss";

export const AlarmButton = () => {
    return (
        <div>
            <button className={ibuttoncss.iconButton}>
                <i className="fa-regular fa-bell size"></i>
                <p>アラーム</p>
            </button>
        </div>
    );
};