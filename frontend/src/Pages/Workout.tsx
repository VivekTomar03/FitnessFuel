import React, { useState } from "react";
import SimWork from "./Middle/SimWork";
import Bmichart from "./Bmichart";
import MacroChart from "./MacroChart";
import axios from "axios";
export interface macroobj{
  "title":string;
  "protine":number,
  
  "carbs" :number ,
  "fat":number
}
const initmacro = {
  title:"",
  protine:0,
  fat:0,
  carbs:0
}
export default function Workout() {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [ybmi, setYBmi] = useState<number>(0);
  //---
  const [food, setFood] = useState<string>("");
  const [qty, setQty] = useState<number>(1);
  const [marcores , setmacrores] = useState<macroobj>(initmacro)
  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let h = +height * +height;
    h = h * 0.304 * 0.304;
    let bmi = +weight / h;
    setYBmi(bmi);
    // console.log(ybmi.toFixed(2));
  };

  const handlemacros = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(food, qty);
    let obj:any = {
      food, qty
    }
    console.log(obj, "macrodata")
    axios.get(`http://localhost:8080/macro?food=${food}&qty=${qty}`)
    .then((res) => setmacrores(res.data))
    .catch((err) => console.log(err))
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          {" "}
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-20 w-auto"
                src="https://www.shutterstock.com/image-vector/indikator-bmi-on-white-background-260nw-2100889945.jpg"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                BMI CALCULATOR
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" onSubmit={handlesubmit}>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Weight in KG
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="weight"
                      type="number"
                      value={weight}
                      placeholder="Enter Weight"
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e: any) => setWeight(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <div className=" items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900 "
                    >
                      Height in Feet
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      placeholder="Enter Height"
                      id="password"
                      name="height"
                      type="number"
                      value={height}
                      required
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e: any) => setHeight(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Calculate BMI
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="">
          <Bmichart ybmi={ybmi}  />
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <div className="">
            {" "}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-20 w-auto"
                  src="https://lowcarbyum.com/wp-content/uploads/2022/11/KETO-PERCENTAGES.png"
                  alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                MACRONUTRIENTS CALCULATOR
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" onSubmit={handlemacros}>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Choose your Food
                    </label>
                    <div className="mt-2">
                      <select
                        className="border-2 border-black-500 py-2 px-5"
                        onChange={(e: any) => setFood(e.target.value)}
                        value={food}
                      >
                        <option>Select Foods</option>
                        <option value={"apple"}>Apple</option>
                        <option value={"banana"}>Banana</option>
                        <option value={"egg"}>Egg</option>
                        <option value={"darkchocolate"}>Dark Chocolate</option>
                        <option value={"tofu"}>Tofu</option>
                        <option value={"chapati"}>Chapati</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className=" items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900 "
                      >
                        No of Quantity
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        placeholder="Enter Height"
                        id="password"
                        name="height"
                        type="number"
                        value={qty}
                        required
                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e: any) => setQty(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Calculate BMI
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="">
            {/* <Bmichart ybmi={ybmi} height={height} weight={weight} /> */}
          </div>
        </div>
        <div>
          <MacroChart  marcores={marcores}/>
        </div>
      </div>
      <SimWork />
    </div>
  );
}
