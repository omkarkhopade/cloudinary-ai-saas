"use client";
import dynamic from "next/dynamic";
const ClerkProvider = dynamic(() => import("@clerk/nextjs").then((module) => module.ClerkProvider), { ssr: false });
const hasClerkKey = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) && !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.includes("...");
export function AuthProvider({ children }: { children: React.ReactNode }) { return hasClerkKey ? <ClerkProvider>{children}</ClerkProvider> : <>{children}</>; }
