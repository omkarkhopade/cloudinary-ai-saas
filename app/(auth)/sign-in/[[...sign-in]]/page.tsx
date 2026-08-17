import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
const enabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) && !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.includes("...");
export default function Page() { return <main className="grid min-h-screen place-items-center p-6">{enabled ? <SignIn /> : <section className="max-w-md rounded-2xl border border-amber-400/30 bg-amber-400/10 p-8 text-center"><h1 className="text-xl font-semibold">Authentication needs configuration</h1><p className="mt-3 text-sm text-slate-300">Add valid Clerk publishable and secret keys to enable sign-in.</p><Link href="/" className="mt-6 inline-block text-violet-300">Back to MediaForge</Link></section>}</main>; }
