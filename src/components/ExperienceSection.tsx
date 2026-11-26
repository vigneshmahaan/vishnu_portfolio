import Image from "next/image";
import { INTERNSHIPS } from "@/data/resume";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-14 sm:py-16"
      aria-labelledby="experience-h"
    >
      <div className="wrap relative z-10">
        <div className="mb-8 text-center">
          <p className="font-mono text-[12px] tracking-[0.18em] text-[#a1a1aa] uppercase">
            Internships
          </p>
          <h2 id="experience-h" className="t-h2 mt-2 text-[#efefef]">
            Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {INTERNSHIPS.map((intern) => (
            <article
              key={intern.id}
              className="rounded-xl border border-white/[0.08] bg-[#111216]/85 p-6 flex flex-col justify-between transition-colors hover:border-white/[0.18]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] tracking-wider text-[#fb7185] uppercase">
                    {intern.index} / {intern.domain}
                  </span>
                  <div className="flex items-center gap-1" aria-hidden="true">
                    {intern.tools.map((tool) => (
                      <span
                        key={tool.name}
                        title={tool.name}
                        className="inline-grid size-5 place-items-center rounded-[4px] bg-[#efefef]"
                      >
                        <Image
                          src={tool.icon}
                          alt=""
                          width={12}
                          height={12}
                          className="size-[12px] object-contain"
                        />
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="mt-4 text-[18px] font-medium text-[#efefef]">
                  {intern.role}
                </h3>
                <p className="mt-0.5 text-[14px] text-[#a1a1aa]">
                  {intern.company}
                </p>

                <p className="mt-4 text-[14.5px] leading-[1.6] text-[#d4d4d8]">
                  {intern.summary}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/[0.07] flex flex-wrap gap-1.5">
                {intern.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.09] bg-[#18191e] px-2.5 py-0.5 font-mono text-[11px] text-[#d4d4d8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
