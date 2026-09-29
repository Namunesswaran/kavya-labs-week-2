"use client";

import { Suspense } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

function SignInCard() {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";

  return (
    <div className="wrap max-w-[420px] w-full py-16 text-center">
      <div className="font-serif font-semibold text-2xl mb-3">Kavya Labs</div>
      <p className="text-kavya-muted mb-10">
        Sign in to view your operations dashboard.
      </p>
      <button
        onClick={() => signIn("google", { callbackUrl })}
        className="w-full inline-flex items-center justify-center gap-3 font-semibold text-[0.95rem] rounded px-5 py-3 bg-kavya-panel border border-kavya-line hover:border-kavya-muted transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.82 2.73v2.27h2.94c1.72-1.58 2.68-3.92 2.68-6.64z"/>
          <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.94-2.27c-.81.55-1.85.87-3.02.87-2.32 0-4.28-1.57-4.98-3.68H1.1v2.32C2.6 15.98 5.56 18 9 18z"/>
          <path fill="#FBBC05" d="M4.02 10.74A5.4 5.4 0 0 1 3.73 9c0-.6.1-1.19.29-1.74V4.94H1.1A9 9 0 0 0 0 9c0 1.45.35 2.83 1.1 4.06l2.92-2.32z"/>
          <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.46 3.44 1.35l2.6-2.6C13.46.89 11.43 0 9 0 5.56 0 2.6 2.02 1.1 4.94l2.92 2.32C4.72 5.15 6.68 3.58 9 3.58z"/>
        </svg>
        Continue with Google
      </button>
    </div>
  );
}

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Suspense fallback={null}>
        <SignInCard />
      </Suspense>
    </main>
  );
}
