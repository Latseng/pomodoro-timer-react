import { Slider } from "@/components/ui/slider";

const TimerSettings = () => {
  return (
    <div className="mx-12">
      <h2 className="text-3xl font-semibold">Timer Settings</h2>
      <div className="py-8 px-12 md:w-1/2 flex flex-col gap-4">
        <div>
          <h4 className="text-lg my-2">work minutes:</h4>
          <Slider
            defaultValue={[45]}
            min={1}
            max={120}
            rangeColor="bg-red-500"
          />
        </div>
        <div>
          <h4 className="text-lg my-4">break minutes:</h4>
          <Slider
            defaultValue={[45]}
            min={1}
            max={120}
            rangeColor="bg-green-500"
          />
        </div>
      </div>
    </div>
  );
};

export default TimerSettings;
