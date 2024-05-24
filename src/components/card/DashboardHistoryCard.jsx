import { GoClock } from "react-icons/go";

export default function DashboardHistoryCard({ historyData }) {
  const history = historyData || Array(2).fill(null);

  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      : "Loading...";

  return (
    <>
      <div className="mt-5">
        <div className="flex flex-col gap-4">
          {/* Desktop Mode */}
          {history.map((item, index) => (
            <div key={index} className="w-full bg-varians-vr03 rounded-2xl hidden lg:block">
              <div className="py-5 flex justify-around items-center">
                <div className="flex items-center gap-2 text-primary-pr06">
                  <GoClock className="text-xl" />
                  <p className="text-sm">{item ? formatDate(item.date) : "Loading..."}</p>
                </div>
                <p className="text-[#171717] font-medium">{item ? item.job_title || "Job Title" : "Loading..."}</p>
                <div className="flex flex-col">
                  <div className="flex gap-2 text-xs text-[#171717] font-semibold">
                    <p>Average Score</p>
                    <p>{item ? item.score * 10 : "Loading..."}</p>
                  </div>
                  <div className=" mt-2 w-full bg-varians-vr00 rounded-3xl h-1 ">
                    <div
                      className="bg-[#FA5F47] h-1 rounded-3xl text-xs text-white text-center"
                      style={{ width: `${item ? item.score * 10 : 0}%` }}
                      role="progressbar"
                      aria-valuenow={item ? item.score : 0}
                      aria-valuemin="0"
                      aria-valuemax="100"></div>
                  </div>
                </div>
                <button className="py-2 px-3 rounded-md bg-secondary-sc04 hover:scale-105 text-white">See More</button>
              </div>
            </div>
          ))}
          {/* Mobile Mode */}
          {history.map((item, index) => (
            <div key={index} className="w-full bg-varians-vr03 rounded-2xl lg:hidden">
              <div className="py-3 px-4 flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <p className=" text-xs text-[#171717] font-medium">{item ? item.job_title || "Job Title" : "Loading..."}</p>
                  <div className="flex items-center gap-2 text-primary-pr06">
                    <GoClock className="text-sm" />
                    <p className="text-xs">{item ? formatDate(item.date) : "Loading..."}</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-2 text-xs text-[#171717] font-semibold">
                      <p>Average Score</p>
                      <p>{item ? item.score * 10 : "Loading..."}</p>
                    </div>
                    <div className=" mt-2 w-full bg-varians-vr00 rounded-3xl h-1 ">
                      <div
                        className="bg-[#FA5F47] h-1 rounded-3xl text-xs text-white text-center"
                        style={{ width: `${item ? item.score * 10 : 0}%` }}
                        role="progressbar"
                        aria-valuenow={item ? item.score : 0}
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <button className="py-2 px-3 rounded-full bg-secondary-sc04 hover:scale-105 text-white text-xs">See More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
