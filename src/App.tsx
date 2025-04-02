import { useState } from "react";
import Timer from "./components/Timer";
import TimerSettings from "./components/TimerSettings";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import SettingsContext from "./components/SettingsContext";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(35);
  const [breakMinutes, setBreakMinutes] = useState(10);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <ModeToggle />
        <h1 className="my-12 md:my-8 text-4xl font-bold text-center">
          pomodoro-timer
        </h1>
        <SettingsContext.Provider value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}>
          {isSettingsOpen ? <TimerSettings /> : <Timer />}
        </SettingsContext.Provider>
      </main>
    </ThemeProvider>
  );
}

export default App
