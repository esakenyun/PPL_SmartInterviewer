import Image from "next/image";
import Link from "next/link";
export default function HomePageComponent() {
  return (
    <>
      {/* Home Section */}
      <div className="flex justify-start items-center text-varians-vr06 px lg:justify-center md:gap-16 py-5">
        <div className="pl-5 py-32 md:py-40 lg:pl-0 lg:py-0 lg:mb-28">
          <p className="font-extrabold text-5xl md:text-7xl leading-none">Smart</p>
          <p className="font-extralight text-5xl md:text-7xl leading-none -mt-2 md:-mt-5">Interviewer</p>
          <p className="py-7 font-light text-[8px] w-64 md:w-[370px] md:text-sm">Get ready to approach interviews with confidence and lay the groundwork for your career success with Smart Interviewer Trainer AI</p>
          <Link href="/auth">
            <button className="py-2 px-7 bg-gradient-to-b from-[#F27C45] to-[#FF5049] rounded-full text-lg hover:scale-105 border border-black z-50 absolute">Start Now</button>
          </Link>
        </div>
        <Image src="/header_pict.png" width={500} height={500} className="hidden lg:block w-auto h-auto" alt="home" priority />
      </div>
      {/* Home Section Dulu */}
      {/* <div className="grid md:grid-cols-2 text-varians-vr06 py-5">
        <div className="pl-6 py-28 md:pl-40 md:py-28">
          <p className="font-extrabold text-5xl md:text-7xl leading-none">Smart</p>
          <p className="font-extralight text-5xl md:text-7xl leading-none -mt-2 md:-mt-5">Interviewer</p>
          <p className="py-7 font-light text-[8px] w-64 md:w-[370px] md:text-sm">Get ready to approach interviews with confidence and lay the groundwork for your career success with Smart Interviewer Trainer AI</p>
          <button className="py-2 px-7 bg-gradient-to-b from-[#F27C45] to-[#FF5049] rounded-full text-lg hover:scale-105 border border-black">Start Now</button>
        </div>
        <Image src="/header_pict.png" width={500} height={500} className="hidden md:block w-auto h-auto" alt="home" priority />
      </div> */}
      {/* Features */}
      <div className="py-20 flex flex-col items-center md:py-32">
        <p className="text-varians-vr06 text-2xl font-normal tracking-[0.2em] md:text-3xl md:tracking-[0.3em] ">Features</p>
        <p className="text-[#FA5F47] font-semibold text-xl mt-2 md:text-3xl">Practice Interview With AI</p>
        <div className="py-5 flex gap-10 flex-col items-center lg:flex-row">
          <div>
            <Image src="/laptop.png" width={300} height={400} alt="Laptop" className="w-auto md:w-[500px]" priority />
          </div>
          <div className="flex flex-col justify-center gap-5 text-varians-vr06">
            <div className="py-5 px-8 bg-[#65372F] rounded-3xl">
              <div>
                <p className="font-bold mb-1">Diverse Interview Questions</p>
                <p className="text-[13px] w-[280px] md:text-sm md:w-[500px]">Provide various types of commonly asked job interview questions, including technical, behavil, and general knowledge questions.</p>
              </div>
            </div>
            <div className="py-5 px-8 bg-[#65372F] rounded-3xl">
              <div>
                <p className="font-bold mb-1">Personalized Feedback</p>
                <p className="text-[13px] md:text-sm w-[265px] md:w-[500px]">Offer immediate and personalized feedback to users based on their performance in answering interview questions.</p>
              </div>
            </div>
            <div className="py-5 px-8 bg-[#65372F] rounded-3xl">
              <div>
                <p className="font-bold mb-1">User Experience Customization</p>
                <p className="text-[13px] w-[280px] md:text-sm md:w-[500px]">Give users the option to customize their experience, including selecting the types of questions they want to practice.</p>
              </div>
            </div>
            <div className="py-5 px-8 bg-[#65372F] rounded-3xl">
              <div>
                <p className="font-bold mb-1">Repetitive Practice</p>
                <p className="text-[13px] w-[280px] md:text-sm md:w-[500px]">Allow users to practice repeatedly with various interview scenarios, enabling them to improve their skills over time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tutorials */}
      <div className="py-8 md:py-10">
        <div>
          <p className="text-center text-varians-vr06 text-4xl font-bold hidden md:block">Tutorials</p>
          <div className="py-5 flex gap-5 justify-center flex-col md:py-20 md:flex-row">
            <div className="flex flex-col items-center gap-2">
              {/* Submit Description */}
              <Image src="/jobdesc_icon.png" width={100} height={50} alt="jobdesc icon" className="w-auto" priority />
              <p className="font-semibold text-varians-vr06">Submit Job Description</p>
              <p className="text-xs px-5 text-[#B3B3B3] text-center md:w-[250px] lg:w-[300px] ">Submit a job role description and receive customized interview queries designed to match the position&apos;s requirements.</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              {/* Record Description */}
              <Image src="/record_icon.png" width={100} height={50} alt="record icon" className="w-auto" priority />
              <p className="font-semibold text-varians-vr06">Record</p>
              <p className="text-xs px-5 text-[#B3B3B3] text-center  md:w-[250px] lg:w-[300px] ">Record your responses using audio to simulate authentic interview scenario</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              {/* Get the Feedback Description */}
              <Image src="/feedback_icon.png" width={100} height={50} alt="feedback icon" className="w-auto" priority />
              <p className="font-semibold text-varians-vr06">Get the Feedback</p>
              <p className="text-xs px-5 text-[#B3B3B3] text-center md:w-[250px] lg:w-[300px] ">Obtain immediate AI-generated feedback along with an enhanced sample response to refine your interview technique.</p>
            </div>
          </div>
          <div className="flex justify-center text-varians-vr06">
            <Link href="/auth/signup">
              <button className="py-4 px-6 rounded-full bg-gradient-to-b from-[#F27C45] to-[#FF5049] text-xs font-bold hover:scale-105 border border-black hidden md:block">Start Interview Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
