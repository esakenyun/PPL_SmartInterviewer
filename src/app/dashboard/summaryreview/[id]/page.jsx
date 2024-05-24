"use client";
import SummaryReportCard from "@/components/card/SummaryReportCard";
import { handleSummaryFeedbackById } from "@/helpers/interviewHelper";
import { useEffect, useState } from "react";

export default function SummaryReviewQuestion({ params }) {
  const [summaryData, setSummaryData] = useState(null);

  const getSummaryData = async () => {
    const response = await handleSummaryFeedbackById(params.id);
    setSummaryData(response.data); // Save the actual data
    console.log(response.data);
  };

  useEffect(() => {
    getSummaryData();
  }, [params.id]);

  return (
    <>
      {/* Render only when data is available */}
      {summaryData ? <SummaryReportCard summaryFeedBack={summaryData.data} /> : <div>Loading...</div>}
    </>
  );
}
