import React from "react";
import Homeui2 from "./HomeUi2";

export default function Homeui() {
  return (
    <div>
      <div className="w-5/3  mx-20">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full ">
          <div className="p-20">
            <h1 className="text-5xl font-bold">YOGAFLEX TO SHAPE YOUR BODY</h1>
            <p className="mt-5">
              Want to eat more mindfully? Track meals, learn about your habits,
              <pre />
              and reach your goals with MyFitnessPal.
            </p>
            <div className="w-64">
              <button
                type="submit"
                className="mt-8 ml-9  flex w-full justify-center rounded-md bg-blue-600  px-9 py-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                START FOR FREE
              </button>
            </div>
          </div>
          <div className="mt-8">
            <img
              src="https://preview.colorlib.com/theme/yogaflex/img/banner-img.png"
              alt="image"
            />
          </div>
        </div>
      </div>
      <Homeui2 />
    </div>
  );
}
// HomeUi.tsx is imported in Navbar.tsx
