"use client";

import { useEffect, useRef } from "react";

export function CursorEffect() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    let mx = -200;
    let my = -200;
    let rx = -200;
    let ry = -200;
    let visible = false;
    let interactive = false;
    let rafId = 0;

    const interactiveSelector = "a, button, input, textarea, [role='button']";

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        rx = mx;
        ry = my;
      }
      const target = e.target as Element | null;
      interactive = Boolean(target?.closest(interactiveSelector));

      if (dotRef.current) {
        dotRef.current.style.opacity = "1";
        dotRef.current.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0) scale(${interactive ? 0.6 : 1})`;
      }
      if (glowRef.current) {
        glowRef.current.style.opacity = "1";
        glowRef.current.style.background = `radial-gradient(420px circle at ${mx}px ${my}px, rgba(177, 18, 38, 0.095), rgba(239, 239, 239, 0.025) 45%, transparent 72%)`;
      }
    };

    const onLeave = () => {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };

    const tick = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;

      if (ringRef.current && visible) {
        const size = interactive ? 40 : 28;
        const half = size / 2;
        ringRef.current.style.opacity = "1";
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.borderColor = interactive
          ? "rgba(251, 113, 133, 0.78)"
          : "rgba(239, 239, 239, 0.34)";
        ringRef.current.style.backgroundColor = interactive
          ? "rgba(177, 18, 38, 0.08)"
          : "transparent";
        ringRef.current.style.transform = `translate3d(${rx - half}px, ${ry - half}px, 0)`;
      }

      rafId = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[5] opacity-0 transition-opacity duration-300"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[70] rounded-full border opacity-0 transition-[width,height,border-color,background-color,opacity] duration-150 ease-out"
        style={{ width: 28, height: 28 }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[70] size-1.5 rounded-full bg-[#fb7185] opacity-0 transition-opacity duration-150"
      />
    </>
  );
}
