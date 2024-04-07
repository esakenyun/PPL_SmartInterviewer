import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";

export default function NavbarAuth({ text, link }) {
  return (
    <div className="py-10 px-7 flex justify-end gap-6 items-center text-varians-vr06 md:px-14">
      <Link href={link} className="flex gap-6 items-center cursor-pointer">
        <CiGlobe className="text-xl" />
        <p className="font-bold">{text}</p>
      </Link>
      <Link href="/" className="text-sm font-bold py-3 px-5 rounded-md bg-[#FA5F47] flex items-center gap-1 hover:scale-105">
        Home
        <span>
          <MdArrowOutward className="font-bold" />
        </span>
      </Link>
    </div>
  );
}
