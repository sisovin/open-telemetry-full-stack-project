# Frontend README

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
