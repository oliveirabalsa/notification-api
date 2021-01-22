import { Request, Response, NextFunction } from 'express';

export default function GlobalError(
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction,
): Response {
  if (err) {
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
}
