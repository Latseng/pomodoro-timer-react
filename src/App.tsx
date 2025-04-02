import { useState } from "react";
import Timer from "./components/Timer";
import TimerSettings from "./components/TimerSettings";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <ModeToggle />
        <h1 className="my-12 md:my-8 text-4xl font-bold text-center">
          pomodoro-timer
        </h1>
        {isSettingsOpen ? <TimerSettings /> : <Timer />}
      </main>
    </ThemeProvider>
  );
}

export default App
