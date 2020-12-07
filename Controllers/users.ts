import { Request, Response, NextFunction } from "express";

export const createUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: "hello" });
  } catch (err) {
    next(err);
  }
};
