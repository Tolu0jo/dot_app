import mongoose from "mongoose";
import { MONGODB_URI} from "./config";



export const dbConnect = () => {
  mongoose.connect( MONGODB_URI).then(() => {
    console.log("db connection established...");
  });
};
