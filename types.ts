import { Request, Response, NextFunction } from "express";

export type RouteFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
