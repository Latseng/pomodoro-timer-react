import { Slider } from "@/components/ui/slider";

const TimerSettings = () => {
  return (
    <div className="mx-12">
      <h2 className="text-3xl font-semibold">Timer Settings</h2>
      <label className="block">work minutes:</label>
      <Slider defaultValue={[33]} max={100} step={1} />
      <label className="block">break minutes:</label>
      <Slider defaultValue={[33]} max={100} step={1} />
    </div>
  );
};

export default TimerSettings;
