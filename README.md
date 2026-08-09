# Cloudinary AI Powered SaaS




## Setup

1. Install dependencies:

```bash
npm install
```

2. Create your local environment file:

```bash
cp .env.sample .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.sample .env
```

3. Fill in `.env` with your Postgres/Neon, Clerk, and Cloudinary credentials.

4. Generate the Prisma client:

```bash
npx prisma generate
```

5. Apply database migrations:

```bash
npx prisma migrate dev
```

6. Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Useful Commands

```bash
npm run lint
npm run build
npx prisma studio
```
