import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-white/20 bg-white/50 backdrop-blur supports-[backdrop-filter]:bg-white/40">
          <nav className="flex items-center justify-between px-4 py-3" aria-label="Primary">
            <a href="#top" className="flex items-center gap-3" aria-label="Road Craft Customs home">
              <img
                src="/RCC Logo.png"
                alt="Road Craft Customs logo"
                className="h-8 w-auto object-contain"
                loading="eager"
                decoding="async"
              />
              <span className="sr-only">Road Craft Customs</span>
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
              <a href="#about" className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded">About</a>
              <a href="#featured" className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded">Featured</a>
              <a href="#contact" className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded">Contact</a>
              <a href="#enquire" className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-white shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 hover:bg-slate-800">Enquire</a>
            </div>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
