import React from 'react';
import { User } from 'lucide-react';

const Bio = () => {
  return (
    <section id="about" className="py-20 border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1">
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1400&auto=format&fit=crop"
                alt="Portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white">
                <User size={18} />
              </span>
              <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>
            </div>
            <p className="text-neutral-700 leading-relaxed">
              I am an architect specializing in modern residential and boutique commercial projects. My practice is
              grounded in the belief that architecture should be simple, refined, and deeply connected to its context.
              Over the past decade, I have led projects from urban infill homes to adaptive reuse, collaborating closely
              with craftspeople to achieve precision in every detail.
            </p>
            <p className="text-neutral-700 leading-relaxed mt-4">
              I focus on natural light, honest materials, and calm spatial sequences. Each project begins with careful
              listening—understanding how clients live and work—translating those insights into spaces that feel both
              effortless and enduring.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#work" className="px-4 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100">
                Explore Portfolio
              </a>
              <a href="#contact" className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800">
                Inquire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
