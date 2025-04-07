# OpenTelemetry Full-Stack Project

## Project Overview

This project is a full-stack application that integrates OpenTelemetry for observability. It consists of a backend built with NestJS and a frontend built with React. The project is structured as a monorepo, with separate folders for the backend and frontend.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- Docker (optional, for local development with Docker)
- Yarn (optional, for monorepo setup)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up environment variables:

   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

4. Start the development servers:

   ```bash
   yarn dev
   ```

## Architecture Diagram

![Architecture Diagram](./architecture-diagram.png)

## Backend README

### Overview

The backend is built with NestJS and integrates OpenTelemetry for observability. It includes modules for users and comments, and common utilities such as interceptors, filters, and guards.

### Setup Instructions

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

### Folder Structure

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

## Frontend README

### Overview

The frontend is built with React and integrates Lynx for OpenTelemetry. It includes features for users and comments, reusable UI components, custom hooks, and utility functions.

### Setup Instructions

1. Navigate to the frontend folder:

   ```bash
   cd frontend
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
   yarn start
   ```

### Folder Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── main.tsx
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Button.tsx
│   ├── features/
│   │   ├── users/
│   │   │   ├── UsersPage.tsx
│   │   │   ├── userService.ts
│   │   │   └── userTypes.ts
│   │   └── comments/
│   │       ├── CommentsPage.tsx
│   │       ├── commentService.ts
│   │       └── commentTypes.ts
│   ├── hooks/
│   │   └── useFetch.ts
│   ├── layouts/
│   │   ├── MainLayout.tsx
│   │   └── AdminLayout.tsx
│   ├── router/
│   │   ├── routes.tsx
│   │   └── ProtectedRoute.tsx
│   ├── services/
│   │   └── api.ts
│   ├── utils/
│   │   └── formatDate.ts
│   ├── lynx.config.ts
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── package.json
│   └── README.md
```
