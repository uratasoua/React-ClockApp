import ibuttoncss from "./IButton.module.scss";

export const SettingButton = () => {
    return (
        <div>
            <button className={`${ibuttoncss.settingIconButton} ${ibuttoncss.iconButton}`}>
                <i className="fa-solid fa-gear size"></i>
                <h3 className={ibuttoncss.settingButtonText}>設定</h3>
            </button>
        </div>
    );
};