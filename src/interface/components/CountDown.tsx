import { useEffect, useRef, useState } from "react";

import "../../styles/button.css";
import { IQuestion } from "../../Questiongenerator";

interface CountDownProps {
  seconds: number;
  questions: IQuestion[];
  getObject(arg: IQuestion[]): void;
}

/* interface Timer{
  getObject(): IQuestion[]
} */
const formatTime = (time: number) => {
  let minutes: any = Math.floor(time / 60);
  let seconds: any = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = minutes.toString().padStart(2, "0");
  if (seconds <= 10) seconds = seconds.toString().padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const CountDown: React.FC<CountDownProps> = ({
  seconds,
  questions,
  getObject,
}) => {
  const [countDown, setCountDown] = useState<number>(seconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [object, setObject] = useState<IQuestion[]>([]);

  const timerId: any = useRef();

  useEffect(() => {
    setObject(questions);
  }, [questions]);

  const startHandler = () => {
    setIsRunning(true);

    timerId.current = setInterval((): void => {
      setCountDown((prev: number) => prev - 1);
    }, 1000);

    getObject(object);
    console.log(timerId.current);

    console.log(isRunning);
    // console.log(object);
  };

  useEffect(() => {
    if (countDown === 0) {
      clearInterval(timerId.current);
      setCountDown(seconds);
      alert("END");
      setIsRunning(false);
    }
  }, [countDown, seconds]);

  const pauseHandler = () => {
    setCheck(!check);
    clearInterval(timerId.current);
  };
  const playHandler = () => {
    setCheck(!check);

    timerId.current = setInterval((): void => {
      setCountDown((prev: number) => prev - 1);
    }, 1000);
  };

  const resetHandler = () => {
    setIsRunning(false);
    setCheck(false);

    clearInterval(timerId.current);
    setCountDown(seconds);
  };

  const countDownDefault = "00:00";

  return (
    <div>
      Timer:
      {isRunning ? (
        <h1>{formatTime(countDown)}</h1>
      ) : (
        <h1>{countDownDefault}</h1>
      )}
      <div>
        {!isRunning ? (
          <button onClick={startHandler}>Start</button>
        ) : (
          <button onClick={resetHandler}>restart</button>
        )}

        {!check ? (
          <button onClick={pauseHandler} disabled={!isRunning}>
            pause
          </button>
        ) : (
          <button onClick={playHandler}>play</button>
        )}
      </div>
    </div>
  );
};

export default CountDown;
