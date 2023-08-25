import React from "react";
import { IQuestion } from "../Questiongenerator";
import { ICollation } from "../App";

interface QuestionProp {
  object: IQuestion;
  selectedAnswers: ICollation[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<ICollation[]>>;
}

const Questions: React.FC<QuestionProp> = ({
  object,
  selectedAnswers,
  setSelectedAnswers,
}) => {
  console.log(selectedAnswers);
  const inputHandler = (
    questionId: number,
    selectedOption: string,
    questionAnswered: string
  ) => {
    const obj: ICollation = {
      id: questionId as unknown as string,
      Answer: selectedOption,
      question: questionAnswered,
    };

    const updatedAnswers = [...selectedAnswers];

    //Find index of existing answer for the same question
    const existingIndex = updatedAnswers.findIndex(
      (answer) => Number(answer.id) === questionId
    );
    console.log(existingIndex);

    if (existingIndex !== -1) {
      //if it exists, we update that index
      updatedAnswers[existingIndex].Answer = selectedOption;
    } else {
      //if it doesn't we create a new index and add the obj to it
      updatedAnswers.push(obj);
    }

    setSelectedAnswers(updatedAnswers);
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
                  onChange={() =>
                    inputHandler(object?.id, ans, object.question)
                  }
                  name={`question_${object?.id}`}
                  value={ans}
                  id={ans}
                  checked={selectedAnswers.some(
                    (answer) =>
                      Number(answer.id) === object?.id && answer.Answer === ans
                  )}
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
