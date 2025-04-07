import { LynxConfig } from 'lynx';

const config: LynxConfig = {
  serviceName: 'frontend',
  exporter: {
    type: 'otlp',
    endpoint: 'http://localhost:4317',
  },
  instrumentations: [
    {
      name: 'http',
      enabled: true,
    },
    {
      name: 'fetch',
      enabled: true,
    },
    {
      name: 'xhr',
      enabled: true,
    },
    {
      name: 'document-load',
      enabled: true,
    },
    {
      name: 'user-interaction',
      enabled: true,
    },
  ],
};

export default config;
