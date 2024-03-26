"use client";

import Image from "next/image";
import Header from "./Components/header";
import { SparklesCore } from "./Components/UI/sparkles";
import Products from "../app/Components/products"; // 
import ecomimg from "../public/e-com.jpg";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-screen bg-black">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
          particleColor="#FFFFFF"
        />
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image
                className="max-w-sm rounded-lg shadow-2xl"
                src={ecomimg}
                alt="hero image"
              />
              <div>
                <h1 className="text-5xl font-bold text-white">Supply & Co</h1>
                <p className="py-6 text-white">
                  Elevate Your Lifestyle with Premium Goods and Unmatched
                  Convenience.
                </p>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl">
                    Get Started
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="black-background">
      <Products /> 
      </div>
    </>
  );
}
