import React, { useEffect, useState } from "react";
import CountDown from "../components/CountDown";
import Questions from "../components/Questions";
import { IQuestion, Quiz1, Quiz2, Quiz3 } from "../Questiongenerator";
import { Link, useParams } from "react-router-dom";
// import { ICollation } from "../App";
import { useAppContext } from "../state management/StateContext";

const GameInt = () => {
  const [index, setIndex] = useState<number>(0);

  //called the global state manager
  const { selectedAnswers, updateData, object } = useAppContext();

  let { quizId } = useParams();
  // console.log(quizId);

  let data: IQuestion[];
  //switch cases
  switch (quizId) {
    case (quizId = "quiz-1"):
      data = Quiz1;
      break;
    case (quizId = "quiz-2"):
      data = Quiz2;
      break;
    case (quizId = "quiz-3"):
      data = Quiz3;
      break;

    default:
      data = [];
  }

  useEffect(() => {
    updateData(data);
  }, [data, updateData]);

  const nextQuestionHandler = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevQuestionHandler = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const currentObject = object[index];

  const buttonCount: number = data?.length;

  return (
    <main>
      <div className="container">
        <div className="question-type">
          <h1>{quizId?.toUpperCase()}</h1>
        </div>
        <form action="" typeof="submit">
          <div className="main">
            {/* -----------top segment ------- */}
            <div className="top">
              <div className="left">
                <CountDown
                  seconds={120}
                  questions={data}
                  // getObject={getObject}
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
                <Questions object={currentObject} />
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
                      selectedAnswers.some((el) => el.id === i + 1)
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
                <button type="button" onClick={prevQuestionHandler}>
                  Prev
                </button>
                <button type="button" onClick={nextQuestionHandler}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default GameInt;
