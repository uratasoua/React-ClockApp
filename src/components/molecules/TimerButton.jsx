import ibuttoncss from "./IButton.module.scss";

export const TimerButton = () => {
    return (
        <div className=''>
            <button className={ibuttoncss.iconButton}>
                <i className="fa-solid fa-clock-rotate-left size"></i>
                <h3>時間管理</h3>
            </button>
        </div>
    );
};