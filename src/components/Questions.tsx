// import React, { useState } from "react";
import { IQuestion } from "../Questiongenerator";

interface QuestionProp {
  object: IQuestion;
  selectedAnswers: {
    [key: number]: string | null;
  };
  setSelectedAnswers: React.Dispatch<
    React.SetStateAction<{
      [key: number]: string | null;
    }>
  >;
}

const Questions: React.FC<QuestionProp> = ({
  object,
  selectedAnswers,
  setSelectedAnswers,
}) => {
  const inputHandler = (questionId: number, selectedOption: string) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: selectedOption,
    }));
  };

  return (
    <div>
      <div className="quesNans">
        <b>Question {object?.id}</b>
        <div className="ques">{object?.question}</div>
        <div className="ans">
          {object?.answer.map((ans, i) => (
            <div key={i}>
              <label htmlFor={ans} key={i}>
                <input
                  type="radio"
                  onChange={() => inputHandler(object?.id, ans)}
                  name={`question_${object?.id}`}
                  value={ans}
                  id={ans}
                  checked={selectedAnswers[object?.id] === ans}
                />
                {ans}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
