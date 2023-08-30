import "./App.css";
import "./../node_modules/bootstrap/scss/bootstrap.scss";
import "./styles/index.scss";
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameInt from "./interface/GameInt";
import SubmitInt from "./interface/SubmitInt";
import MainLayout from "./layouts/MainLayout";
import Details from "./components/Details";
import Dashboard from "./dashboard/Dashboard";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
// import { IQuestion } from "./Questiongenerator";

export interface ICollation {
  id: number;
  question: string;
  Answer: string;
}

function App() {
  // const [data, setData] = useState<IQuestion[]>([]);

  // const getData = (arg: IQuestion[]) => {
  //   setData(arg);
  // };

  // const location = useLocation();
  // const reset = location.state && location.state.reset;

  // useEffect(() => {
  //   if (reset) {
  //     setSelectedAnswers([]);
  //   }
  // }, [reset]);
  // console.log(selectedAnswers);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Registration />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="gameInt/:quizId" element={<GameInt />} />
            <Route path="submit" element={<SubmitInt />} />
            <Route path="submit/:id" element={<Details />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
