"use client";
import { useState } from "react";
import NavbarAuth from "@/components/navigation/auth/navbar_auth";
import SignupPageComponent from "@/components/pages/SignupPageComponent";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <div>
      <NavbarAuth text="Log in" link="/auth" />
      <SignupPageComponent />
    </div>
  );
}
