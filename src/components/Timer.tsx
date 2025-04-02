import { useState, useContext, useEffect, useRef } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import PauseButton from "./PauseButton";
import StartButton from "./StartButton";
import { Settings } from "lucide-react";
import { Button } from "./ui/button";

import SettingsContext from "./SettingsContext";

const Timer = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerMode, setTimerMode] = useState("work"); // work, break, pause
  const settingData = useContext(SettingsContext);
 
  const timeLeftRef = useRef(timeLeft)
  const isPausedRef = useRef(isPaused)
  const timerModeRef = useRef(timerMode)

  function iniTimer() {
    setTimeLeft(settingData.workMinutes * 60);
  }

    function tick() {
      timeLeftRef.current--;
      setTimeLeft(timeLeftRef.current);
    }

  function switchTimerMode() {
    const nextMode = timerModeRef.current === "work" ? "break" : "work";
    const nextTime = (nextMode === "work" ? settingData.workMinutes : settingData.breakMinutes) * 60;

    setTimerMode(nextMode);
    timerModeRef.current = nextMode;

    setTimeLeft(nextTime);
    timeLeftRef.current = nextTime;
  }

  useEffect(() => {
    iniTimer();

    const interval = setInterval(() => {
      if(isPausedRef.current) return;
      
      if(timeLeftRef.current === 0) {
        return switchTimerMode();
    }

    tick()
  }, 1)

  return () => {
    clearInterval(interval);
  }

  }, [settingData])

  const totalTime = (timerMode === "work" ? settingData.workMinutes : settingData.breakMinutes) * 60;
  const percentage = Math.round((timeLeft / totalTime) * 100);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60;
  
  return (
    <div>
      <div className="w-64 mx-auto">
        <CircularProgressbar
          value={percentage}
          text={minutes + ":" + seconds}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: "round",
            textSize: "16px",
            pathColor: `${timerMode === "work" ? 'red' : 'green'})`,
          })}
        />
      </div>
      <div className="text-center">
        {isPaused ? <StartButton onClick={() => {
          setIsPaused(false);
          isPausedRef.current = false;
        }} /> : <PauseButton onClick={() => {
          setIsPaused(true);
          isPausedRef.current = true;
        }} />}
      </div>
      <div className="text-center">
        <Button
          onClick={() => settingData.setIsSettingsOpen(true)}
          size={"lg"}
          className="my-4 cursor-pointer"
        >
          <Settings />
          Settings
        </Button>
      </div>
    </div>
  );
};

export default Timer;
