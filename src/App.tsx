import { useState } from "react";
import Timer from "./components/Timer";
import TimerSettings from "./components/TimerSettings";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  return (
    <main>
      <h1 className="my-12 md:my-8 text-4xl font-bold text-center">pomodoro-timer</h1>
      {isSettingsOpen ? <TimerSettings /> : <Timer />}
    </main>
  );
}

export default App
