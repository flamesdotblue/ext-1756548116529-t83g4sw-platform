import React from 'react';

const projects = [
  {
    title: 'Horizon House',
    location: 'Palm Springs, CA',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Gallery Loft',
    location: 'Brooklyn, NY',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Courtyard Office',
    location: 'Austin, TX',
    year: '2022',
    image:
      'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Seacliff Residence',
    location: 'San Francisco, CA',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1519710884009-c1f9b4649114?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Atrium Studio',
    location: 'Copenhagen, DK',
    year: '2021',
    image:
      'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Ridge House',
    location: 'Denver, CO',
    year: '2022',
    image:
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop',
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Selected Work</h2>
          <p className="text-sm text-neutral-600">A curated selection of recent projects</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium tracking-tight">{p.title}</h3>
                  <span className="text-xs text-neutral-600">{p.year}</span>
                </div>
                <p className="text-sm text-neutral-600 mt-1">{p.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
