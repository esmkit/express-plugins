import { TError, IError } from "./terror";
import { findSystemStatus, SystemStatusType } from "./systemCodes";

export default class SystemError extends TError {
  constructor(systemStatus: SystemStatusType, i18nmsg?: object, details?: object) {
    const status = findSystemStatus(systemStatus);

    if (!status) {
      throw new Error(`system error code "${systemStatus}" not found`);
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
