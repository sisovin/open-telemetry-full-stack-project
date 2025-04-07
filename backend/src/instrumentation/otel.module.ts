import { Module } from '@nestjs/common';
import { OpenTelemetryModule } from '@nestjs/otel';
import { TraceExporter } from './exporters/trace.exporter';
import { MetricsExporter } from './exporters/metrics.exporter';
import { LogsExporter } from './exporters/logs.exporter';

@Module({
  imports: [
    OpenTelemetryModule.forRoot({
      traceExporter: new TraceExporter(),
      metricsExporter: new MetricsExporter(),
      logsExporter: new LogsExporter(),
    }),
  ],
})
export class OtelModule {}
