"use client";
import { useRouter } from "next/navigation";
import { GoClock } from "react-icons/go";
export default function SummaryReport() {
  const router = useRouter();

  const handleSumbit = () => {
    router.push("/dashboard");
  };
  return (
    <>
      {/* Desktop Mode */}
      <div className="pt-5 px-5 lg:pt-8 lg:pl-64 lg:px-32 hidden lg:block">
        <p className="text-varians-vr06 text-xl">Summary Report</p>
        <div className="mt-5 w-full bg-[#E2E8F0] rounded-2xl">
          <div className="flex justify-between items-center gap-5 lg:px-14 lg:py-10">
            <div className="w-full flex flex-col gap-5">
              <div className=" flex flex-col gap-3 bg-[#3F3E47] rounded-x px-4 py-5 rounded-xl text-varians-vr06">
                <p className="text-center text-sm">Can you provide an example of a challenging software development project?</p>
                <p className="text-[11px] text-center font-extralight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ... see more</p>
              </div>
              <div className=" flex flex-col gap-3 bg-[#3F3E47] rounded-x px-4 py-5 rounded-xl text-varians-vr06">
                <p className="text-center text-sm">Can you provide an example of a time when you had to investigate a complaint brought forward?</p>
                <p className="text-[11px] text-center font-extralight">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ... see more</p>
              </div>
              <div className=" flex flex-col gap-3 bg-[#3F3E47] rounded-x px-4 py-5 rounded-xl text-varians-vr06">
                <p className="text-center text-sm">What is Lorem Ipsum?</p>
                <p className="text-[11px] text-center font-extralight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ... see more</p>
              </div>
              <div className=" flex flex-col gap-3 bg-[#3F3E47] rounded-x px-4 py-5 rounded-xl text-varians-vr06">
                <p className="text-center text-sm">Why do we use it?</p>
                <p className="text-[11px] text-center font-extralight">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ... see more</p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 items-center">
              <p className="font-bold text-2xl w-72 text-center">Junior Fullstack Developer</p>
              <div className="flex gap-3 text-varians-vr00 items-center">
                <GoClock className="text-lg" />
                <p className="text-sm">21 May 2024 11.00 am</p>
              </div>
              <div className="flex flex-col gap-4 items-center py-16 px-20 bg-[#FA5F47] rounded-[3rem] text-white">
                <p className="text-xl">Summary Score</p>
                <p className="font-bold text-6xl">100</p>
              </div>
              <button className="py-2 px-6 bg-gradient-to-b from-[#F27C45] to-[#FF5049] text-varians-vr06 rounded-full hover:scale-105" onClick={handleSumbit}>
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-12"></div>
    </>
  );
}
