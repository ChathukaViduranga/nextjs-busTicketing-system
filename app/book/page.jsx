"use client";
import React from "react";
import QRcode from "./../components/QRcode";
import { SessionProvider } from "next-auth/react";

export default function page() {
  return (
    <div className="w-full flex flex-col place-content-center">
      <div className=" w-full text-center my-7 text-red-400 tracking-wide text-4xl">
        My Ticket
      </div>

      <div className="w-1/4 border-[1px] mx-[540px] my-16 rounded-xl py-10 px-4 ">
        <div className=" w-full text-center my-7 text-green-400 tracking-wide text-4xl">
          Scan here
        </div>
        <div className="mx-8">
          <SessionProvider>
            <QRcode />
          </SessionProvider>
        </div>
      </div>
    </div>
  );
}
