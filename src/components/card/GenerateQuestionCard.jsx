"use client";
import { HiArrowLongRight } from "react-icons/hi2";
import { FiMic } from "react-icons/fi";
import { RxTriangleDown } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { handlePostAnswer } from "@/helpers/interviewHelper";

export default function GenerateQuestionCard({ questions }) {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const recognitionRef = useRef(null);

  const startRecording = () => {
    setIsRecording(true);

    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event) => {
      const { transcript } = event.results[event.results.length - 1][0];
      setAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[currentQuestionIndex] = transcript;
        return updatedAnswers;
      });
    };

    recognitionRef.current.start();
  };

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleToggleRecording = () => {
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      submitAnswers();
    }
  };

  const submitAnswers = async () => {
    const interviewData = {
      interviews: questions.map((question, index) => ({
        question: question.question,
        answer: answers[index],
      })),
    };

    const response = await handlePostAnswer(interviewData);
    const summaryID = response.data.data.summary_id;

    router.push(`/dashboard/interview/summary/${summaryID}`);
  };

  if (questions.length === 0) {
    return <p className="pl-24 flex justify-center items-center pt-36 text-varians-vr06">Loading Questions...</p>;
  }

  const { question, feedback, sampleResponse } = questions[currentQuestionIndex];

  return (
    <>
      <div className="pt-6 lg:pt-16 px-5 lg:pl-64 lg:px-32">
        <div className="flex justify-center items-center gap-3">
          {questions.map((_, index) => (
            <div key={index} className={`w-3 h-3 rounded-full ${currentQuestionIndex === index ? "bg-[#FA5F47]" : "bg-[#999999]"}`}></div>
          ))}
        </div>
      </div>
      <div className="pt-5 px-5 lg:pl-64 lg:px-32 flex justify-between items-center">
        <div>
          <p className="text-[#FA5F47]">Question No {currentQuestionIndex + 1}</p>
        </div>
        <div className="flex items-center gap-5 hover:scale-105 cursor-pointer" onClick={handleNextQuestion}>
          <p className="text-[#E9E4E3]">{currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}</p>
          <HiArrowLongRight className="text-[#FA5F47] text-3xl" />
        </div>
      </div>
      <div className="pt-4 px-5 lg:pl-64 lg:px-32">
        <div className="flex flex-col gap-7 md:justify-between md:flex-row">
          <div className="bg-[#E2E8F0] w-full h-fit rounded-3xl flex flex-col justify-between">
            <div className="px-10 py-10 lg:px-14 lg:py-14">
              <div>
                <p className="font-bold text-center">{question}</p>
                {answers[currentQuestionIndex] && <p className="pt-5 text-center font-extralight">{answers[currentQuestionIndex]}</p>}
              </div>
            </div>
            <div className="py-10 flex flex-col justify-end items-center gap-2">
              <div className="flex gap-1 text-[#FA5F47] justify-center">
                <p className="font-bold text-xl">00:00</p>
                <p className="font-bold text-xl">/</p>
                <p className="font-bold text-xl">02:00</p>
              </div>
              {isRecording ? (
                <button onClick={handleToggleRecording} className="py-3 px-3 rounded-full w-fit bg-[#FA5F47] animate-pulse">
                  <FiMic className="text-varians-vr06 text-2xl" />
                </button>
              ) : (
                <button onClick={handleToggleRecording} className="py-3 px-3 rounded-full w-fit bg-[#FA5F47]">
                  <FiMic className="text-varians-vr06 text-2xl" />
                </button>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="rounded-3xl bg-gradient-to-r from-[#FFFFFF] to-[#A68C89] p-0.5 h-full">
              <div className="w-full h-full bg-[#504E5A] rounded-3xl px-4 py-4">
                <div className="flex justify-between items-center">
                  <p className="text-[#E0E0E0]">Feedback</p>
                  <RxTriangleDown className="text-6xl text-[#999999]" />
                </div>
                <div className="text-center pb-2 text-[#E2E8F0] font-extralight">{feedback}</div>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-r from-[#FFFFFF] to-[#A68C89] p-0.5 h-full">
              <div className="w-full h-full bg-[#504E5A] rounded-3xl px-4 py-4">
                <div className="flex justify-between items-center">
                  <p className="text-[#E0E0E0]">Sample Response</p>
                  <RxTriangleDown className="text-6xl text-[#999999]" />
                </div>
                <div className="text-center pb-2 text-[#E2E8F0] font-extralight">{sampleResponse}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden pb-32"></div>
    </>
  );
}
