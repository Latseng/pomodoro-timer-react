import {  createContext, Dispatch, SetStateAction } from "react";

interface SettingsContextType {
  workMinutes: number;
  breakMinutes: number;
  setWorkMinutes: Dispatch<SetStateAction<number>>;
  setBreakMinutes: Dispatch<SetStateAction<number>>;
  setIsSettingsOpen: Dispatch<SetStateAction<boolean>>;
}

const defaultContextValue: SettingsContextType = {
  workMinutes: 0,
  breakMinutes: 0,
  setWorkMinutes: () => {},
  setBreakMinutes: () => {},
  setIsSettingsOpen: () => {},
};

const SettingsContext = createContext(defaultContextValue);

export default SettingsContext;