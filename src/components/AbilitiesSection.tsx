import Image from "next/image";
import { SKILL_GROUPS } from "@/data/resume";

export function AbilitiesSection() {
  return (
    <section
      id="skills"
      className="relative py-14 sm:py-16"
      aria-labelledby="skills-h"
    >
      <div className="wrap relative z-10">
        <div className="mb-8 text-center">
          <p className="font-mono text-[12px] tracking-[0.18em] text-[#a1a1aa] uppercase">
            Technical Proficiency
          </p>
          <h2 id="skills-h" className="sr-only">
            Technical Skills
          </h2>
        </div>

        {/* 3x2 minimalist architectural grid inspired by portfolio-onet.vercel.app */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-xl overflow-hidden">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.index}
              className="p-6 sm:p-7 bg-[#0e0f13]"
            >
              <p className="font-mono text-[11px] tracking-[0.14em] text-[#fb7185] uppercase">
                {group.index} / {group.label}
              </p>

              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2.5 text-[15px] text-[#e4e4e7]"
                  >
                    {item.icon ? (
                      <span className="inline-grid size-5 shrink-0 place-items-center rounded-[4px] bg-[#efefef]">
                        <Image
                          src={item.icon}
                          alt=""
                          width={13}
                          height={13}
                          className="size-[13px] object-contain"
                        />
                      </span>
                    ) : (
                      <span
                        className="inline-block size-1.5 ml-1.5 mr-2 rounded-full bg-white/30 shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
