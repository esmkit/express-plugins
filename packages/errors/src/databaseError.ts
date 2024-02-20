import { TError, IError } from "./terror";
import { findDatebaseStatus, DatebaseStatusType } from "./databaseCodes";

export class DatabaseError extends TError {
  constructor(databaseStatus: DatebaseStatusType, i18nmsg?: object, details?: object) {
    const status = findDatebaseStatus(databaseStatus);

    if (!status) {
      throw new Error(`database error code "${databaseStatus}" not found`);
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

export default DatabaseError;
