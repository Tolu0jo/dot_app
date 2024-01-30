import mongoose from "mongoose";
import { IAccount } from "../utils/interfaces";

const assessmentSchema= new mongoose.Schema(
    {
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        name:{ type: String, required:true },
        description: {type: String, required:true},
        quantity: {type: Number, required:true},
    },
  {
    timestamps: true,
  }
)


export const assessmentModel=mongoose.model<IAccount>("Assessment",assessmentSchema)