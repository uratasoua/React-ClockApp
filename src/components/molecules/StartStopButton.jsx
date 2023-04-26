import timerbuttoncss from './TimerButton.module.scss'

export const StartStopButton = () => {
    return (
        <div className=''>
            <button className={timerbuttoncss.timerButtonStyle}>
                <p className={timerbuttoncss.clickStart}>▶︎</p>
            </button>
        </div>
    );
};