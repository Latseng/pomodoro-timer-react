import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Timer = () => {
  const percentage = 100;

  return (
    <div className="w-64 m-auto">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: "round",
          textSize: "16px",
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
        })}
      />
    </div>
  );
};

export default Timer;
