import {
  SiFlutter,
  SiGithub,
  SiLaravel,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiWhatsapp,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

const techIcons = {
  next: SiNextdotjs,
  typescript: SiTypescript,
  laravel: SiLaravel,
  tailwind: SiTailwindcss,
  postgresql: SiPostgresql,
  flutter: SiFlutter,
};

const socialIcons = {
  github: SiGithub,
  linkedin: FaLinkedinIn,
  whatsapp: SiWhatsapp,
  mail: LuMail,
};

export function TechIcon({ name, className = "size-6" }) {
  const Icon = techIcons[name] ?? SiNextdotjs;
  return <Icon aria-hidden="true" className={className} />;
}

export function SocialIcon({ name, className = "size-5" }) {
  const Icon = socialIcons[name] ?? LuMail;
  return <Icon aria-hidden="true" className={className} />;
}

export function ArrowRight({ className = "size-4" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft({ className = "size-4" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

export function ArrowDown({ className = "size-4" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 4v15" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  );
}

export function ArrowUpRight({ className = "size-4" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function StarBurst({ className = "size-24" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
    >
      <path d="M50 2 58 27 79 10 74 36 98 39 80 57 99 72 74 78 84 98 60 89 50 99 40 89 16 98 26 78 1 72 20 57 2 39 26 36 21 10 42 27Z" />
    </svg>
  );
}
