import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="py-10 px-24 text-varians-vr06 hidden lg:block">
        <div className="flex justify-between items-center">
          <Image src="/logo.png" width={300} height={300} alt="logo" className="w-auto" priority />
          <div className="flex items-center gap-7">
            <p className="cursor-pointer text-lg">Home</p>
            <p className="cursor-pointer text-lg">Features</p>
            <p className="cursor-pointer text-lg">Tutorials</p>
            {/* <p className="cursor-pointer text-lg">Reviews</p> */}
            <div className="flex gap-5">
              <Link href="/auth/signup" className="py-4 px-7 rounded-xl border-2 border-[#F37845] text-xs font-bold hover:bg-[#F37845]">
                Get Started
              </Link>
              <Link href="/auth" className="py-4 px-10 rounded-xl bg-gradient-to-b from-[#F27C45] to-[#FF5049] text-xs font-bold hover:scale-105">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 px-5 lg:hidden">
        <div className="flex justify-between items-center">
          <div>
            <Image src="/logo.png" width={150} height={150} alt="logo" priority />
          </div>
          <div>
            <div className="bg-secondary-sc04 py-2 px-2 rounded-full">
              <IoMdMenu className="text-varians-vr06 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
