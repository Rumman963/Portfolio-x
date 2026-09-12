import Link from "next/link";
import {  Mail} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Rumman963", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/rumman96/", icon: FaLinkedin },
  { name: "Twitter", href: "https://twitter.com/RummanOnChain", icon: FaXTwitter },
  { name: "Email", href: "mailto:mohdrummankhan96@gmail.com" , icon: Mail }
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Brand / tagline */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Mohd Rumman Khan</h3>
            <p className="text-sm text-white/50 max-w-xs">
              Building clean, functional, and thoughtful digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-white/80">Quick Links</h4>
            <ul className="space-x-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
             {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors">
              <Icon size={19} />
          </a>
          
    );
  })
  }
  </div>
</div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Mohd Rumman Khan. All rights reserved.
        </div>
    </footer>
  );
}