import { RouteFunction } from "../types";

export const createUser: RouteFunction = (req, res, next): void => {
  try {
    res.status(200).json({ message: "hello" });
  } catch (err) {
    next(err);
  }
};
