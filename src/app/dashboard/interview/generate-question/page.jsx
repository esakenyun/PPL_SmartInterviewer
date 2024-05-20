"use client";

import GenerateQuestionCard from "@/components/card/GenerateQuestionCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function GenerateQuestionContent() {
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

export default function GenerateQuestionPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center text-varians-vr06 h-screen">Loading Question....</div>}>
      <GenerateQuestionContent />
    </Suspense>
  );
}
