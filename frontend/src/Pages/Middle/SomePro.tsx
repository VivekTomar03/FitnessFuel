import React from "react";
import SimWork from "./SimWork";

export default function SomePro() {
  let arr = [
    {
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1067-fruit-salad-side-92f2.jpg",
      name: "Blackened Salad with Coconut-Mango",
    },
    {
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1161-energy-boosting-bean-green-and-grain-bowl-9444.jpg",
      name: "Mighty Tex-Mex Migas",
    },
    {
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1072-morning-glory-breakfast-bowl-with-greek-yogurt-8ce5.jpg",
      name: "Mediterranean-Inspired Breakfast ",
    },
    {
      image:
        "https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-962-veggie-packed-breakfast-salad-b701.jpg",
      name: "Veggie-Packed Breakfast Salad",
    },
  ];
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Diet Food
          </h2>
          <div className="mt-6 grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {arr.map((ele) => (
              <div className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={ele.image}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="mt-1 text-sm text-gray-500">{ele.name}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">⭐</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white  sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-semibold leading-8 text-gray-900">
            Workout
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-100 w-full object-contain lg:col-span-1"
              src="https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1345-pyramid-sets-for-defined-arms-99aa.jpg"
              alt="Transistor"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-100 w-full object-contain lg:col-span-1"
              src="https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1242-kettlebell-strength-emoms-a89f.jpg"
              alt="Reform"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-100 w-full object-contain lg:col-span-1"
              src="https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1338-slow-tempo-lower-body-strength-bdc3.jpg"
              alt="Tuple"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-100 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1265-yoga-for-lower-back-pain-8226.jpg"
              alt="SavvyCal"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 col-start-2 max-h-100 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1288-bored-easily-hiit-cardio-and-abs-9385.jpg"
              alt="Statamic"
              width="158"
              height="48"
            />
          </div>
        </div>
      </div>

      <div className="w-3/6 flex ">
        <img src="https://www.hussle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog.5ca2768d.jpg&w=1920&q=75" />
        <img src="https://www.hussle.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpartnerships.81feecb8.jpg&w=1920&q=75" />
      </div>
      <SimWork />

      <div className="w-5/6 mx-auto ">
        <p className="mb-8 mt-8">
          MyFitnessPal is one of the best weight loss apps and fitness apps,
          helping nearly 1 million members reach their nutrition and fitness
          goals every year. Members use it as a calories tracker and calorie
          counter to log their foods, and take advantage of the app’s food
          database that contains over 14 million foods. It’s not just a free
          calorie counter app — it’s also the best calorie counter app for
          people who are looking to take back control of their health and
          fitness.
        </p>
      </div>
    </div>
  );
}
