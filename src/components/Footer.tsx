import { PROFILE } from "@/data/resume";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-8">
      <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#a1a1aa]">
        <span>&copy; 2026 {PROFILE.name}</span>

        <div className="flex items-center gap-5">
          <a href="#about" className="hover:text-[#efefef] transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-[#efefef] transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-[#efefef] transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-[#efefef] transition-colors">
            Projects
          </a>
        </div>

        <a
          href={`mailto:${PROFILE.email}`}
          className="hover:text-[#efefef] transition-colors"
        >
          {PROFILE.email}
        </a>
      </div>
    </footer>
  );
}
