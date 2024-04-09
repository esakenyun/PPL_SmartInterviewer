"use client";
import { useRouter } from "next/navigation";
import { handleLogout } from "@/helpers/authHelper";
import SettingPageComponent from "@/components/pages/SettingPageComponent";

export default function Setting() {
  const router = useRouter();

  const handleSubmit = async () => {
    if (await handleLogout()) {
      router.push("/");
    }
  };
  return (
    <>
      <SettingPageComponent props={{ handleSubmit: handleSubmit }} />
    </>
  );
}
