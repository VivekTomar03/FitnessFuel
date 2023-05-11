import React from "react";
import SomePro from "./SomePro";

export default function Homeui2() {
  return (
    <div>
      <div className="w-5/3 mx-20">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full ">
          <div className="mt-8">
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fsecondary-hero-slice%402x.png&w=512&q=75"
              alt="image"
            />
          </div>
          <div className="p-20">
            <h1 className="text-6xl font-bold">
              Log from over 14 million foods.
            </h1>
            <p className="mt-5">
              See a breakdown of calories and nutrients, compare
              {/* <pre /> */}
              serving sizes, and discover how the food you eat
              {/* <pre /> */}
              supports your goals.
            </p>
          </div>
        </div>
      </div>
      <SomePro />
    </div>
  );
}
// HomeUi2.tsx is imported in HomeUi.tsx
