import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { AlarmButton } from "../molecules/AlarmButton"
import { ClockButton } from "../molecules/ClockButton"
import { TimerButton } from "../molecules/TimerButton"

import barcss from "./Buttonbar.module.scss";
import { ClockPage } from "../pages/ClockPage";
import { AlarmPage } from "../pages/AlarmPage";
import { TimerPage } from "../pages/TimerPage";

export const Buttonbar = () => {
    return (
        <BrowserRouter>
            <div className={barcss.buttonbar}>
                <Link to="/">
                    <ClockButton />
                </Link>
                <br />
                <Link to="/timerpage">
                    <TimerButton />
                </Link>
                <br />
                <Link to="/alarmpage">
                    <AlarmButton />
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<ClockPage />} />
                <Route path="/Timerpage" element={<TimerPage />} />
                <Route path="/alarmpage" element={<AlarmPage />} />
            </Routes>
        </BrowserRouter>
    )
}