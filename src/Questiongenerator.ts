export interface IQuestion {
  id: number;
  question: string;
  answer: string[];
  correctAnswer: string;
}

export const Questiongenerator: IQuestion[] = [
  {
    id: 1,
    question:
      "Who is the First Democratic President of United State of America",
    answer: ["Abraham Lincoln", "Jung Pio", "Jose Pio", "DrMuzik"],
    correctAnswer: "Abraham Lincoln",
  },
  {
    id: 2,
    question:
      "Who is the First Democratic President of Federal Republic of Nigeria",
    answer: [
      "Nnamdi Azikiwe",
      "Donald trump",
      "Barack Ubama",
      "Hiliary Clinton",
    ],
    correctAnswer: "Nnamdi Azikiwe",
  },
  {
    id: 3,
    question: "Who is the current President of the Federal Republic of Nigeria",
    answer: [
      "His Excellency Tinubu",
      "Rt. Hon. Rotimi Amaechi",
      "Barr. Chief Umeh",
      "Shepherd Ft. James Orjinta",
    ],
    correctAnswer: "His Excellency Tinubu",
  },
  {
    id: 4,
    question: "What year did Nigeria gain her independence",
    answer: ["1960", "1980", "1990", "2000"],
    correctAnswer: "1960",
  },
  {
    id: 5,
    question:
      "'Remember the Sabbath Day to keep it holy...', Where can this be found in the bible?",
    answer: ["Exodus 20:8", "John 3:16", "lam. 14:20", "Prov. 22:6"],
    correctAnswer: "Exodus 20:8",
  },
];
