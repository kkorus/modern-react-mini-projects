import { useEffect, useRef } from 'react';

interface TimerControlsProps {
  isRunning: boolean;
  onToggle: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  onToggle,
  onReset,
}: TimerControlsProps) => {
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef.current) {
      (startButtonRef.current as HTMLButtonElement).focus();
    }
  }, []);

  return (
    <>
      <button
        ref={startButtonRef}
        className={`w-36 py-3 rounded-full transition 
          ${isRunning ? 'bg-red-500 hover:bg-red-600 focus:ring-red-400' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-400'} 
          text-white text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 `}
        onClick={onToggle}
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button
        className="w-36 py-3 rounded-full transition bg-gray-300 hover:bg-gray-400 text-gray-800 text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        onClick={onReset}
      >
        Reset
      </button>
    </>
  );
};

export default TimerControls;
