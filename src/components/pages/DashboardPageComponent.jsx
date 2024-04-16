import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { BsClipboardCheck, BsClipboardData, BsPersonCheck, BsCalendar2Check } from "react-icons/bs";
import { GoClock } from "react-icons/go";

export default function DashboardPageComponent() {
  return (
    <>
      {/* Topbar Dashboard */}
      <div className="px-10 lg:px-36 lg:pl-64 py-10">
        <div className="flex justify-between items-center border-b-[1px] px-3 pb-4">
          <p className="text-varians-vr06 text-sm lg:text-2xl font-semibold">User Dashboard</p>
          <div className="flex items-center gap-3">
            <Image src="/avatar.png" width={50} height={50} className="w-10 lg:w-14" alt="avatar user" priority />
            <p className="text-varians-vr06 text-xs lg:text-base ">John Doe</p>
          </div>
        </div>
        {/* Summary Score*/}
        <div className="flex gap-20 py-10 lg:px-5">
          <div className="relative w-1/4 hidden lg:block">
            <Image src="/dashboard.png" width={300} height={300} alt="Interview" className="h-auto w-auto" priority />
            <div className="absolute left-0 top-1/3 w-full h-full flex items-center justify-center">
              <button className="flex items-center gap-2 bg-[#E2E8F0] text-[#C25F50] px-4 py-2 rounded-3xl font-semibold hover:scale-105">
                {" "}
                <span className="text-2xl">+</span> Start Interview
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/4 bg-[#E2E8F0] px-3 py-10 rounded-3xl lg:rounded-2xl lg:px-14 lg:py-14">
            <div className="flex gap-2 items-center text-[#171717]">
              <BsClipboardCheck className="text-2xl" />
              <p className="font-semibold">Summary Score</p>
            </div>
            <div className="flex py-5 gap-2 lg:py-7 lg:gap-7">
              <div className="flex flex-col gap-3 items-center bg-primary-pr01 rounded-full py-10 px-5 text-white w-full md:rounded-2xl">
                <div className="rounded-full border border-white py-2 px-2">
                  <BsClipboardData className="text-xl lg:text-3xl" />
                </div>
                <p className="text-xs text-center lg:text-xl">Average Score</p>
                <p className="font-semibold">900</p>
              </div>
              <div className="flex flex-col gap-3 items-center bg-[#F5764E] rounded-full py-10 px-5 text-white w-full md:rounded-2xl">
                <div className="rounded-full border border-white py-2 px-2">
                  <BsPersonCheck className="text-xl lg:text-3xl" />
                </div>
                <p className="text-xs lg:text-xl">Interviews</p>
                <p className="font-semibold">54</p>
              </div>
              <div className="flex flex-col gap-3 items-center bg-[#F1F5F9] rounded-full py-10 px-5 text-[#171717] w-full md:rounded-2xl">
                <div className="rounded-full border border-[#171717] py-2 px-2">
                  <BsCalendar2Check className="text-xl lg:text-3xl" />
                </div>
                <p className="text-xs lg:text-xl">Answered</p>
                <p className="font-semibold">900</p>
              </div>
            </div>
          </div>
        </div>
        {/* User History */}
        <div className="flex justify-between items-center text-varians-vr06 ">
          <p className="text-sm lg:text-2xl font-semibold">User History</p>
          <div className="flex gap-1 items-center hover:scale-105 cursor-pointer">
            <p className="text-sm lg:text-base">See All History</p>
            <IoIosArrowForward className="text-base lg:text-lg" />
          </div>
        </div>
        <div className="mt-5">
          <div className="flex flex-col gap-4">
            {/* Desktop Mode */}
            <div className="w-full bg-varians-vr03 rounded-2xl hidden lg:block">
              <div className="py-5 flex justify-around items-center">
                <div className="flex items-center gap-2 text-primary-pr06">
                  <GoClock className="text-xl" />
                  <p className="text-sm">21 May 2024 11.00 am</p>
                </div>
                <p className="text-[#171717] font-medium">Junior Fullstack Developer</p>
                <div className="flex flex-col">
                  <div className="flex gap-2 text-xs text-[#171717] font-semibold">
                    <p>Average Score</p>
                    <p>900</p>
                  </div>
                  <div className=" mt-2 w-full bg-varians-vr00 rounded-3xl h-1 ">
                    <div className="bg-[#FA5F47] h-1 rounded-3xl text-xs text-white text-center w-1/3" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <button className="py-2 px-3 rounded-md bg-secondary-sc04 hover:scale-105 text-white">See More</button>
              </div>
            </div>
            {/* Mobile Mode */}
            <div className="w-full bg-varians-vr03 rounded-2xl lg:hidden">
              <div className="py-3 px-4 flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <p className=" text-xs text-[#171717] font-medium">Junior Fullstack Developer</p>
                  <div className="flex items-center gap-2 text-primary-pr06">
                    <GoClock className="text-sm" />
                    <p className="text-xs">21 May 2024 11.00 am</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-2 text-xs text-[#171717] font-semibold">
                      <p>Average Score</p>
                      <p>900</p>
                    </div>
                    <div className=" mt-2 w-full bg-varians-vr00 rounded-3xl h-1 ">
                      <div className="bg-[#FA5F47] h-1 rounded-3xl text-xs text-white text-center w-1/3" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <button className="py-2 px-3 rounded-full bg-secondary-sc04 hover:scale-105 text-white text-xs">See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
