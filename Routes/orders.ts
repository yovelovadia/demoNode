import express, { Router } from "express";
import { createOrder } from "../Controllers/orders";

const routes: Router = express.Router();
routes.get("/create", createOrder);

export default routes;
