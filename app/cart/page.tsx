"use client";

import Header from "../Components/header";
import CartPage from "../Components/cartPage";



export default function cartPage() {
    return (
        <>
        <Header />
        <div className="h-screen bg-black">
          
          <div className="black-background">
          <CartPage/>
          </div>
        </div>
    </>
    )
}