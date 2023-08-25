import React from "react";
import "../styles/index.scss";
import { Link } from "react-router-dom";
import { Questiongenerator } from "../Questiongenerator";
import { ICollation } from "../App";

interface Result {
  selectedAnswers: ICollation[]; //gotten from App.txs(parent)
}

const SubmitInt: React.FC<Result> = ({ selectedAnswers }) => {
  // const arrObj = Object.entries(selectedAnswers).map((el) =>
  //   Object.fromEntries([el])
  // );
  // const navigate = useNavigate();
  // navigate("/", { state: { reset: true } });
  const playAgainHandler = () => {};

  selectedAnswers.sort((a, b) => {
    const idA = parseInt(a.id);
    const idB = parseInt(b.id);

    if (idA < idB) {
      return -1;
    }
    if (idA > idB) {
      return 1;
    }
    return -1;
  });
  console.log(selectedAnswers);
  return (
    <div className="main">
      <div>
        <Link to="/" onClick={playAgainHandler}>
          <h1>Play Again</h1>
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
