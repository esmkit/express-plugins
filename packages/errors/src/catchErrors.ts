import type { Request, Response, NextFunction, RequestHandler } from "express";

export const catchErrors =
  (requestHandler: RequestHandler): RequestHandler =>
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      await requestHandler(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default catchErrors;
