"use client";
import NavbarAuth from "@/components/navigation/auth/navbar_auth";
import LoginPageComponent from "@/components/pages/LoginPageComponent";
import { handleLogin } from "@/helpers/authHelper";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (await handleLogin(email, password)) {
      router.push("/dashboard");
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-[#2a292f] h-screen">
      <NavbarAuth text="Sign Up" link="/auth/signup" />
      <LoginPageComponent
        props={{
          email: email,
          password: password,
          handleEmailChange: handleEmailChange,
          handlePasswordChange: handlePasswordChange,
          handleSubmit: handleSubmit,
          isLoading: isLoading,
        }}
      />
    </div>
  );
}
