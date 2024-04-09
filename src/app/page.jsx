import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import HomePageComponent from "@/components/pages/HomePageComponent";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-[#2a292f]">
      {/* Background */}
      <Image src="/bg_nav.png" width={10000} height={1000} alt="Background Navbar" className="absolute w-auto z-0" priority />
      {/* Navbar */}
      <Navbar />
      {/* Home Page Component */}
      <HomePageComponent />
      {/* Footer */}
      <Footer />
    </div>
  );
}
