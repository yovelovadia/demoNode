import express, { Router } from "express";
import user from "./users";
import orders from "./orders";
import { errorHandler } from "../Controllers/error";

const routes: Router = express.Router();
routes.use("/users", user);
routes.use("/orders", orders);
routes.use(errorHandler);

export default routes;
