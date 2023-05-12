import React, { useState, useEffect } from "react";
import logo from "../image/logo 2.png";
const DashBoard = () => {
  const [value, setValue] = useState<string>("");
  const [macro, setMacro] = useState<number>(0);

  useEffect(() => {
    if (value === "begginers") {
      setMacro(1800);
    }
    if (value == "intermediate") {
      setMacro(2500);
    }
    if (value == "expert") {
      setMacro(3000);
    }
  }, [value]);

  //   console.log(value);
  return (
    <div>
      <img
        src="https://github.com/VivekTomar03/FitnessFuel/assets/106812942/33161022-63c8-4e7f-98d2-b0ce6dd1716a"
        alt=""
        width="100%"
      />
      <div className="flex justify-center gap-20px border-4 border-teal-600 border-solid w-fit m-auto mb-8">
        <div
          style={{
            border: "2px solid red",
            padding: "20px",
            margin: "10px",
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
            onChange={(e: any) => setValue(e.target.value)}
            // value={value}
            className="border-2 border-black-500 py-2 px-8"
          >
            <option value="">Choose Option</option>
            <option value="begginers">Begginers</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">expert</option>
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
            {" "}
            See Your Diet Plan
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
    </div>
  );
};
export default DashBoard;
