import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.95)), url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1640&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.25em] text-xs text-neutral-600 mb-3">
            Contemporary Architecture
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight text-neutral-900">
            Thoughtful spaces. Timeless lines. Built for how you live.
          </h1>
          <p className="mt-6 text-neutral-700 max-w-2xl">
            We design minimalist, human-centered homes and commercial spaces that balance light,
            material, and proportion. From concept to completion, our work is defined by clarity and craft.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="px-5 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-full border border-neutral-300 text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
