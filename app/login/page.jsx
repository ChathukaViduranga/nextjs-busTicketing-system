import React from "react";
import LoginComponent from "../components/LoginComponent";

export default function LoginPage() {
  return (
    <div className="flex my-4 mx-20">
      <div className="w-4/12 mx-20">
        <LoginComponent />
      </div>
      <div className="w-4/12 mx-20 rounded-xl overflow-hidden">
        <img src="/image.png" />
      </div>
    </div>
  );
}
