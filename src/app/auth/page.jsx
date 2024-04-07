"use client";
import { useState } from "react";
import NavbarAuth from "@/components/navigation/auth/navbar_auth";
import LoginPageComponent from "@/components/pages/LoginPageComponent";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <NavbarAuth text="Sign Up" link="/auth/signup" />
      <LoginPageComponent />
    </div>
  );
}
