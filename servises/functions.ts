import {validationResult} from "express-validator";
// @ts-ignore
import express from "express";

export function errorValidation(req: express.Request, res: express.Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return false;
  } else {
    return true;
  }
}