import React, { useEffect, useState } from "react";
import axios from "axios";
// let id:any = localStorage.getItem("id") 
let token = localStorage.getItem("token")

export default function DietPlan() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const[userplan, setuserplan] = useState<string>("")
  let dietplan = localStorage.getItem("dietplan");
  // console.log(dietplan);
  let url ="https://impossible-seal-coat.cyclic.app" 
  useEffect(() => {
    setLoading(true);
     axios.get(`https://impossible-seal-coat.cyclic.app/user`, {
      headers:{
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
     }
     })
     .then((res) =>{
      // console.log(res.data.data)
        res.data.data.map((el:any) => {
             console.log(el);
             setuserplan(el.diet[0]+"diet")
             return 
        })
     })
     .catch((err) => console.log(err))
    axios
      .get(`${url}/${dietplan}`)
      .then((res) => {
        console.log(res.data, "diet data");
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // alert("please select plan first")
        setLoading(false);
      });
  }, []);

  console.log(userplan, "userplan")
  


  if (loading) {
    return (
      <>
        <img src="https://thumbs.dreamstime.com/b/athletic-man-training-biceps-gym-to-use-as-banner-athletic-muscular-man-training-biceps-dumbbells-gym-to-use-as-118413845.jpg" />
        <button
          disabled
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 mr-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading...
        </button>
      </>
    );
  }
  return (
    <div>
      <img src="https://thumbs.dreamstime.com/b/athletic-man-training-biceps-gym-to-use-as-banner-athletic-muscular-man-training-biceps-dumbbells-gym-to-use-as-118413845.jpg" />

      <div>
        <h1 className="text-6xl m-5">
          Diet For{" "}
          {dietplan  == "beginnersdiet"
            ? "Beginners"
            : dietplan  == "intermediatediet"
            ? "Intermediate"
            : "Expert"}
        </h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-4">
                        ProtienGain
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Carbs
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Calories
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Meal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0
                      ? data.map((ele: any, i) => (
                          <tr
                            key={i}
                            className="border-b dark:border-neutral-500"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {ele.title}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {ele.ProtienGain}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {ele.carbs}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {ele.calories}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {ele.meal[0]},{ele.meal[1]},{ele.meal[2]}
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
