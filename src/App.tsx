import "./App.css";
import "./styles/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameInt from "./interface/GameInt";
import SubmitInt from "./interface/SubmitInt";
import MainLayout from "./layouts/MainLayout";
import { useState } from "react";

function App() {
  const [usersAnswer, setUsersAnswer] = useState({});

  const getUsersAnswers = (arg: { [key: number]: string | null }) => {
    // console.log(arg);
    setUsersAnswer(arg);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={<GameInt getUsersAnswers={getUsersAnswers} />}
          />
          <Route
            path="submit"
            element={<SubmitInt UsersAnswers={usersAnswer} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
