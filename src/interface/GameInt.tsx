import React, { useCallback, useEffect, useState } from "react";
import CountDown from "./components/CountDown";
import Questions from "./components/Questions";
import { IQuestion, Questiongenerator } from "../Questiongenerator";

const GameInt: React.FC = () => {
  const [question, setQuestion] = useState<IQuestion[]>([]);
  // const [object, setObject] = useState<IQuestion>({} as IQuestion);
  const [index, setIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string | null;
  }>({});

  const nextQuestionHandler = () => {
    if (index < Questiongenerator.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevQuestionHandler = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const getObject = (arg: IQuestion[]) => {
    setQuestion(arg);
    console.log(question);
  };

  const currentObject = question[index];
  return (
    <React.Fragment>
      <div className="main">
        <div className="top">
          <div className="left">
            <CountDown
              seconds={120}
              questions={Questiongenerator}
              getObject={getObject}
            />
          </div>
          <div className="right">
            {" "}
            <button type="submit" onClick={() => console.log(selectedAnswers)}>
              Submit
            </button>
          </div>
        </div>
        <div className="mid">
          <div className="cont">
            <Questions
              object={currentObject}
              selectedAnswers={selectedAnswers}
              setSelectedAnswers={setSelectedAnswers}
            />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <button
              style={
                selectedAnswers[1]
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "white" }
              }
              onClick={() => {
                setIndex(0);
              }}
            >
              1
            </button>
            <button
              style={
                selectedAnswers[2]
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "white" }
              }
              onClick={() => {
                setIndex(1);
              }}
            >
              2
            </button>
            <button
              style={
                selectedAnswers[3]
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "white" }
              }
              onClick={() => {
                setIndex(2);
              }}
            >
              3
            </button>
            <button
              style={
                selectedAnswers[4]
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "white" }
              }
              onClick={() => {
                setIndex(3);
              }}
            >
              4
            </button>
            <button
              style={
                selectedAnswers[5]
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "white" }
              }
              onClick={() => {
                setIndex(4);
              }}
            >
              5
            </button>
            {/* index */}
          </div>
          <div className="right">
            <button onClick={prevQuestionHandler}>Prev</button>
            <button onClick={nextQuestionHandler}>Next</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GameInt;
