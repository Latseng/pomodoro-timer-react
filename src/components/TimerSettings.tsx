import { Slider } from "@/components/ui/slider";
import { useContext } from "react";
import SettingsContext from "./SettingsContext";
import { Button } from "./ui/button";
import { CircleArrowLeft } from "lucide-react";

const TimerSettings = () => {
  const settingData = useContext(SettingsContext)
  
  return (
    <div className="my-8 flex flex-col items-center">
      <h2 className="text-3xl font-semibold">時間設定</h2>
      <div className="py-8 px-12 md:w-1/2 flex flex-col gap-4">
        <div>
          <h4 className="text-lg my-2">專注 {settingData.workMinutes}:00</h4>
          <Slider
            defaultValue={[settingData.workMinutes]}
            onValueChange={(newValue) =>
              settingData.setWorkMinutes(newValue[0])
            }
            min={1}
            max={120}
            rangeColor="bg-red-400"
          />
        </div>
        <div>
          <h4 className="text-lg my-4">休息 {settingData.breakMinutes}:00</h4>
          <Slider
            defaultValue={[settingData.breakMinutes]}
            onValueChange={(newValue) =>
              settingData.setBreakMinutes(newValue[0])
            }
            min={1}
            max={120}
            rangeColor="bg-green-400"
          />
        </div>
      </div>
      <Button className="cursor-pointer" onClick={() => settingData.setIsSettingsOpen(false)}>
        <CircleArrowLeft />
        返回
      </Button>
    </div>
  );
};

export default TimerSettings;
