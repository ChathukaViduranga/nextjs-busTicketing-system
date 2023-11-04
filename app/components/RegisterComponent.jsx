"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterComponent() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function changeEmail(e) {
    setEmail(e.target.value);
  }
  function changePass(e) {
    setPass(e.target.value);
  }
  function changeCpass(e) {
    setCpass(e.target.value);
  }
  function changeFname(e) {
    setFname(e.target.value);
  }
  function changeLname(e) {
    setLname(e.target.value);
  }

  //handle user handle submit
  async function handleSubmit(e) {
    setError("");
    e.preventDefault();
    if (!fname || !lname || !email || !pass || !cpass) {
      setError("all fields are required");
      return;
    } else if (!(pass === cpass)) {
      setError("password should be matched in both fields");
      return;
    }
    try {
      const res1 = await fetch("userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { user } = await res1.json();
      if (user) {
        setError("user Already Exists");
        return;
      }
      const res = await fetch("registerapi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Add this line
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          pass,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        setFname("");
        setLname("");
        setEmail("");
        setPass("");
        setCpass("");
        setError("");
        router.push("/login");
      } else {
        const responseData = await res.json();
        console.log("Server response:", responseData);
        console.log("User Registration failed");
      }
    } catch (error) {
      console.log("error during registration", error);
    }
  }

  return (
    <div className="w-full mx-20  p-4 font-Roboto">
      <h1 className="text-5xl font-black ">Sign Up</h1>
      <p className="mt-4">
        Let's get you all set up so you can access your personal account
      </p>
      <form action="#" onSubmit={handleSubmit}>
        <div className="mt-10 mr-12 ">
          <div className="flex  justify-between">
            <div className="mt-10 w-5/12 ">
              <label className="my-4 mx-2" htmlFor="fname">
                First Name
              </label>
              <br />
              <input
                type="text"
                className="border-[1px] mt-2 w-full border-slate-900 p-2 rounded"
                name="fname"
                value={fname}
                onChange={changeFname}
              />
            </div>
            <div className="mt-10 w-5/12">
              <label className="my-4 mx-2" htmlFor="lname">
                Last Name
              </label>
              <br />
              <input
                type="text"
                className="border-[1px] mt-2 w-full border-slate-900 p-2 rounded"
                name="lname"
                value={lname}
                onChange={changeLname}
              />
            </div>
          </div>
          <div className="mt-10 ">
            <label className="my-4 mx-2" htmlFor="email">
              E mail
            </label>
            <br />
            <input
              type="email"
              className="border-[1px] mt-2 w-full border-slate-900 p-2 rounded"
              name="email"
              value={email}
              onChange={changeEmail}
            />
          </div>
          <div className="flex  justify-between">
            <div className="mt-10 w-5/12 ">
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
            <div className="mt-10 w-5/12">
              <label className="my-4 mx-2" htmlFor="cPass">
                Confirm Password
              </label>
              <br />
              <input
                type="password"
                className="border-[1px] mt-2 w-full border-slate-900 p-2 rounded"
                name="cPass"
                value={cpass}
                onChange={changeCpass}
              />
            </div>
          </div>
        </div>
        <button className="px-3 py-1 rounded-md mt-8 border-black border-[1px]">
          Submit
        </button>
      </form>
      <p className="mt-5">
        Alredady have an account?
        <Link className="underline" href="/login">
          Signin
        </Link>
      </p>
      {error && (
        <p className="pl-4 text-white bg-red-400 font-bold">Error : {error}</p>
      )}
    </div>
  );
}
