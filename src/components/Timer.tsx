import { useState } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import PauseButton from "./PauseButton";
import StartButton from "./StartButton";
import Setting from "./SettingButton";

const Timer = () => {
  const [isPaused, setIsPaused] = useState(true);

  const percentage = 100;

  return (
    <div>
      <div className="w-64 mx-auto">
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
      <div className="text-center my-4">
        {isPaused ? <StartButton /> : <PauseButton />}
      </div>
      <div>
        <Setting />
      </div>
    </div>
  );
};

export default Timer;
