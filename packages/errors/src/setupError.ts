import type { Response, NextFunction } from "express";
import { HttpStatusType } from "./httpStatusCodes";
import { DatebaseStatusType } from "./databaseCodes";
import { SystemStatusType } from "./systemCodes";
import { CustomStatusType } from "./customCodes";

import { default as DatabaseError } from "./databaseError";
import { default as SystemError } from "./systemError";
import { default as CustomError } from "./customError";
import { default as ApiError } from "./apiError";

export const setupError = (
  res: Response<any, Record<string, any>>,
  next: NextFunction,
  code: number,
  i18nmsg?: object | undefined,
  details?: object | undefined
): void => {
  let err: any;
  if (code >= 100 && code < 1000) {
    err = new ApiError(code as HttpStatusType, i18nmsg, details);
  } else if (code >= 1000 && code < 10000) {
    err = new SystemError(code as SystemStatusType, i18nmsg, details);
  } else if (code >= 10000 && code < 20000) {
    err = new DatabaseError(code as DatebaseStatusType, i18nmsg, details);
  } else if (code >= 20000 && code < 50000) {
    err = new CustomError(code as CustomStatusType, i18nmsg, details);
  } else {
    err = new SystemError(5000, { zh: "未知系统个错误类型", en: "Unknown system error type" }, details);
  }
  res.status(err.statusCode);
  next(err);
};

export default setupError;
