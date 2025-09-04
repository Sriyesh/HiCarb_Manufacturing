"use client"
import logo from "../assets/logo.png";

export default function Header() {
  const items = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Gallery", href: "#gallery" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
      {/* contact bar */}
      <div className="bg-sky-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-1.5 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:hicarbengineeringhosur@gmail.com" className="hover:underline">
              hicarbengineeringhosur@gmail.com
            </a>
            <a href="tel:+919899997386" className="hover:underline">
              +91 98999 97386
            </a>
            <a href="tel:+919884222689" className="hover:underline">
              +91 98842 22689
            </a>
            <a href="tel:+919495276500" className="hover:underline">
              +91 94952 76500
            </a>
          </div>
          <a
            className="opacity-90 hover:opacity-100"
            href="https://maps.google.com/?q=HICARB+ENGINEERING+Hosur"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hosur, Krishnagiri District, Tamil Nadu
          </a>
        </div>
      </div>

      {/* main nav */}
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="" className="h-9 w-9 rounded-sm object-cover" />
          <span className="text-2xl md:text-3xl font-extrabold text-slate-900">HiCarb Engineering</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-slate-700">
          {items.map((it) => (
            <li key={it.href}>
              <a className="hover:text-sky-700 font-medium text-sm" href={it.href}>
                {it.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-md bg-amber-500 px-4 py-2 text-white text-sm font-semibold hover:bg-amber-600"
            >
              Enquire
            </a>
          </li>
        </ul>
        <a href="#contact" className="md:hidden rounded-md bg-amber-500 px-3 py-2 text-white text-sm">
          Enquire
        </a>
      </nav>
    </header>
  )
}
