import { Router } from "express";
import { retrievePassword, signIn, signUp } from "../controller/userContoller";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/retrieve_password", retrievePassword);

export default router;
