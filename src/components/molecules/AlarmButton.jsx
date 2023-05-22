import ibuttoncss from "./IButton.module.scss";

export const AlarmButton = () => {
    return (
        <div>
            <button className={ibuttoncss.iconButton}>
                <i className="fa-regular fa-bell size"></i>
                <h3>持ち物確認</h3>
            </button>
        </div>
    );
};