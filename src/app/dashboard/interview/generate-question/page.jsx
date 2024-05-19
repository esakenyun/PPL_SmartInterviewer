"use client";
import GenerateQuestionCard from "@/components/card/GenerateQuestionCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function GenerateQuestionPage() {
  const searchParams = useSearchParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const data = searchParams.get("data");
    if (data) {
      setQuestions(JSON.parse(decodeURIComponent(data)));
    }
  }, [searchParams]);

  return <>{questions.length > 0 ? <GenerateQuestionCard questions={questions} /> : <div className="flex justify-center items-center text-varians-vr06 h-screen">Loading Question....</div>}</>;
}
