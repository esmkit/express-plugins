export { TError, IError, isTrustedError } from "./terror";

export { findHttpStatus, HttpStatusType, HttpStatusInterface } from "./httpStatusCodes";
export { findSystemStatus, SystemStatusType, SystemStatusInterface } from "./systemCodes";
export { findDatebaseStatus, DatebaseStatusType, DatebaseStatusInterface } from "./databaseCodes";
export { findCustomStatus, CustomStatusType, CustomStatusInterface } from "./customCodes";

export { default as DatabaseError } from "./databaseError";
export { default as ApiError } from "./apiError";
export { default as CustomError } from "./customError";
export { default as SystemError } from "./systemError";
export { default as catchErrors } from "./catchErrors";
export { default as requireErrorHandler } from "./errorHandler";
export { default as requireErrorNotFound } from "./errorNotFound";
export { default as setupError } from "./setupError";
export { default as setError } from "./setError";
