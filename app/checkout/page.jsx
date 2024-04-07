"use client";

import Header from "../Components/header";
import CheckOutPage from "../Components/checkout";



export default function cartPage() {
    return (
        <>
        <Header />
        <div className="h-screen bg-black">
          
          <div className="black-background">
          <CheckOutPage/>
          </div>
        </div>
    </>
    )
}