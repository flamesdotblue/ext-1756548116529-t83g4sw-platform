import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Please add a subject';
    if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const mailto = `mailto:hello@studiomoderne.example?subject=${encodeURIComponent(
      form.subject + ' — Inquiry from ' + form.name
    )}&body=${encodeURIComponent(`${form.message}\n\nName: ${form.name}\nEmail: ${form.email}`)}`;
    setSubmitted(true);
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Let’s build something exceptional</h2>
            <p className="text-neutral-700 mt-3">
              Tell us about your project—timeline, location, and vision. We’ll reply within two business days.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-neutral-800">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100">
                  <Mail size={18} />
                </span>
                hello@studiomoderne.example
              </div>
              <div className="flex items-center gap-3 text-neutral-800">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100">
                  <Phone size={18} />
                </span>
                (555) 123-4567
              </div>
              <div className="flex items-center gap-3 text-neutral-800">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100">
                  <MapPin size={18} />
                </span>
                42 Mercer St, Suite 3F — New York, NY
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-neutral-700">Name</label>
                  <input
                    className={`mt-1 w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-neutral-300'} bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900`}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-sm text-neutral-700">Email</label>
                  <input
                    type="email"
                    className={`mt-1 w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-neutral-300'} bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900`}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm text-neutral-700">Subject</label>
                <input
                  className={`mt-1 w-full rounded-lg border ${errors.subject ? 'border-red-500' : 'border-neutral-300'} bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900`}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Project inquiry"
                />
                {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
              </div>
              <div className="mt-4">
                <label className="text-sm text-neutral-700">Message</label>
                <textarea
                  rows={6}
                  className={`mt-1 w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-neutral-300'} bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your site, scope, budget, and timeline."
                />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-xs text-neutral-500">We never share your information.</p>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
                >
                  Send Inquiry
                </button>
              </div>
              {submitted && (
                <p className="mt-4 text-sm text-green-700">
                  Opening your email client to send the message…
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
