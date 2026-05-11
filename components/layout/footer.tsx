import Link from "next/link";
import { footerData } from "@/data/site";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { brand, description, navItems, socialLinks, copyright } = footerData;
  const iconMap = {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaXTwitter,
  };
  const hoverColorMap = {
    FaWhatsapp: "hover:text-amber-400",
    FaInstagram: "hover:text-amber-400",
    FaFacebook: "hover:text-amber-400",
    FaXTwitter: "hover:text-amber-400",
  };

  return (
    <footer className="py-12 border-t border-stone-900/80 bg-[#05070c] text-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Link
              href={brand.href}
              className="text-lg font-semibold tracking-tight text-stone-100"
            >
              {brand.name}
              <span className="text-amber-300">{brand.accent}</span>
            </Link>
            <p className="mt-2 text-sm text-stone-400">{description}</p>
            {/* Redes sociales */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social) => {
                const IconComponent =
                  iconMap[social.icon as keyof typeof iconMap];
                const hoverColor =
                  hoverColorMap[social.icon as keyof typeof hoverColorMap];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`text-stone-400 ${hoverColor} transition-colors text-xl`}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-stone-400 hover:text-stone-100 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-stone-400">
            © {currentYear} {brand.name}. {copyright.label}
          </p>
        </div>
      </div>
    </footer>
  );
}
