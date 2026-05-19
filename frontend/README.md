# QueryForge Frontend (Next.js)

A modern Next.js + Tailwind CSS interface for the QueryForge file-upload Q&A workspace, with Clerk auth and animated components.

## Setup

1. Create `.env.local` in this folder:

```
NEXT_PUBLIC_API_BASE=http://localhost:8000
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

If you don't want to wire Clerk yet, you can leave those unset and run the frontend without authentication for local testing.

2. Install and run:

```
npm install
npm run dev
```

Open http://localhost:3000.

## Notes

- Requires sign-in in the current UI flow before uploading a file.
- Uploads a local file via POST /hackrx/run-file using multipart/form-data.
- Supports both standard and streaming answer modes.
- Minimal animations via framer-motion; you can add aceternityUI or reactbits as desired.
