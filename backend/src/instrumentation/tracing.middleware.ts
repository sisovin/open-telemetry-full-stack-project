import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { trace, context, propagation } from '@opentelemetry/api';

@Injectable()
export class TracingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const tracer = trace.getTracer('default');
    const span = tracer.startSpan(`HTTP ${req.method} ${req.url}`);

    context.with(trace.setSpan(context.active(), span), () => {
      propagation.inject(context.active(), req.headers);
      res.on('finish', () => {
        span.setAttribute('http.status_code', res.statusCode);
        span.end();
      });
      next();
    });
  }
}
