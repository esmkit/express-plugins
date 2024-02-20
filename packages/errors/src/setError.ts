import { HttpStatusType } from "./httpStatusCodes";
import { DatebaseStatusType } from "./databaseCodes";
import { SystemStatusType } from "./systemCodes";
import { CustomStatusType } from "./customCodes";

import { default as DatabaseError } from "./databaseError";
import { default as SystemError } from "./systemError";
import { default as CustomError } from "./customError";
import { default as ApiError } from "./apiError";

export const setError = (code: number, i18nmsg?: object | undefined, details?: object | undefined): void => {
  if (code >= 100 && code < 1000) {
    throw new ApiError(code as HttpStatusType, i18nmsg, details);
  } else if (code >= 1000 && code < 10000) {
    throw new SystemError(code as SystemStatusType, i18nmsg, details);
  } else if (code >= 10000 && code < 20000) {
    throw new DatabaseError(code as DatebaseStatusType, i18nmsg, details);
  } else if (code >= 20000 && code < 50000) {
    throw new CustomError(code as CustomStatusType, i18nmsg, details);
  } else {
    throw new SystemError(5000, { zh: "未知系统个错误类型", en: "Unknown system error type" }, details);
  }
};

export default setError;
