import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "./../../../../lib/mongodb";
import User from "../../../../model/user";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        console.log(email);
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          if (!user) {
            console.log("user not found");
            return null;
          }

          const passMatch = await bcrypt.compare(password, user.password);
          if (!passMatch) {
            return null;
          } else {
            console.log("matched");
          }

          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
