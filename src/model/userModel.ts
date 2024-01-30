import mongoose from "mongoose";
import { IUser } from "../utils/interfaces";

const userSchema = new mongoose.Schema(
  { 
    username: {
    type: String,
    required: true,
    unique: true,
  },
    first_name: {
      type: String,
      required: true,
      unique: true,
    },
    last_name: {
      type: String,
      required: true,
      unique: true,
    },
    password_hash: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password_hash;
      },
    },
    timestamps: true,
  }
);

export const userModel = mongoose.model<IUser>("User", userSchema);
