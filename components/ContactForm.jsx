"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-kavya-fg text-[1.05rem] max-w-[46ch]">
        Thanks — we&apos;ll be in touch within a day.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[420px]">
      <input
        type="text"
        required
        placeholder="Your name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="bg-kavya-panel border border-kavya-line rounded px-4 py-3 text-kavya-fg placeholder:text-kavya-muted focus:outline-none focus:border-kavya-accent"
      />
      <input
        type="email"
        required
        placeholder="Work email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="bg-kavya-panel border border-kavya-line rounded px-4 py-3 text-kavya-fg placeholder:text-kavya-muted focus:outline-none focus:border-kavya-accent"
      />
      <textarea
        placeholder="What's your team's biggest ops bottleneck right now?"
        rows={3}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="bg-kavya-panel border border-kavya-line rounded px-4 py-3 text-kavya-fg placeholder:text-kavya-muted focus:outline-none focus:border-kavya-accent resize-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-block font-semibold text-[0.95rem] rounded px-5 py-2.5 bg-kavya-accent text-[#241A0A] hover:bg-[#f0b158] transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Book a demo"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong — try again, or email hello@kavyalabs.ai directly.
        </p>
      )}
    </form>
  );
}
