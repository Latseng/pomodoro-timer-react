import { useState, useContext, useEffect, useRef } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Settings, Play, Pause } from "lucide-react";
import { Button } from "./ui/button";

import SettingsContext from "./SettingsContext";

const Timer = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerMode, setTimerMode] = useState("work"); // work, break
  const settingData = useContext(SettingsContext);

  const timeLeftRef = useRef(timeLeft);
  const isPausedRef = useRef(isPaused);
  const timerModeRef = useRef(timerMode);

  // 秒鐘倒數
  function tick() {
    timeLeftRef.current--;
    setTimeLeft(timeLeftRef.current);
  }

  useEffect(() => {
    // 專注 or 休息時間切換
    function switchTimerMode() {
      const nextMode = timerModeRef.current === "work" ? "break" : "work";
      const nextTime =
        (nextMode === "work"
          ? settingData.workMinutes
          : settingData.breakMinutes) * 60;

      setTimerMode(nextMode);
      timerModeRef.current = nextMode;

      setTimeLeft(nextTime);
      timeLeftRef.current = nextTime;
    }

    timeLeftRef.current = settingData.workMinutes * 60;
    setTimeLeft(timeLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (timeLeftRef.current === 0) {
        return switchTimerMode();
      }

      tick();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [settingData]);

  const totalTime =
    (timerMode === "work"
      ? settingData.workMinutes
      : settingData.breakMinutes) * 60;
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
            pathColor: `${timerMode === "work" ? "red" : "green"}`,
            textColor: `${timerMode === "work" ? "red" : "green"}`,
          })}
        />
      </div>
      <div className="my-4 flex gap-2 justify-center items-center">
        {/* 是否開始計時？ */}
        {isPaused ? (
          // 開始按鈕
          <button
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
            className="cursor-pointer border-4 rounded-2xl p-2 px-4"
          >
            <Play size={48} />
          </button>
        ) : (
          // 暫停按鈕
          <button
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
            className="cursor-pointer border-4 rounded-2xl p-2 px-4"
          >
            <Pause size={48} />
          </button>
        )}
      </div>
      <div className="text-center">
        <Button
          onClick={() => settingData.setIsSettingsOpen(true)}
          className="cursor-pointer"
          variant="outline"
        >
          <Settings />
          設定
        </Button>
      </div>
    </div>
  );
};

export default Timer;