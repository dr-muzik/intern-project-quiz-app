import React, { useEffect, useState } from "react";
import CountDown from "../components/CountDown";
import Questions from "../components/Questions";
import { IQuestion, Questiongenerator } from "../Questiongenerator";
import { Link, useLocation } from "react-router-dom";

import { ICollation } from "../App";

interface UserAnswer {
  selectedAnswers: ICollation[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<ICollation[]>>;
  // getIndex(arg: number): void;
}

const GameInt: React.FC<UserAnswer> = ({
  selectedAnswers,
  setSelectedAnswers,
}) => {
  const [question, setQuestion] = useState<IQuestion[]>([]);
  // const [object, setObject] = useState<IQuestion>({} as IQuestion);
  const [index, setIndex] = useState<number>(0);

  const location = useLocation();
  const reset = location.state && location.state.reset;

  useEffect(() => {
    if (reset) {
      setIndex(0);
      setSelectedAnswers([]);
    }
  }, [reset, setSelectedAnswers]);

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

  //called the question from CountDown component
  const getObject = (arg: IQuestion[]) => {
    setQuestion(arg);
    // console.log(question);
  };

  const currentObject = question[index];

  const buttonCount: number = 5;

  //sending this 'selectedAnswers' to App.tsx(Parent)
  // getIndex(index);

  return (
    <React.Fragment>
      <main>
        <form action="" typeof="submit">
          <div className="main">
            {/* -----------top segment ------- */}
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
                <Link to="/submit">
                  <button>Submit</button>
                </Link>
              </div>
            </div>

            {/* -----------middle segment ------- */}
            <div className="mid">
              {/* question and answers interface */}
              <div className="cont">
                <Questions
                  object={currentObject}
                  selectedAnswers={selectedAnswers}
                  setSelectedAnswers={setSelectedAnswers}
                />
              </div>
            </div>

            {/*-------- lower-------- segment */}

            <div className="bottom">
              {/* question number button */}
              <div className="left">
                {Array.from({ length: buttonCount }, (_, i) => (
                  <button
                    key={i}
                    style={
                      selectedAnswers[i]
                        ? { backgroundColor: "green" }
                        : { backgroundColor: "white" }
                    }
                    onClick={() => {
                      setIndex(i);
                    }}
                    type="button"
                  >
                    {i + 1}
                  </button>
                ))}

                {/* index */}
              </div>

              {/* prev and next button */}
              <div className="right">
                <button onClick={prevQuestionHandler}>Prev</button>
                <button onClick={nextQuestionHandler}>Next</button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </React.Fragment>
  );
};

export default GameInt;
