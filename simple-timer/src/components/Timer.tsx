import { useState, useRef, useEffect } from 'react';
import TimerControls from './TimerControls';
import TimerDisplay from './TimerDisplay';

const Timer: React.FC = () => {
  const [time, setTime] = useState(() => {
    const time = localStorage.getItem('time');
    return time ? Number(time) : 0;
  });

  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    localStorage.setItem('time', time.toString());
  }, [time]);

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  function toggleTimer(): void {
    if (isRunning) {
      clearInterval(intervalRef.current as ReturnType<typeof setInterval>);
      setIsRunning(false);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      setIsRunning(true);
    }
  }

  function resetTimer(): void {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current as ReturnType<typeof setInterval>);
    localStorage.removeItem('time');
  }
  return (
    <>
      <TimerDisplay time={time} />
      <TimerControls
        isRunning={isRunning}
        onToggle={toggleTimer}
        onReset={resetTimer}
      />
    </>
  );
};

export default Timer;
