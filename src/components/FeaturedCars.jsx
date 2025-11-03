import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const cars = [
  {
    id: 'rcc-gt',
    title: 'RCC GT Aero',
    tag: 'Widebody • Carbon • Stage 3',
    colorFrom: '#0f172a',
    colorTo: '#1e293b',
  },
  {
    id: 'rcc-evo',
    title: 'RCC EVO X',
    tag: 'Time Attack • Titanium • ACD',
    colorFrom: '#111827',
    colorTo: '#0b1220',
  },
  {
    id: 'rcc-rs',
    title: 'RCC RS Touring',
    tag: 'Sleeper • ECU • Ceramic',
    colorFrom: '#111827',
    colorTo: '#1f2937',
  },
  {
    id: 'rcc-zx',
    title: 'RCC ZX Proto',
    tag: 'Prototype • Active Aero',
    colorFrom: '#0b1220',
    colorTo: '#111827',
  },
];

const FeaturedCars = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="featured" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Featured Modified Cars</h2>
            <p className="mt-2 max-w-2xl text-slate-600">A selection of our recent builds, refined for the road and engineered for the track.</p>
          </div>
          <a
            href="#enquire"
            className="hidden shrink-0 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 md:inline-flex"
          >
            Start your build
          </a>
        </div>

        <div className="mt-8 overflow-x-auto">
          <ul className="flex w-max gap-6 pr-6">
            {cars.map((car, idx) => (
              <motion.li
                key={car.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative h-72 w-[320px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(120% 120% at 100% 0%, ${car.colorTo} 0%, ${car.colorFrom} 60%)`,
                  }}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\'><path d=\'M0 16h32M16 0v32\' stroke=\'%23ffffff11\' stroke-width=\'1\' /></svg>')]" />
                <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white">
                  <div>
                    <p className="inline-flex rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium ring-1 ring-white/20 backdrop-blur">
                      {car.tag}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">{car.title}</h3>
                  </div>
                  <button className="inline-flex w-fit items-center justify-center rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 shadow transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                    Explore build
                  </button>
                </div>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <a href="#enquire" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
            Enquire about a custom build
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
