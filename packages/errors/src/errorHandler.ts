import { Request, Response, NextFunction } from "express";
import { TError, isTrustedError } from "./terror";

type ResponseType = {
  success: boolean;
  summary: string;
  payload: {
    errcode: number;
    errhint: string;
    details: object;
    stack?: string[];
  };
  i18nmsg?: object;
  errors?: any;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function requireErrorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  const stack = process.env.NODE_ENV !== "production" ? err.stack?.split("\n") : [];

  if (err instanceof TError && isTrustedError(err)) {
    const errorsMessage: any = err.i18nmsg;

    const response: ResponseType = {
      success: false,
      summary: `${err.name}: ${err.message}`,
      i18nmsg: err.i18nmsg || { zh: "无中文报错提示", en: "No error message" },
      payload: {
        errcode: err.errcode || 5000,
        errhint: err.errhint || "No error hint",
        details: err.details || {},
        stack,
      },
      errors: {
        code: err.errcode,
        status: err.errcode <= 1000 ? err.errcode : 200,
        message: errorsMessage?.zh || err.message,
        details: err.details || {},
      },
    };

    return res.status(err.statusCode).json(response);
  }

  // Cannot handle error, return "INTERNAL SERVER ERROR"
  const response: ResponseType = {
    success: false,
    summary: `${err.name}: ${err.message}`,
    i18nmsg: { zh: "未定义错误类型", en: "Undefined error type" },
    payload: { errcode: 5000, errhint: "Undefined error", details: {}, stack },
    errors: { code: 5000, status: 500, message: "未定义错误类型", details: {} },
  };

  return res.status(500).json(response);
}

export default requireErrorHandler;
