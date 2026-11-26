"use client";

import { useEffect } from "react";

export function SkillRuntime() {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("m-enter", "mo-js");

    const enterTimer = window.setTimeout(() => {
      html.classList.add("m-enter-done");
    }, 700);
    const moTimer = window.setTimeout(() => {
      html.classList.add("mo-safe");
    }, 2500);

    // Dynamically import taste-skill's untouched motion & word-highlight modules after hydration
    const motionPath = "/assets/motion/motion.js";
    const momentsPath = "/assets/moments/moments.js";

    import(/* webpackIgnore: true */ motionPath).catch(() => {
      html.classList.add("m-enter-done");
    });

    import(/* webpackIgnore: true */ momentsPath).catch(() => {
      html.classList.add("mo-safe");
    });

    return () => {
      window.clearTimeout(enterTimer);
      window.clearTimeout(moTimer);
    };
  }, []);

  return null;
}
