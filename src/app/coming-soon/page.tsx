"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center overflow-hidden">
        <Header />
        <main className="w-full h-full flex items-center justify-center overflow-y-scroll bg-gradient-to-br from-gray-800 via-slate-300 to-stone-200">
          <p className="text-white text-center text-4xl">Coming soon...</p>
        </main>
        <Footer />
      </div>
    </>
  );  
}
