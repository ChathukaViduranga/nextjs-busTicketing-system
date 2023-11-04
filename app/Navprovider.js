"use client";
import Navbar from "./components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function Navprovider() {
  return (
    <div>
      <SessionProvider>
        <Navbar />
      </SessionProvider>
    </div>
  );
}
