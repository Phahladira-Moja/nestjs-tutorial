/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import { NestMiddleware, Injectable } from '@nestjs/common';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { valid } = req.headers;
    console.log('Validate Customer Account');

    if (valid) {
      next();
    } else {
      return res.status(401).send({ error: 'Account is Invalid' });
    }
  }
}
