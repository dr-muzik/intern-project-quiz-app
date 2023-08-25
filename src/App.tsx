import "./App.css";
import "./styles/index.scss";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameInt from "./interface/GameInt";
import SubmitInt from "./interface/SubmitInt";
import MainLayout from "./layouts/MainLayout";

export interface ICollation {
  id: string;
  question: string;
  Answer: string;
}

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState<ICollation[]>([]);

  // const location = useLocation();
  // const reset = location.state && location.state.reset;

  // useEffect(() => {
  //   if (reset) {
  //     setSelectedAnswers([]);
  //   }
  // }, [reset]);
  // console.log(selectedAnswers);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <GameInt
                selectedAnswers={selectedAnswers}
                setSelectedAnswers={setSelectedAnswers}
              />
            }
          />
          <Route
            path="submit"
            element={<SubmitInt selectedAnswers={selectedAnswers} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
