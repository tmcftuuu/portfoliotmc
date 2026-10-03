import React, { useState } from 'react';
import { Phone, Send, Menu, X } from 'lucide-react';

export default function Navbar({ profile }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Học vấn', href: '#education' },
    { label: 'Thành tích', href: '#achievements' },
    { label: 'Kinh nghiệm BIDV', href: '#experience' },
    { label: 'Ngoại khoá', href: '#extracurricular' },
    { label: 'Ngoại ngữ', href: '#languages' },
    { label: 'Kỹ năng', href: '#skills' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-2.5 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <nav className="liquid-glass rounded-2xl px-4 sm:px-6 py-2 flex items-center justify-between border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.45)]">
          {/* Brand Logo & Name */}
          <a href="#about" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shrink-0">
              <div className="w-full h-full bg-[#0a1026] rounded-[10px] flex items-center justify-center font-extrabold text-white text-sm">
                MC
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm sm:text-base whitespace-nowrap group-hover:text-cyan-300 transition-colors">
                  TRỊNH MAI CHI
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-500/25 text-cyan-300 font-bold border border-cyan-400/40 whitespace-nowrap">
                  Mai Chi
                </span>
              </div>
              <span className="text-[11px] text-slate-300 hidden sm:inline whitespace-nowrap">
                Thực tập sinh Ngân Hàng — ĐH Ngoại Thương
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (All 8 Sections) */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions: Phone & Contact CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <a
              href="tel:0395569183"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-xs font-bold text-cyan-300 transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
              <span className="whitespace-nowrap">0395 569 183</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white text-xs font-bold hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] transition-all hover:scale-105 whitespace-nowrap shadow-md"
            >
              <Send className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Liên hệ</span>
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors cursor-pointer shrink-0"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-2xl liquid-glass border border-white/20 shadow-2xl space-y-1 animate-fadeIn backdrop-blur-3xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-300 hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <a
                href="tel:0395569183"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cyan-500/25 text-cyan-300 font-bold text-xs border border-cyan-400/40"
              >
                <Phone className="w-4 h-4" />
                <span>Gọi ngay: 0395 569 183</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
