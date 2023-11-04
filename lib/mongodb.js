import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://csse:iVe9wMnP13QV2PIB@cluster0.lyjgac0.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connected to db");
  } catch (error) {
    console.log("error in connecting to db");
  }
};
