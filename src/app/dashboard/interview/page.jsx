export default function Interview() {
  return (
    <>
      <div className="px-10 lg:px-72 py-10 text-varians-vr06">
        <div className="flex justify-center flex-col">
          <p className="text-center text-2xl">Select Job Description</p>
          {/* Dekstop Categories */}
          <div className="hidden lg:block">
            <div className="mt-14 mb-10 flex flex-wrap justify-center gap-5">
              <button className="border border-[#F37845] rounded-full py-1 px-4 hover:bg-[#F37845] flex-grow-0 flex-shrink-0 flex-basis-0 w-52">Data Analyst</button>
              <button className="border border-[#F37845] rounded-full py-1 px-4 hover:bg-[#F37845] flex-grow-0 flex-shrink-0 flex-basis-0 w-52">Business Analyst</button>
              <button className="border border-[#F37845] rounded-full py-1 px-4 hover:bg-[#F37845] flex-grow-0 flex-shrink-0 flex-basis-0 w-52">Software Engineer</button>
              <button className="border border-[#F37845] rounded-full py-1 px-4 hover:bg-[#F37845] flex-grow-0 flex-shrink-0 flex-basis-0 w-52">Marketing Specialist</button>
              <button className="border border-[#F37845] rounded-full py-1 px-4 hover:bg-[#F37845] flex-grow-0 flex-shrink-0 flex-basis-0 w-52">UI/UX Designer</button>
              <button className="border border-[#F37845] rounded-full py-1 px-4 hover:bg-[#F37845] flex-grow-0 flex-shrink-0 flex-basis-0 w-52">Custom Jobdesc</button>
            </div>
          </div>
          {/* Mobile Categories */}
          <div className="lg:hidden">
            <div className="mt-5 mb-8 flex flex-wrap justify-center gap-5 text-[10px]">
              <button className="border border-[#F37845] rounded-full py-1 px-4 hover:bg-[#F37845] flex-grow-0 flex-shrink-0 flex-basis-0 w-20">Data Analyst</button>
              <button className="border border-[#F37845] rounded-full py-1 px-4 hover:bg-[#F37845] flex-grow-0 flex-shrink-0 flex-basis-0 w-20">Business Analyst</button>
              <button className="border border-[#F37845] rounded-full py-1 px-4 hover:bg-[#F37845] flex-grow-0 flex-shrink-0 flex-basis-0 w-20">Software Engineer</button>
              <button className="border border-[#F37845] rounded-full py-1 px-4 hover:bg-[#F37845] flex-grow-0 flex-shrink-0 flex-basis-0 w-20">Marketing Specialist</button>
              <button className="border border-[#F37845] rounded-full py-1 px-4 hover:bg-[#F37845] flex-grow-0 flex-shrink-0 flex-basis-0 w-20">UI/UX Designer</button>
              <button className="border border-[#F37845] rounded-full py-1 px-4 hover:bg-[#F37845] flex-grow-0 flex-shrink-0 flex-basis-0 w-20">Custom Jobdesc</button>
            </div>
          </div>
          <form action="">
            <div className="flex flex-col gap-4 justify-center text-black">
              <input type="text" className="w-full p-2 rounded-full border-4 border-[#FA5F47] lg:p-6" placeholder="Job Detail" />
              {/* <input type="text" className="w-full pb-60 p-2 rounded-3xl border-4 border-[#FA5F47] lg:h-0 lg:pb-52 lg:p-6" placeholder="Detail Jobdesc" /> */}
              <textarea name="" id="" cols="1" rows="1" className="w-full pb-60 p-2 rounded-3xl border-4 border-[#FA5F47] lg:h-0 lg:pb-52 lg:p-6 overflow-y-hidden resize-none" placeholder="Detail Jobdesc"></textarea>
            </div>
            <div className="mt-5 mb-20 flex justify-center lg:mb-0">
              <button className="py-3 px-7 rounded-full bg-gradient-to-b from-[#F27C45] to-[#FF5049] lg:border lg:border-black hover:scale-105"> Generate Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
