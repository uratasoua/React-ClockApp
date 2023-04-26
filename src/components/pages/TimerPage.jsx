import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { ResetButton } from "../molecules/ResetButton";
import { StartStopButton } from "../molecules/StartStopButton";
import timerpagecss from ".//TimerPage.module.scss";

export const TimerPage = () => {
    return (
        <div>
            <div className={timerpagecss.timer}>
                {/*今からやること①パッケージ表示する②時間を設定できるようにする③タイムピッカーを表示してパッケージの時間とデータをうまく受け渡す④スタートボタン、ストップボタン、リセットボタンの動作設定⑤css当てる　よし頑張れ!!*/}
                <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    colors={"#03A9F4"}
                    size={500}
                    strokeWidth={16}
                >
                    {({ remainingTime }) => {
                        const hours = Math.floor(remainingTime / 3600)
                        const minutes = Math.floor((remainingTime % 3600) / 60)
                        const seconds = remainingTime % 60
                        return (
                            <span className={timerpagecss.timerText}>
                                {<p>タップして時間を設定</p>}
                                {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                            </span>
                        )
                    }}
                </CountdownCircleTimer>
            </div>
            <div className={timerpagecss.timerButtonBox}>
                <StartStopButton />
                <ResetButton />
            </div>
        </div>
    );
};