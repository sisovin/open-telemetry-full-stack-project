import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-http';

export class MetricsExporter extends OTLPMetricExporter {
  constructor() {
    super({
      url: process.env.OTEL_EXPORTER_OTLP_METRICS_ENDPOINT,
    });
  }
}
