import React from "react";

const Page = () => {
  return(
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-white">Whoa, Slow down there speedy</h1>
      <p className="mt-3 max-w-xl text-center text-light-100"> Looks like you've been making too many requests, we have put a pause on your activity. Please try again later.</p>
    </main>
  )
}

export default Page;