"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

function AuthAction({ className = "" }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <span className={`text-kavya-muted text-[0.9rem] ${className}`}>...</span>;
  }

  if (session) {
    return (
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className={`inline-flex items-center gap-2 font-semibold text-[0.95rem] rounded px-5 py-2.5 border border-kavya-line hover:border-kavya-muted transition-colors whitespace-nowrap ${className}`}
      >
        {session.user?.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={session.user.image} alt="" className="w-5 h-5 rounded-full" />
        )}
        Sign out
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className={`inline-block font-semibold text-[0.95rem] rounded px-5 py-2.5 bg-kavya-accent text-[#241A0A] hover:bg-[#f0b158] transition-colors whitespace-nowrap ${className}`}
    >
      Sign in
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-kavya-line relative">
      <div className="wrap flex items-center justify-between gap-6 py-[22px]">
        <div className="font-serif font-semibold text-xl tracking-tight">
          Kavya Labs
        </div>

        <ul className="hidden md:flex gap-8 text-[0.95rem] text-kavya-muted list-none m-0 p-0">
          <li><Link href="#product" className="hover:text-kavya-fg transition-colors">Product</Link></li>
          <li><Link href="#approach" className="hover:text-kavya-fg transition-colors">Approach</Link></li>
          <li><Link href="#contact" className="hover:text-kavya-fg transition-colors">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-3">
          <AuthAction className="hidden md:inline-flex" />

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="md:hidden inline-flex flex-col justify-center gap-1.5 w-9 h-9"
          >
            <span className={`block h-[1.5px] w-6 bg-kavya-fg transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-kavya-fg transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-kavya-fg transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-kavya-line bg-kavya-bg">
          <ul className="wrap flex flex-col gap-1 py-4 text-[0.95rem] text-kavya-muted list-none m-0">
            <li><Link href="#product" onClick={() => setOpen(false)} className="block py-2 hover:text-kavya-fg">Product</Link></li>
            <li><Link href="#approach" onClick={() => setOpen(false)} className="block py-2 hover:text-kavya-fg">Approach</Link></li>
            <li><Link href="#contact" onClick={() => setOpen(false)} className="block py-2 hover:text-kavya-fg">Contact</Link></li>
            <li className="pt-2">
              <AuthAction />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
