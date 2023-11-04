"use client";
import React from "react";
import Link from "next/link";

//for path checking
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Logout from "./Logout";

function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="w-full h-16 place-items-center flex justify-between px-8 py-2 bg-slate-50">
      <div className="">
        <Link href="/">
          <button
            className={`  bg-slate-300 hover:bg-slate-400 ease-in duration-300  px-2 py-1 w-32 mx-10 rounded-lg ${
              pathname === "/"
                ? "border-b-4 border-red-400"
                : "shadow-md shadow-red-200"
            } `}
          >
            News
          </button>
        </Link>
        <Link href="/route">
          <button
            className={`bg-slate-300 hover:bg-slate-400 ease-in duration-300  px-2 py-1 w-32 mx-10 rounded-lg ${
              pathname === "/route"
                ? "border-b-4 border-red-400"
                : "shadow-md shadow-red-200"
            } `}
          >
            Routes
          </button>
        </Link>
        <Link href="/schedule">
          <button
            className={`bg-slate-300 hover:bg-slate-400 ease-in duration-300  px-2 py-1 w-32 mx-10 rounded-lg ${
              pathname === "/schedule"
                ? "border-b-4 border-red-400"
                : "shadow-md  shadow-red-200"
            } `}
          >
            Schedule
          </button>
        </Link>
        <Link href="/book">
          <button
            className={`bg-slate-300 hover:bg-slate-400 ease-in duration-300  px-2 py-1 w-32 mx-10 rounded-lg ${
              pathname === "/book"
                ? "border-b-4 border-red-400"
                : "shadow-md  shadow-red-200"
            } `}
          >
            Tickets
          </button>
        </Link>
      </div>

      <div className="flex">
        <div className="">
          <p>{session?.user?.email}</p>

          {session?.user?.email && <Logout />}
        </div>
        {session?.user?.email && (
          <img
            className="w-12 mx-4 rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/019/896/008/non_2x/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            alt="profile"
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
