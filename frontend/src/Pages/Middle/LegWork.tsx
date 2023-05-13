import React from "react";

export default function LegWork() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-5/6 mx-auto gap-4 mt-5">
        <div className="hover:bg-grey">
          <img src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/02/frogjump-1455820924.gif" />
        </div>
        <div className="hover:bg-grey">
          <img src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/12/bandoneleghiphinge-1480689468.gif?resize=640:*" />
        </div>
        <div className="hover:bg-grey">
          <img src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/12/bandpullapart-1480689234.gif?resize=640:*" />
        </div>
        <div className="hover:bg-grey">
          <img src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/12/bandsplitthruster-1480692778.gif?resize=640:*" />
        </div>
      </div>
    </div>
  );
}
