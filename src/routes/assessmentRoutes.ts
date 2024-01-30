import { Router } from "express";
import {
  createAccount,
  deleteAssesment,
  getAssessments,
  updateAssesment,

} from "../controller/assessmentController";
import { auth } from "../middleware/auth";

const router = Router();

router.post("/assessment", auth, createAccount);

router.get("/assessment", auth, getAssessments);

router.patch("/assessment/:id", auth, updateAssesment);

router.delete("/assessment/:id", auth, deleteAssesment);


export default router;
