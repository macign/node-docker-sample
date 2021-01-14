import * as express from "express";
import { suggest } from "../controller";

const router = express.Router();

router.get("/suggest", suggest);

export default router;
