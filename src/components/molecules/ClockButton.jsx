import ibuttoncss from "./IButton.module.scss";

export const ClockButton = () => {
  return (
    <div className="iconButton">
      <button className={ibuttoncss.iconButton}>
        <i className="fa-regular fa-clock size"></i>
        <p>時計</p>
      </button>
    </div>
  );
};
