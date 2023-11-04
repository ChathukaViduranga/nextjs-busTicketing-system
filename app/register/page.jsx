import React from "react";
import RegisterComponent from "../components/RegisterComponent";

export default function page() {
  return (
    <div className="flex mt-20 mx-20">
      <div className="w-6/12 mx-15">
        <RegisterComponent />
      </div>
      <div className="w-4/12 mx-20 rounded-xl overflow-hidden">
        <img src="/image.png" />
      </div>
    </div>
  );
}
