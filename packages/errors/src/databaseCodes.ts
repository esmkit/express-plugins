export interface DatebaseStatusInterface {
  errcode: number;
  errhint: string;
  message: string;
  statusCode: number;
}

export const datebaseStatus: Array<DatebaseStatusInterface> = [
  {
    errcode: 10000,
    errhint: "Database Internal Error",
    message: "database internal error.",
    statusCode: 400,
  },
  {
    errcode: 11000,
    errhint: "Database Duplicate Key",
    message: "duplicate key error collection.",
    statusCode: 400,
  },
  {
    errcode: 12000,
    errhint: "Database Validation Failed",
    message: "validation failed.",
    statusCode: 400,
  },
];

export type DatebaseStatusType =
  | 10000
  | 11000
  | 12000
  | "Database Internal Error"
  | "Database Validation Failed"
  | "Database Duplicate Key";

export function findDatebaseStatus(codeStatus: DatebaseStatusType) {
  if (typeof codeStatus === "number") {
    return datebaseStatus.find(obj => {
      return obj.errcode === codeStatus;
    });
  } else {
    return datebaseStatus.find(obj => {
      return obj.errhint === codeStatus;
    });
  }
}
