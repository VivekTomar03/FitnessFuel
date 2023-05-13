import React, { useState, useEffect } from "react";
import logo from "../image/logo 2.png";
let data:any = localStorage.getItem("macros")
let valadd:any =  localStorage.getItem("value")
const DashBoard = () => {
  
  
  const [value, setValue] = useState<string>("Choose Option");
  const [macro, setMacro] = useState<number>(+data || 0);
  

  useEffect(() => {
    // setValue(valadd|| "")
    if (value === "beginners") {
      setMacro(1800);
      localStorage.setItem("macros", "1800")
      localStorage.setItem("exeplan", value);
      localStorage.setItem("dietplan", "beginnersdiet");
      localStorage.setItem("value", "Begginners")
    }
    if (value === "intermediate") {
      setMacro(2500);
      localStorage.setItem("exeplan", value);
      localStorage.setItem("macros", "2500")
      localStorage.setItem("dietplan", "intermediatediet");
      localStorage.setItem("value", "Intermediate")

    }
    if (value === "expert") {
      setMacro(3000);
      localStorage.setItem("exeplan", value);
      localStorage.setItem("macros", "3000")
      localStorage.setItem("dietplan", "expertdiet");
      localStorage.setItem("value", "Expert")
      
    }
  }, [value]);

  //   console.log(value);
  const stats = [
    { id: 1, name: "Transactions every 24 hours", value: "44 million" },
    { id: 2, name: "Assets under holding", value: "$119 trillion" },
    { id: 3, name: "New users annually", value: "46,000" },
  ];
  return (
    <div>
      <img
        src="https://github.com/VivekTomar03/FitnessFuel/assets/106812942/33161022-63c8-4e7f-98d2-b0ce6dd1716a"
        alt=""
        width="100%"
      />
      <div
        className="flex justify-center gap-20px border-4 border-teal-600 border-solid w-fit m-auto mb-8 
          bg-[url('https://thumbs.dreamstime.com/b/athletic-man-training-biceps-gym-to-use-as-banner-athletic-muscular-man-training-biceps-dumbbells-gym-to-use-as-118413845.jpg')]"
      >
        <div
          style={{
            border: "2px solid red",
            padding: "20px",
            margin: "10px",
            color: "white",
          }}
        >
          <p style={{ fontSize: "30px" }}>Macros Count</p>
          <h3 style={{ fontSize: "50px" }}>{macro}</h3>
        </div>
        <div>
          <select
            name=""
            id=""
            style={{ marginTop: "20px" }}
            onChange={(e: any) => setValue(  e.target.value)}
            // value={value}
            className="border-2 border-black-500 py-2 px-8"
          >
            <option value="">{valadd || value} </option>
            <option value="beginners">Begginers</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
        <div style={{ margin: "20px" }}>
          <button
            style={{
              marginRight: "20px",
              border: "1px solid gray",
              padding: "5px",
              borderRadius: "10px",
              color: "white",
              backgroundColor: "#424242",
            }}
          >
            <a href="/dietplan">See Your Diet Plan</a>
          </button>
          <button
            style={{
              marginRight: "20px",
              border: "1px solid gray",
              padding: "5px",
              borderRadius: "10px",
              color: "white",
              backgroundColor: "#424242",
            }}
          >
            See Your Exercise Schedule
          </button>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <img src="https://thumbs.dreamstime.com/b/athletic-man-training-biceps-gym-to-use-as-banner-athletic-muscular-man-training-biceps-dumbbells-gym-to-use-as-118413845.jpg" />
    </div>
  );
};
export default DashBoard;
