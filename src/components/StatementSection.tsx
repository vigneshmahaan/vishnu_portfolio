import { CERTIFICATIONS, EDUCATION, PROFILE } from "@/data/resume";

export function StatementSection() {
  return (
    <section
      id="about"
      className="relative py-14 sm:py-16"
      data-moment="word-highlight"
      aria-labelledby="about-h"
    >
      <div className="wrap relative z-10">
        <div className="rounded-2xl border border-white/[0.08] bg-[#111216]/85 p-6 sm:p-9">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Compact left intro */}
            <div className="lg:col-span-6">
              <p className="font-mono text-[12px] tracking-[0.14em] text-[#a1a1aa] uppercase">
                About Me
              </p>
              <h2 id="about-h" className="t-h2 mt-2 text-[#efefef]">
                Who I am
              </h2>
              <p className="mo-wh__text mt-4 text-[16px]! font-normal! leading-[1.65]! text-[#b5b5bd]!">
                {PROFILE.aboutShort}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-white/[0.07]">
                <div>
                  <p className="font-mono text-[11px] text-[#a1a1aa]">DEGREE</p>
                  <p className="mt-1 text-[14px] font-medium text-[#efefef]">B.E CSE</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] text-[#a1a1aa]">CGPA</p>
                  <p className="mt-1 text-[14px] font-medium text-[#efefef] tabular-nums">8.0</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] text-[#a1a1aa]">INTERNSHIPS</p>
                  <p className="mt-1 text-[14px] font-medium text-[#efefef] tabular-nums">3 Completed</p>
                </div>
              </div>
            </div>

            {/* Right compact education & certifications */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <p className="font-mono text-[11px] tracking-[0.12em] text-[#fb7185] uppercase mb-2.5">
                  Education
                </p>
                <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
                  {EDUCATION.map((edu) => (
                    <div
                      key={edu.degree}
                      className="py-2.5 flex items-center justify-between gap-4 text-[14px]"
                    >
                      <div>
                        <p className="font-medium text-[#efefef]">{edu.degree}</p>
                        <p className="text-[13px] text-[#a1a1aa]">{edu.institution}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-mono text-[13px] font-medium text-[#efefef] tabular-nums">
                          {edu.score}
                        </p>
                        <p className="font-mono text-[12px] text-[#a1a1aa] tabular-nums">
                          {edu.period}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-[11px] tracking-[0.12em] text-[#fb7185] uppercase mb-2.5">
                  Certifications
                </p>
                <div className="flex flex-wrap gap-2">
                  {CERTIFICATIONS.map((cert) => (
                    <div
                      key={cert.title}
                      className="rounded-lg border border-white/[0.08] bg-[#16171d] px-3 py-2 text-[13px]"
                    >
                      <span className="font-medium text-[#efefef]">{cert.title}</span>
                      <span className="text-[#a1a1aa]"> · {cert.issuer}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
