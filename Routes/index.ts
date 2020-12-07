import express, { Router } from "express";
import user from "./users";
import { errorHandler } from "../Controllers/error";

const routes: Router = express.Router();
routes.use("/user", user);
routes.use(errorHandler);

export default routes;
