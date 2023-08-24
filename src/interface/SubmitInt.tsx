import React from "react";
import "../styles/index.scss";
import { Link } from "react-router-dom";
import { Questiongenerator } from "../Questiongenerator";

interface Result {
  UsersAnswers: {
    [key: number]: string | null;
  }; //gotten from App.txs(parent)
}

const SubmitInt: React.FC<Result> = ({ UsersAnswers }) => {
  console.log(Object.entries(UsersAnswers));
  return (
    <div className="main">
      <div>
        <Link to="/">
          <h1>Back</h1>
        </Link>
      </div>

      <div className="container">
        <div className="remark">
          <h1>EXECELLENT!</h1>
          <p>you have gotten 5/5</p>
        </div>
        <div className="answers">
          <div className="question">
            <h3 style={{ marginBottom: "10px" }}>Question 1: </h3>
            <p className="ques">{Questiongenerator[0].question}</p>
            <p className="correct-wrong">
              <span className="CA">correct Answer:</span>{" "}
              <span className="ans">{Questiongenerator[0].correctAnswer}</span>
            </p>
            {/* <p className="wrong">
              <span className="WA">Wrong Answer:</span>{" "}
              {Questiongenerator[0].correctAnswer}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitInt;
