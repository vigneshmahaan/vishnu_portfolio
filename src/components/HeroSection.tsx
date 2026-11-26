import Image from "next/image";
import { HERO_STACK, PROFILE } from "@/data/resume";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative pt-24 pb-10 sm:pt-28 sm:pb-12"
      data-enter=""
      aria-labelledby="hero-h"
    >
      <div className="wrap relative z-10">
        {/* Bento Hero Grid inspired by modern developer portfolios */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Left 7-col primary bento card */}
          <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#111216]/90 p-6 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#d4d4d8]">
                <span className="size-2 rounded-full bg-[#22c55e]" aria-hidden="true" />
                <span>{PROFILE.status}</span>
              </div>

              <h1 id="hero-h" className="text-[clamp(30px,4.1vw,54px)] font-medium leading-[1.06] tracking-[-0.04em] mt-4 text-[#efefef]">
                I&apos;m Vishnu Kumar <span className="whitespace-nowrap">K M.</span>
              </h1>

              <p className="mt-2 text-[19px] sm:text-[22px] font-normal tracking-[-0.015em] text-[#fb7185]">
                {PROFILE.roleTitle}
              </p>

              <p className="mt-5 max-w-[42ch] text-[15px] sm:text-[16px] leading-[1.6] text-[#a1a1aa]">
                {PROFILE.bio}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[#efefef] px-6 text-[14px] font-medium text-[#0a0a0d] transition-transform hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-white/[0.14] bg-[#18191f] px-5 text-[14px] font-medium text-[#efefef] transition-colors hover:border-white/30"
              >
                <span>Contact</span>
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right 5-col column: clean studio portrait (no frame/card around face) + minimal quick-info bar */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="flex-1 flex items-center justify-center overflow-hidden min-h-[270px] sm:min-h-[300px]">
              <Image
                src="/images/vishnu-portrait.webp"
                width={924}
                height={1024}
                alt="Portrait of Vishnu Kumar K M in dark formal blazer and crimson patterned tie"
                priority
                className="h-[280px] sm:h-[310px] w-auto object-contain object-top"
              />
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#111216]/90 px-5 py-4 flex flex-wrap items-center justify-between gap-3 text-[13.5px]">
              <div className="inline-flex items-center gap-2 text-[#e4e4e7]">
                <MapPin className="size-3.5 text-[#fb7185] shrink-0" aria-hidden="true" />
                <span>{PROFILE.location}</span>
              </div>
              <div className="flex items-center gap-4 text-[#a1a1aa]">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-[#efefef] transition-colors"
                >
                  <Mail className="size-3.5" aria-hidden="true" />
                  <span>Email</span>
                </a>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#efefef] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width compact tech stack bento bar */}
        <div className="mt-4 rounded-2xl border border-white/[0.08] bg-[#111216]/85 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <span className="text-[13px] font-medium text-[#a1a1aa] shrink-0">
            Core Tech Stack
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {HERO_STACK.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#18191e] px-3 py-1 text-[12.5px] font-medium text-[#e4e4e7]"
              >
                <span className="inline-grid size-4 place-items-center rounded-[3px] bg-[#efefef]">
                  <Image
                    src={tech.icon}
                    alt=""
                    width={11}
                    height={11}
                    className="size-[11px] object-contain"
                  />
                </span>
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
