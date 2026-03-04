export interface TimerDisplayProps {
  time: number;
}

const TimerDisplay = ({ time }: TimerDisplayProps) => {
  return (
    <>
      <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight text-center">
        Timer
      </h2>
      <span className="text-6xl font-mono font-bold text-blue-600 mb-4 select-none">
        {time}
      </span>
    </>
  );
};

export default TimerDisplay;
