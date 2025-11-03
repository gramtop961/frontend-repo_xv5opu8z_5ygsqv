import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" className="relative isolate min-h-[85vh] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* gradient overlay to improve text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/70" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative z-10"
          >
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-900/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Bespoke builds. Precision craft.
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Road Craft Customs
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
              Premium, performance-first automotive customization. From concept to track-ready delivery, we engineer experiences that feel futuristic, fast, and flawless.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#enquire"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                Enquire now
              </a>
              <a
                href="#featured"
                className="inline-flex items-center justify-center rounded-full bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                View featured builds
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative z-10 h-[40vh] w-full rounded-2xl border border-white/40 bg-white/70 p-4 shadow-xl ring-1 ring-slate-900/5 backdrop-blur md:h-[56vh]"
            aria-label="Hero media placeholder"
          >
            <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 text-center">
              <div className="max-w-xs text-slate-600">
                <p className="text-sm font-medium">Hero media</p>
                <p className="mt-1 text-xs">A high-contrast, looping video will appear here to showcase our latest build.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
