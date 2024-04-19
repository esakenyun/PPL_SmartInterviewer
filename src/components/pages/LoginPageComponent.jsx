"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa6";
export default function LoginPageComponent({ props }) {
  const [showPassword, setShowPassword] = useState(false);

  const email = props.email;
  const password = props.password;

  const handleEmailChange = props.handleEmailChange;
  const handlePasswordChange = props.handlePasswordChange;
  const handleSubmit = props.handleSubmit;

  const isLoading = props.isLoading;

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="flex justify-center md:py-32 lg:py-0">
      <div className="flex flex-row gap-24 items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center bg-varians-vr06 py-10 px-[12%] md:px-16 rounded-3xl">
            <p className="font-bold text-4xl">Sign in</p>
            <p className="w-[270px] py-3 text-md">Hey, Enter your details to sign up to your account</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input className="p-2 mt-3 rounded-lg border border-black text-xs" type="email" name="email" required autoComplete="email" value={email} onChange={handleEmailChange} placeholder="Email" />
              <div className="relative mt-3">
                <input
                  className="p-2 pr-10 rounded-lg border w-full border-black text-xs"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  autoComplete="password"
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {showPassword ? (
                    <div onClick={togglePasswordVisibility} className="text-xs cursor-pointer">
                      Hide
                    </div>
                  ) : (
                    <div onClick={togglePasswordVisibility} className="text-xs cursor-pointer">
                      Show
                    </div>
                  )}
                </div>
              </div>
              <div className="py-3 flex justify-start">
                <p className="text-[10px]">
                  Don&apos;t have an account yet?
                  <Link href="/auth/signup" className="font-bold">
                    Register Now!
                  </Link>
                </p>
              </div>
              <div className="pt-4">
                <button type="submit" disabled={isLoading} className="py-2 bg-[#FA5F47] text-varians-vr06 font-bold w-full rounded-md hover:scale-105">
                  {isLoading ? "Sign in..." : "Sign in"}
                </button>
              </div>
            </form>
            <p className="text-[10px] font-semibold py-6">- Or Sign in with -</p>
            <div className="flex gap-2">
              <div className="flex items-center gap-1 border border-black py-2 px-3 rounded-full cursor-pointer hover:bg-black hover:text-varians-vr06">
                <FaGoogle className="text-md" />
                <p className="text-[9px] md:text-[10px] font-bold">Google</p>
              </div>
              <div className="flex items-center gap-1 border border-black py-2 px-3 rounded-full cursor-pointer hover:bg-black hover:text-varians-vr06">
                <FaApple className="text-md" />
                <p className="text-[9px] md:text-[10px] font-bold">Apple ID</p>
              </div>
              <div className="flex items-center gap-1 border border-black py-2 px-3 rounded-full cursor-pointer hover:bg-black hover:text-varians-vr06">
                <FaFacebook className="text-md" />
                <p className="text-[9px] md:text-[10px] font-bold">Facebook</p>
              </div>
            </div>
          </div>
        </div>
        <Image src="/header_pict2.png" width={400} height={400} alt="Background" className="w-auto hidden lg:block" priority />
      </div>
    </div>
  );
}
