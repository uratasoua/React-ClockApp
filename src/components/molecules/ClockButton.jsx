import ibuttoncss from "./IButton.module.scss";

export const ClockButton = () => {
  return (
    <div className="">
      <button className={ibuttoncss.iconButton}>
        <i className="fa-regular fa-clock size"></i>
        <h3>時計</h3>
      </button>
    </div>
  );
};
