"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE } from "@/data/resume";

const NAV_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 h-14 border-b border-white/[0.06] bg-[#0a0a0d]/85 backdrop-blur-md">
        <div className="wrap flex h-full items-center justify-between gap-4">
          <a className="skip-link" href="#top">
            Skip to content
          </a>

          <div className="flex items-center gap-7">
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium tracking-tight text-[#efefef]"
            >
              <svg width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
                <rect width="32" height="32" rx="5" fill="#14151a" />
                <path d="M8.5 9.5L15 22.5H17L23.5 9.5H20.4L16 18.8L11.6 9.5H8.5Z" fill="#efefef" />
                <rect x="8.5" y="24.5" width="15" height="2" fill="#b11226" />
              </svg>
              <span>{PROFILE.shortName}</span>
            </a>

            <nav className="hidden md:flex items-center gap-5" aria-label="Primary">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[13.5px] font-medium text-[#a1a1aa] transition-colors hover:text-[#efefef]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex h-8 items-center rounded-full border border-white/[0.12] bg-[#111216] px-3.5 text-[13px] font-medium text-[#e4e4e7] transition-colors hover:border-white/25 hover:text-white"
            >
              LinkedIn
            </a>

            <button
              type="button"
              className="inline-flex md:hidden size-10 items-center justify-center rounded-md border border-white/[0.12] bg-[#111216] text-[#efefef]"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside <header> so backdrop-filter does not trap position:fixed */}
      {open && (
        <div
          className="fixed inset-x-0 top-14 bottom-0 z-50 flex flex-col justify-between overflow-y-auto bg-[#0a0a0d] px-5 py-6 border-t border-white/[0.08] md:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile menu">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center justify-between border-b border-white/[0.08] text-[16px] font-medium text-[#efefef]"
              >
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-[14px] text-[#a1a1aa] underline underline-offset-4"
            >
              {PROFILE.email}
            </a>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#b11226] text-[14px] font-medium text-white"
            >
              Open LinkedIn
            </a>
          </div>
        </div>
      )}
    </>
  );
}
