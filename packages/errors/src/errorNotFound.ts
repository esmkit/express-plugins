import { Request, Response, NextFunction } from "express";
import { default as ApiError } from "./apiError";

export default function requireErrorNotFound(_req: Request, _res: Response, next: NextFunction) {
  next(
    new ApiError(404, {
      zh: "无法识别URL，或终结点有效但资源本身不存在。",
      en: "The URL is not recognized or endpoint is valid but the resource itself does not exist.",
    })
  );
}
