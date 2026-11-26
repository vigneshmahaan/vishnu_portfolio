"use client";

import { useState } from "react";
import { PROFILE } from "@/data/resume";
import { Check, ExternalLink, Mail, Phone } from "lucide-react";

export function InquirySection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(null);

  const handleCopy = async (kind: "email" | "phone", value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(kind);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setStatusMessage(`Select and copy: ${value}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!name.trim()) nextErrors.name = "Enter your name.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!message.trim()) nextErrors.message = "Write a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Portfolio Inquiry — ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nReply Email: ${email.trim()}\n\n${message.trim()}`
    );

    setStatusMessage(`Opening email draft to ${PROFILE.email}.`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 border-t border-white/[0.06]"
      aria-labelledby="contact-h"
    >
      <div className="wrap relative z-10 max-w-[680px]">
        <div className="text-center">
          <h2 id="contact-h" className="t-h1 text-[#efefef]">
            Let&apos;s Talk.
          </h2>
          <p className="mt-3 text-[15px] text-[#a1a1aa]">
            Open to software, backend, web, and IoT opportunities.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="c-name"
                className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#a1a1aa] mb-2"
              >
                Name
              </label>
              <input
                id="c-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full border-b border-white/[0.16] bg-transparent py-2.5 text-[15px] text-[#efefef] placeholder:text-white/25 focus:border-[#fb7185] focus:outline-none"
              />
              {errors.name && (
                <p className="mt-1.5 text-[12.5px] text-[#fb7185]">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="c-email"
                className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#a1a1aa] mb-2"
              >
                Email
              </label>
              <input
                id="c-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border-b border-white/[0.16] bg-transparent py-2.5 text-[15px] text-[#efefef] placeholder:text-white/25 focus:border-[#fb7185] focus:outline-none"
              />
              {errors.email && (
                <p className="mt-1.5 text-[12.5px] text-[#fb7185]">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="c-msg"
              className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[#a1a1aa] mb-2"
            >
              Tell me about your role or project
            </label>
            <textarea
              id="c-msg"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a brief message..."
              className="w-full border-b border-white/[0.16] bg-transparent py-2.5 text-[15px] text-[#efefef] placeholder:text-white/25 focus:border-[#fb7185] focus:outline-none resize-none"
            />
            {errors.message && (
              <p className="mt-1.5 text-[12.5px] text-[#fb7185]">{errors.message}</p>
            )}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#b11226] px-6 text-[14px] font-medium text-white transition-colors hover:bg-[#c8182e]"
            >
              Send Message
            </button>
            <p role="status" aria-live="polite" className="text-[13px] text-[#a1a1aa]">
              {statusMessage || `Direct: ${PROFILE.email}`}
            </p>
          </div>
        </form>

        {/* Compact direct channels row */}
        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-4 text-[13px] text-[#d4d4d8]">
          <button
            type="button"
            onClick={() => handleCopy("email", PROFILE.email)}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-[#111216] px-3.5 py-1.5 hover:border-white/25"
          >
            {copiedField === "email" ? (
              <Check className="size-3.5 text-[#22c55e]" aria-hidden="true" />
            ) : (
              <Mail className="size-3.5 text-[#fb7185]" aria-hidden="true" />
            )}
            <span>{copiedField === "email" ? "Copied email" : PROFILE.email}</span>
          </button>

          <button
            type="button"
            onClick={() => handleCopy("phone", PROFILE.phone)}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-[#111216] px-3.5 py-1.5 tabular-nums hover:border-white/25"
          >
            {copiedField === "phone" ? (
              <Check className="size-3.5 text-[#22c55e]" aria-hidden="true" />
            ) : (
              <Phone className="size-3.5 text-[#fb7185]" aria-hidden="true" />
            )}
            <span>{copiedField === "phone" ? "Copied phone" : PROFILE.phone}</span>
          </button>

          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-[#111216] px-3.5 py-1.5 hover:border-white/25"
          >
            <span>LinkedIn</span>
            <ExternalLink className="size-3.5 text-[#a1a1aa]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
