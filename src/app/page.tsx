"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Skill from "@/components/Skill";
import AboutMe from "@/components/AboutMe";
import SideProject from "@/components/SideProject";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center overflow-hidden">
        <Header />
        <main
          className=" w-full h-full  overflow-y-scroll bg-gradient-to-br from-gray-800 via-slate-300 to-stone-200">
          <AboutMe></AboutMe>
        </main>

        <Footer />
      </div>
    </>
  );
}
