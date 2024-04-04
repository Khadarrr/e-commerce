"use client";

import Header from "../Components/header";
import { SparklesCore } from "../Components/UI/sparkles";
import CartPage from "../Components/cartPage";



export default function cartPage() {
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
          <div className="black-background">
          <CartPage/>
          </div>
        </div>
    </>
    )
}