import { useState } from "react";
import Timer from "./components/Timer";
import TimerSettings from "./components/TimerSettings";
import { ThemeProvider } from "@/components/theme-provider";
import SettingsContext from "./components/SettingsContext";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(35);
  const [breakMinutes, setBreakMinutes] = useState(10);
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <h1 className="my-8 text-4xl font-bold text-center">
          🍅蕃茄鐘
        </h1>
        <SettingsContext.Provider
          value={{
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
            setIsSettingsOpen,
          }}
        >
          {isSettingsOpen ? <TimerSettings /> : <Timer />}
        </SettingsContext.Provider>
      </main>
    </ThemeProvider>
  );
}

export default App;
