import { TError, IError } from "./terror";
import { findHttpStatus, HttpStatusType } from "./httpStatusCodes";

export default class ApiError extends TError {
  constructor(httpStatus: HttpStatusType, i18nmsg?: object, details?: object) {
    const status = findHttpStatus(httpStatus);

    if (!status) {
      throw new Error(`http status code "${httpStatus}" not found`);
    }

    const error: IError = status;

    if (details) {
      error.details = details;
    }
    if (i18nmsg) {
      error.i18nmsg = i18nmsg;
    }
    super(error);
  }

  get isOperational() {
    return true;
  }
}
