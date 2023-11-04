import { NextResponse } from "next/server";
import { connectMongoDB } from "../../lib/mongodb";
import User from "../../model/user";
import bcrypt from "bcryptjs";
export async function POST(req) {
  try {
    const { fname, lname, email, pass } = await req.json();
    const hashedPassword = await bcrypt.hash(pass, 10);

    await connectMongoDB();
    await User.create({ fname, lname, email, password: hashedPassword });
    return NextResponse.json({ message: "user Registered" }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error); // Log the error to see details
    return NextResponse.json(
      { message: "error occurred while registering" },
      { status: 500 }
    );
  }
}
