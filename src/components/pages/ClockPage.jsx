import { useEffect, useState } from "react";
import pagecss from "./ClockPage.module.scss"
// import { SideBox } from "../organisms/SideBox";
import { useModal } from "../organisms/UseModal";

// 国別データ管理
// const countryData = [
//     {
//         id: 1,
//         name: "ソウル",
//     },
//     {
//         id: 2,
//         name: "台北",
//     },
//     {
//         id: 3,
//         name: "パリ",
//     },
// ]

function CountryList() {
    const countries = [
        { id: 1, name: 'ソウル' },
        { id: 2, name: '台北' },
        { id: 3, name: 'パリ' }
    ];

    function onClick(countryId, e) {
        console.log(countryId + 'だよ');
        console.log('event:', e);
    } 

    
    const countryData = countries.map(country => (
        <div
            onClick={e => onClick(country.id, e)}
            key={country.id}
        >
            {country.name}
        </div>
    ));
    return (
        <>
            <div className={pagecss.countryBox}>
                <h3>韓国</h3>
                <p>{countryData[0]}</p>
            </div>
            <div className={pagecss.countryBox}>
                <h3>台湾</h3>
                <p>{countryData[1]}</p>
            </div>
            <div className={pagecss.countryBox}>
                <h3>フランス</h3>
                <p>{countryData[2]}</p>
            </div>
        </>
    )
}

export const ClockPage = () => {
    const { Modal, openModal, closeModal } = useModal();
    
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
            <div className={pagecss.sideBox}>
                <button onClick={openModal}><span>＋</span>国を追加する</button>
            </div>
            <Modal>
                <div className={pagecss.modalbox}>
                    <div className={pagecss.modalheader}>
                        <h2>国を追加</h2>
                        <button onClick={closeModal}>×</button>
                    </div>
                <CountryList />
                </div>
            </Modal>
            {/* <SideBox /> */}
            <div className={pagecss.clockBox}>
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