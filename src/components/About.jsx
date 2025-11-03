import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const About = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-5"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              About Road Craft Customs
            </h2>
            <p className="mt-3 text-slate-600">
              We build expressive, high-performance machines that turn every drive into a statement. Our team blends engineering precision with considered design, delivering bespoke modifications that respect manufacturer integrity while unlocking new potential.
            </p>
          </motion.div>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-7"
          >
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[{
                label: 'Bespoke Builds',
                value: 'Full-stack customization from aero to ECU',
              }, {
                label: 'Performance First',
                value: 'Track-proven setups and testing',
              }, {
                label: 'Concierge Service',
                value: 'White-glove communication from brief to delivery',
              }].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <dt className="text-sm font-semibold text-slate-900">{item.label}</dt>
                  <dd className="mt-1 text-sm text-slate-600">{item.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
