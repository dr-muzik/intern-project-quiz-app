import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <Link to="/">Back</Link>
      <br />
      <br />
      <Link to="/gameInt/quiz-1">
        <h3>Quiz 1</h3>
      </Link>
      <Link to="/gameInt/quiz-2">
        <h3>Quiz 2</h3>
      </Link>
      <Link to="/gameInt/quiz-3">
        <h3>Quiz 3</h3>
      </Link>
    </div>
  );
};

export default Dashboard;
