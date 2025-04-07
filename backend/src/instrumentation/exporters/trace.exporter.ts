import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';

export class TraceExporter extends OTLPTraceExporter {
  constructor() {
    super({
      url: process.env.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT,
    });
  }
}
