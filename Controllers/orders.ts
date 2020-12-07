import { RouteFunction } from "../types";

export const createOrder: RouteFunction = (req, res, next) => {
  try {
    res.status(200).json({ message: "order Creation" });
  } catch (err) {
    next(err);
  }
};
