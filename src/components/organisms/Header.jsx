import { SettingButton } from "../molecules/SettingButton";
import headercss from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={headercss.header}>
            <div className={headercss.headerBox}>
                <h2>AppName</h2>
                <SettingButton />
            </div>
        </header>
    );
}