import { useEffect, useState } from "react";
import pagecss from "./ClockPage.module.scss"

export const ClockPage = () => {
    // 現在の時刻を格納
    const [date, setDate] = useState(new Date());
    // 文字の時計用の現在の時間と分を取得
    const time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    const [h, m] = time;


    useEffect(() => {
        // date変数を更新するためにsetDate関数をsetIntervalで1秒ごとに実行
        // setInterval で作成されたタイマーは、clearInterval 関数が呼び出されるまで実行される
        const timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // アナログ時計用の現在の時刻を取得
        const time = [date.getHours(), date.getMinutes(), date.getSeconds()];
        const [ho, mi, se] = time;

        // 針の角度を計算（ここの計算式なんでこうなるのか誰かに聞いてみよう）
        const degHour = ho * (360 / 12) + mi * (360 / 12 / 60);
        const degMin = mi * (360 / 60) + se * (360 / 60 / 60);
        const degSec = se * (360 / 60);

        // 針の角度を指定（cssカスタムプロパティ）
        const rootStyle = document.documentElement.style;
        rootStyle.setProperty("--degHour", `${degHour}deg`);
        rootStyle.setProperty("--degMin", `${degMin}deg`);
        rootStyle.setProperty("--degSec", `${degSec}deg`);

        return () => clearInterval(timerId);
    },[date]);

    return (
        <div className={pagecss.clockpage}>
            <div className="leftSideBox">
                <h3>アメリカ（ロサンゼルス）</h3>
                <h3>韓国</h3>
                <h3>パリ</h3>
                <h3>ロシア</h3>
                <h3>タイ</h3>
                <h3>国名を追加する</h3>
            </div>
            <div className="clockbox">
                <div className={pagecss.clock}>
                    <div className={pagecss.hhand}></div>
                    <div className={pagecss.mhand}></div>
                    <div className={pagecss.shand}></div>
                </div>
                <div className={pagecss.timeText}>
                    <h3>現在の時間</h3>
                    {/* 呼び出し */}
                    {/* .toString().padStart(2, '0') これではhとmが一桁の時に前に0をつける設定*/}
                    <h1>{h.toString().padStart(2, '0')}:{m.toString().padStart(2, '0')}</h1>
                </div>
            </div>
            
        </div>
    );
};