import timerbuttoncss from './TimerButton.module.scss'

export const ResetButton = () => {
    return (
        <div className=''>
            <button className={timerbuttoncss.timerButtonStyle}>
                <p className={timerbuttoncss.clickReset}>■</p>
            </button>
        </div>
    );
};