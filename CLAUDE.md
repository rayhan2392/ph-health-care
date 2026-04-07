# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **PH Health Care** patient-healthcare portal built with Next.js 16 (App Router). It provides role-based dashboards for Admin, Doctor, and Patient users with JWT-based authentication.

## Common Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

**Backend API**: The app proxies to a backend at `http://localhost:5002/api/v1` (configured via `NEXT_PUBLIC_BASE_API_URL` env var).

## Architecture

### Authentication Flow

1. User submits credentials via Server Action (`loginUser` in `src/services/auth/loginUser.ts`)
2. Backend sets `accessToken` and `refreshToken` cookies via `Set-Cookie` headers
3. `loginUser` parses `Set-Cookie` headers, re-stores tokens using `setCookie()` from `src/services/auth/tokenHandler.ts`
4. JWT token is verified client-side in `src/proxy.ts` middleware
5. Role-based routing is handled by `getRouteOwner()` in `src/lib/auth-utils.ts`

### Middleware (`src/proxy.ts`)

All routing decisions go through this middleware (except `/api`, `/_next`, static files). It:
- Extracts JWT from `accessToken` cookie
- Redirects authenticated users away from auth routes
- Redirects unauthenticated users to `/login`
- Enforces role-based access (`ADMIN`, `DOCTOR`, `PATIENT`)

### Route Groups

- `(commonLayout)/` — Public routes (login, register, home page)
- `(dashboardLayout)/` — Protected dashboard routes with role-based sub-layouts

### Server Actions (src/services/auth/)

- `loginUser.ts` — Login with Zod validation, sets auth cookies
- `registerPatient.ts` — Patient registration
- `logoutUser.ts` — Clears auth cookies
- `getUserInfo.ts` — Fetches current user from token

### Shared API Client

`src/lib/server-fetch.ts` exports typed methods: `get`, `post`, `put`, `patch`, `delete`. Use this for API calls instead of raw `fetch`.

## Environment Variables

```
NEXT_PUBLIC_BASE_API_URL=http://localhost:5002/api/v1
JWT_SECRET=<cryptographically random secret>
```

## Key Conventions

- Server Actions marked with `"use server"` at top of file
- Client Components marked with `"use client"` at top of file
- Auth cookies: `accessToken` (1hr TTL), `refreshToken` (90 days TTL)
- Role enum: `"ADMIN" | "DOCTOR" | "PATIENT"`
