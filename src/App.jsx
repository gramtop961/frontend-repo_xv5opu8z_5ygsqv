import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedCars from './components/FeaturedCars';
import { Instagram, Mail, Phone } from 'lucide-react';

function App() {
  return (
    <div className="font-inter text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedCars />

        {/* Enquiry / Contact */}
        <section id="enquire" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ready to start your build?</h2>
                <p className="mt-2 max-w-xl text-slate-600">Share your vision and desired platform. We’ll respond with options, timelines, and a path to delivery.</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
                    Make an enquiry
                  </a>
                  <a href="#featured" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
                    See featured builds
                  </a>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <a href="mailto:contact@roadcraftcustoms.com" className="flex items-center gap-2 text-slate-700 hover:text-slate-900"><Mail className="h-4 w-4" /> contact@roadcraftcustoms.com</a>
                <a href="tel:+10000000000" className="flex items-center gap-2 text-slate-700 hover:text-slate-900"><Phone className="h-4 w-4" /> +1 (000) 000-0000</a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-700 hover:text-slate-900"><Instagram className="h-4 w-4" /> @roadcraftcustoms</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer inline to keep component count within requested range */}
      <footer id="contact" className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <img src="/RCC Logo.png" alt="Road Craft Customs" className="h-7 w-auto" loading="lazy" />
              <p className="text-sm text-slate-600">© {new Date().getFullYear()} Road Craft Customs. All rights reserved.</p>
            </div>
            <nav className="flex items-center gap-6 text-sm" aria-label="Footer">
              <a href="#about" className="text-slate-600 hover:text-slate-900">About</a>
              <a href="#featured" className="text-slate-600 hover:text-slate-900">Featured</a>
              <a href="#enquire" className="text-slate-600 hover:text-slate-900">Enquire</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
