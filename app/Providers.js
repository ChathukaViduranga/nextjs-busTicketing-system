"use client";
import { SessionProvider } from "next-auth/react";

//provides the session
export const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
