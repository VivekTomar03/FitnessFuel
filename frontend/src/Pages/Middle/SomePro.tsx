import React from "react";

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
    </div>
  );
}
