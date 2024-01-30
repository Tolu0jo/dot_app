import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";
import { PORT } from "./config/config";
import { dbConnect } from "./config/db";
import userRoutes from "./routes/userRoutes";
import assessmentRoutes from "./routes/assessmentRoutes";

const app = express();

app.use(express.json());

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true}));

app.use(helmet());

app.use(cors());

app.use("/api", userRoutes);
app.use("/api", assessmentRoutes);

dbConnect();

app.listen(PORT, () => {
  console.log(`App listening on ${PORT} ...`);
});


