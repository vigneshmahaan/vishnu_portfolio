"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/resume";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpRight, Cpu, Layers, ShieldAlert } from "lucide-react";

type TelemetryPreset = "normal" | "impact" | "tilt";

const TELEMETRY_STATES: Record<
  TelemetryPreset,
  { label: string; gForce: string; tiltAngle: string; status: string; alertActive: boolean }
> = {
  normal: {
    label: "Normal",
    gForce: "1.02 G",
    tiltAngle: "2.4°",
    status: "Monitoring active — baseline nominal",
    alertActive: false,
  },
  impact: {
    label: "Impact",
    gForce: "6.85 G",
    tiltAngle: "14.0°",
    status: "ALERT — dispatching emergency signal",
    alertActive: true,
  },
  tilt: {
    label: "Tilt",
    gForce: "2.10 G",
    tiltAngle: "54.0°",
    status: "ALERT — rollover threshold exceeded",
    alertActive: true,
  },
};

export function ProjectsSection() {
  const [simPreset, setSimPreset] = useState<TelemetryPreset>("normal");
  const sim = TELEMETRY_STATES[simPreset];

  const project1 = PROJECTS[0];
  const project2 = PROJECTS[1];

  return (
    <section
      id="projects"
      className="relative py-14 sm:py-16"
      aria-labelledby="projects-h"
    >
      <div className="wrap relative z-10">
        <div className="mb-12 text-center">
          <p className="font-mono text-[12px] tracking-[0.18em] text-[#a1a1aa] uppercase">
            Selected Works
          </p>
          <h2 id="projects-h" className="t-h2 mt-2 text-[#efefef]">
            Projects
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {/* Project 01 — Editorial alternating left text / right interactive visual */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="font-mono text-[12px] text-[#fb7185] uppercase tracking-wider">
                {project1.index} / Hardware + Embedded
              </p>
              <h3 className="t-h3 mt-2 text-[#efefef] text-[26px] sm:text-[32px] leading-[1.15]">
                {project1.title}
              </h3>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.65] text-[#a1a1aa] max-w-[46ch]">
                {project1.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project1.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.1] bg-[#14151a] px-3 py-1 font-mono text-[11px] text-[#d4d4d8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <Dialog>
                  <DialogTrigger
                    render={
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 text-[13px] font-mono uppercase tracking-wider text-[#efefef] hover:text-[#fb7185] transition-colors"
                      />
                    }
                  >
                    <span>System Architecture</span>
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg bg-[#111216] border border-white/[0.14] text-[#efefef] p-6 rounded-xl">
                    <DialogHeader>
                      <p className="font-mono text-[12px] text-[#fb7185]">
                        PROJECT {project1.index}
                      </p>
                      <DialogTitle className="text-[20px] font-medium text-[#efefef]">
                        {project1.title}
                      </DialogTitle>
                      <DialogDescription className="text-[14.5px] leading-[1.6] text-[#a1a1aa] pt-1">
                        {project1.architectureNote}
                      </DialogDescription>
                    </DialogHeader>
                    <ul className="mt-4 space-y-2 border-t border-white/[0.08] pt-4">
                      {project1.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-[14px] text-[#e4e4e7]">
                          <span className="mt-2 size-1.5 rounded-full bg-[#b11226] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Right visual interactive telemetry preview panel */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-white/[0.1] bg-[#111216]/90 p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/[0.08]">
                  <span className="inline-flex items-center gap-2 font-mono text-[12px] text-[#e4e4e7]">
                    <Cpu className="size-4 text-[#fb7185]" aria-hidden="true" />
                    Sensor Telemetry Preview
                  </span>
                  <div className="flex gap-1.5">
                    {(Object.keys(TELEMETRY_STATES) as TelemetryPreset[]).map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setSimPreset(preset)}
                        className={`px-2.5 py-1 rounded-md font-mono text-[11px] border transition-colors ${
                          simPreset === preset
                            ? "bg-[#b11226] text-white border-[#b11226]"
                            : "bg-[#18191e] text-[#a1a1aa] border-white/[0.1] hover:text-white"
                        }`}
                      >
                        {TELEMETRY_STATES[preset].label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-[#0c0d10] border border-white/[0.07] p-3.5">
                    <span className="font-mono text-[11px] text-[#a1a1aa]">IMPACT SENSOR</span>
                    <p className="mt-1 font-mono text-[20px] font-medium text-[#efefef] tabular-nums">
                      {sim.gForce}
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#0c0d10] border border-white/[0.07] p-3.5">
                    <span className="font-mono text-[11px] text-[#a1a1aa]">VEHICLE TILT</span>
                    <p className="mt-1 font-mono text-[20px] font-medium text-[#efefef] tabular-nums">
                      {sim.tiltAngle}
                    </p>
                  </div>
                </div>

                <div
                  className={`mt-3 flex items-center gap-2 rounded-lg px-3.5 py-2.5 font-mono text-[12px] border ${
                    sim.alertActive
                      ? "border-[#b11226] bg-[#b11226]/20 text-white"
                      : "border-emerald-500/25 bg-emerald-500/10 text-[#d4d4d8]"
                  }`}
                >
                  <ShieldAlert className="size-4 shrink-0" aria-hidden="true" />
                  <span>{sim.status}</span>
                </div>
              </div>
            </div>
          </article>

          {/* Project 02 — Alternating right text / left visual */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-xl border border-white/[0.1] bg-[#111216]/90 p-5 sm:p-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <span className="inline-flex items-center gap-2 font-mono text-[12px] text-[#e4e4e7]">
                    <Layers className="size-4 text-[#fb7185]" aria-hidden="true" />
                    Delivery Architecture
                  </span>
                  <span className="font-mono text-[11px] text-[#a1a1aa]">Static Export</span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2.5">
                  {project2.steps.map((st) => (
                    <div
                      key={st.step}
                      className="rounded-lg bg-[#0c0d10] border border-white/[0.07] p-3.5"
                    >
                      <span className="font-mono text-[11px] text-[#fb7185]">{st.step}</span>
                      <p className="mt-1.5 text-[13px] font-medium text-[#efefef]">{st.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <p className="font-mono text-[12px] text-[#fb7185] uppercase tracking-wider">
                {project2.index} / Frontend Architecture
              </p>
              <h3 className="t-h3 mt-2 text-[#efefef] text-[26px] sm:text-[32px] leading-[1.15]">
                {project2.title}
              </h3>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.65] text-[#a1a1aa] max-w-[46ch]">
                {project2.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project2.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.1] bg-[#14151a] px-3 py-1 font-mono text-[11px] text-[#d4d4d8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
