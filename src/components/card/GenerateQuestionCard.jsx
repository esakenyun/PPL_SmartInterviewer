"use client";
import { HiArrowLongRight } from "react-icons/hi2";
import { FiMic } from "react-icons/fi";
import { RxTriangleDown } from "react-icons/rx";
import { useState } from "react";

export default function GenerateQuestionCard() {
  const questions = [
    {
      question: "Can you provide an example of a challenging software development project you worked on and how you tackled any obstacles that arose?",
      answer:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      feedback:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      sampleResponse:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      question: "Can you provide an example of a challenging software development project you worked on and how you tackled any obstacles that arose?",
      answer:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      feedback:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      sampleResponse:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      question: "Can you provide an example of a challenging software development project you worked on and how you tackled any obstacles that arose?",
      answer:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      feedback:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      sampleResponse:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      question: "Can you provide an example of a challenging software development project you worked on and how you tackled any obstacles that arose?",
      answer:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      feedback:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      sampleResponse:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    // Add more questions here as objects with 'question', 'answer', 'feedback', and 'sampleResponse' keys
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const { question, answer, feedback, sampleResponse } = questions[currentQuestionIndex];

  const truncatedAnswer = answer.length > 270 ? answer.slice(0, 270) + "..." : answer;
  const truncatedFeedback = feedback.length > 250 ? feedback.slice(0, 250) + "..." : feedback;
  const truncatedSampleResponse = sampleResponse.length > 250 ? sampleResponse.slice(0, 250) + "..." : sampleResponse;

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      submitAnswers();
    }
  };

  const submitAnswers = () => {
    console.log("Answers submitted!");
  };

  return (
    <>
      <div className=" pt-6 lg:pt-16 px-5 lg:pl-64 lg:px-32">
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
        <div className="flex flex-col gap-7 md:justify-between md:flex-row ">
          <div className="bg-[#E2E8F0] w-full h-fit rounded-3xl flex flex-col justify-between">
            <div className="px-10 py-10 lg:px-14 lg:py-14">
              <div>
                <p className="font-bold text-center">{question}</p>
                <p className="pt-5 text-center font-extralight">{truncatedAnswer}</p>
              </div>
            </div>
            <div className="py-10 flex flex-col justify-end items-center gap-2">
              <div className="flex gap-1 text-[#FA5F47] justify-center">
                <p className="font-bold text-xl">00:00</p>
                <p className="font-bold text-xl">/</p>
                <p className="font-bold text-xl">02:00</p>
              </div>
              <button className="bg-[#FA5F47] py-3 px-3 rounded-full w-fit">
                <FiMic className="text-varians-vr06 text-2xl" />
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="rounded-3xl bg-gradient-to-r from-[#FFFFFF] to-[#A68C89] p-0.5 h-full">
              <div className="w-full h-full bg-[#504E5A] rounded-3xl px-4 py-4">
                <div className="flex justify-between items-center">
                  <p className="text-[#E0E0E0]">FeedBack</p>
                  <RxTriangleDown className="text-6xl text-[#999999]" />
                </div>
                <div className="text-center pb-2 text-[#E2E8F0] font-extralight">{truncatedFeedback}</div>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-r from-[#FFFFFF] to-[#A68C89] p-0.5 h-full">
              <div className="w-full h-full bg-[#504E5A] rounded-3xl px-4 py-4">
                <div className="flex  justify-between items-center">
                  <p className="text-[#E0E0E0]">Sample Response</p>
                  <RxTriangleDown className="text-6xl text-[#999999]" />
                </div>
                <div className="text-center pb-2 text-[#E2E8F0] font-extralight">{truncatedSampleResponse}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden pb-32"></div>
    </>
  );
}
