"use client";
import React from "react";
import { signOut } from "next-auth/react";

function Logout() {
  return (
    <button
      className="bg-red-300  hover:bg-red-400 px-2 py-1 rounded-md"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}

export default Logout;
