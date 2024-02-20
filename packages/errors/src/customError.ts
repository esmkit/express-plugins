import { TError, IError } from "./terror";
import { findCustomStatus, CustomStatusType } from "./customCodes";

export default class CustomError extends TError {
  constructor(customStatus: CustomStatusType, i18nmsg?: object, details?: object) {
    const status = findCustomStatus(customStatus);

    if (!status) {
      throw new Error(`system error code "${customStatus}" not found`);
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
