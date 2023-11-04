import React from "react";
import Schedule from "../components/Schedule";

export default function page() {
  return (
    <div>
      <div className=" w-full text-center my-7 text-red-400 tracking-wide text-4xl">
        Bus Schedule
      </div>
      <Schedule />
    </div>
  );
}
