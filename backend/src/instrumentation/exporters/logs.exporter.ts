import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http';

export class LogsExporter extends OTLPLogExporter {
  constructor() {
    super({
      url: process.env.OTEL_EXPORTER_OTLP_LOGS_ENDPOINT,
    });
  }
}
