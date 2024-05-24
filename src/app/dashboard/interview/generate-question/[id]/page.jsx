"use client";
import GenerateQuestionCard from "@/components/card/GenerateQuestionCard";
import { handleGetQuestionById } from "@/helpers/interviewHelper";
import { useEffect, useState } from "react";

function GenerateQuestionPage() {
  const [questions, setQuestions] = useState([]);

  const getQuestion = async () => {
    const response = await handleGetQuestionById();
    setQuestions(response);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return <GenerateQuestionCard questions={questions} />;
}

export default GenerateQuestionPage;
