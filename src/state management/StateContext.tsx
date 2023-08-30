import React from "react";
import { useState, useContext, createContext } from "react";
import { ICollation } from "../App";
import { IQuestion } from "../Questiongenerator";
// import { IQuestion } from "../Questiongenerator";

interface AppContextType {
  selectedAnswers: ICollation[];
  data: IQuestion[];
  object: IQuestion[];
  // questions: IQuestion;
  updateSelectedAnswers(arg: ICollation[]): void;
  updateData(arg: IQuestion[]): void;
  updateObject(arg: IQuestion[]): void;
}

//create a single context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Export the context and custom hook
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

//Create the provider component
export const StateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<ICollation[]>([]);
  const [data, setData] = useState<IQuestion[]>([]);
  const [object, setObject] = useState<IQuestion[]>([]);
  const updateSelectedAnswers = (newState: ICollation[]) => {
    setSelectedAnswers(newState);
  };
  const updateData = (newState: IQuestion[]) => {
    setData(newState);
  };
  const updateObject = (newState: IQuestion[]) => {
    setObject(newState);
  };

  const contextValue: AppContextType = {
    selectedAnswers,
    updateSelectedAnswers,
    data,
    updateData,
    object,
    updateObject,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
