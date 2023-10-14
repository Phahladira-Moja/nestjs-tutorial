/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import { NestMiddleware, Injectable } from '@nestjs/common';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res
        .status(403)
        .send({ error: 'No Authentication Token Provided' });
    }

    if (authorization !== '123') {
      return res
        .status(403)
        .send({ error: 'Invalid Authentication Token Provided' });
    }

    next();
  }
}
