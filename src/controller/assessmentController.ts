import { Request, Response } from "express";
import { assessmentModel } from "../model/assessmentModel";
import { generateAcctNo } from "../utils/util";

export const createAccount = async (req: Request | any, res: Response) => {
  try {
    const { _id } = req.user;
    const{name,description,quantity}=req.body

    const newAssessment = new assessmentModel({
      user_id: _id,
      name,
      description,
      quantity
    });

    const acct = await newAssessment.save();
    return res
      .status(201)
      .json({ message: "Assessment created successfully", acct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const getAssessments = async (req: Request | any, res: Response) => {
  try {
    const { _id } = req.user;

    const assessments = await assessmentModel.find({ user_id: _id });

    return res
      .status(200)
      .json({ message: "Assessment retrieved successfully", assessments });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const updateAssesment=async (req: Request | any, res: Response)=>{
  try {
    const { _id } = req.user;
    const{id}=req.params
    const{name,description,quantity}=req.body

    const assessment = await assessmentModel.findOneAndUpdate({
      _id:id,
      user_id:_id
    },{
      name,description,quantity
    })
  
    return res
    .status(200)
    .json({ message: "Assessment retrieved successfully", assessment });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
}

export const deleteAssesment=async (req: Request | any, res: Response)=>{
  try {
    const { _id } = req.user;
    const{id}=req.params
    const assessment = await assessmentModel.findOneAndDelete({
      _id:id,
      user_id:_id
    })
  
    return res
    .status(200)
    .json({ message: "Assessment deleted successfully", assessment });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
}