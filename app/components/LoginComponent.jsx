"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function changeEmail(e) {
    setError("");
    setEmail(e.target.value);
  }
  function changePass(e) {
    setError("");
    setPass(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password: pass,
        redirect: false,
      });

      if (res.error) {
        console.log("invalid credentials");
        setEmail("");
        setPass("");
        setError("invalid credentials");
        return;
      }
      router.replace("/");
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full m-20 p-4 font-Roboto">
      <h1 className="text-5xl font-black ">Login</h1>
      <p className="mt-4">Login to access your E-ticket account</p>
      <form action="#" onSubmit={handleSubmit}>
        <div className="mt-10 mr-12 ">
          <div>
            <label className="mx-2 " htmlFor="email">
              E-mail
            </label>
            <br />
            <input
              type="e-mail"
              className="border-[1px] mt-2 w-full border-slate-900 p-2 rounded"
              name="email"
              value={email}
              onChange={changeEmail}
            />
          </div>
          <div className="mt-10">
            <label className="my-4 mx-2" htmlFor="pass">
              Password
            </label>
            <br />
            <input
              type="password"
              className="border-[1px] mt-2 w-full border-slate-900 p-2 rounded"
              name="pass"
              value={pass}
              onChange={changePass}
            />
          </div>
        </div>
        <button className="px-3 py-1 rounded-md mt-8 border-black border-[1px]">
          Submit
        </button>
      </form>
      <p className="mt-5">
        Donn't have an account?
        <Link className="underline" href="/register">
          Register
        </Link>
      </p>
      {error && (
        <p className="pl-4 text-white bg-red-400 font-bold">Error : {error}</p>
      )}
    </div>
  );
}
