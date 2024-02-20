export interface SystemStatusInterface {
  errcode: number;
  errhint: string;
  message: string;
  statusCode: number;
}

export const systemStatus: Array<SystemStatusInterface> = [
  {
    errcode: 5000,
    errhint: "Internal",
    message: "Internal server error.",
    statusCode: 500,
  },
];

export type SystemStatusType = 5000 | "Internal";

export function findSystemStatus(codeStatus: SystemStatusType) {
  if (typeof codeStatus === "number") {
    return systemStatus.find(obj => {
      return obj.errcode === codeStatus;
    });
  } else {
    return systemStatus.find(obj => {
      return obj.errhint === codeStatus;
    });
  }
}
