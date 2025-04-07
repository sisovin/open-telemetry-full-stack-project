# Backend README

## Overview

The backend is built with NestJS and integrates OpenTelemetry for observability. It includes modules for users and comments, and common utilities such as interceptors, filters, and guards.

## Setup Instructions

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env
   ```

4. Start the development server:

   ```bash
   yarn start:dev
   ```

## Folder Structure

```
backend/
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   ├── config/
│   │   ├── otel.config.ts
│   │   ├── logger.config.ts
│   │   └── env.config.ts
│   ├── instrumentation/
│   │   ├── otel.module.ts
│   │   ├── otel-sdk.ts
│   │   ├── tracing.middleware.ts
│   │   └── exporters/
│   │       ├── trace.exporter.ts
│   │       ├── metrics.exporter.ts
│   │       └── logs.exporter.ts
│   ├── modules/
│   │   ├── users/
│   │   │   ├── users.module.ts
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   └── users.entity.ts
│   │   └── comments/
│   │       ├── comments.module.ts
│   │       ├── comments.controller.ts
│   │       ├── comments.service.ts
│   │       └── comments.entity.ts
│   ├── common/
│   │   ├── interceptors/
│   │   ├── filters/
│   │   └── guards/
│   ├── interfaces/
│   │   ├── user.interface.ts
│   │   └── comment.interface.ts
│   ├── test/
│   │   └── app.e2e-spec.ts
│   ├── .env
│   ├── nest-cli.json
│   ├── tsconfig.json
│   ├── package.json
│   └── README.md
```
