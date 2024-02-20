export interface CustomStatusInterface {
  errcode: number;
  errhint: string;
  message: string;
  statusCode: number;
}

export const customStatus: Array<CustomStatusInterface> = [
  {
    errcode: 40000,
    errhint: "Custom Client Internal",
    message: "Custom Client Internal error.",
    statusCode: 400,
  },
  {
    errcode: 40001,
    errhint: "Invalid Path Parameter",
    message: "Invalid path parameter error.",
    statusCode: 400,
  },
  {
    errcode: 40002,
    errhint: "Invalid Body Parameter",
    message: "Invalid body parameter error.",
    statusCode: 400,
  },
  {
    errcode: 40003,
    errhint: "Invalid Query Parameter",
    message: "Invalid query params parameter error.",
    statusCode: 400,
  },
  {
    errcode: 50000,
    errhint: "Custom Server Internal",
    message: "Custom Server Internal error.",
    statusCode: 500,
  },
];

export type CustomStatusType = 50000 | "Custom Internal";

export function findCustomStatus(codeStatus: CustomStatusType) {
  if (typeof codeStatus === "number") {
    return customStatus.find(obj => {
      return obj.errcode === codeStatus;
    });
  } else {
    return customStatus.find(obj => {
      return obj.errhint === codeStatus;
    });
  }
}
