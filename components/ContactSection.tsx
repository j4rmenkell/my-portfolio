"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

// EmailJS credentials are stored in .env.local
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

interface FormData { name: string; email: string; subject: string; message: string; }
interface FormErrors { name?: string; email?: string; subject?: string; message?: string; }
type Status = "idle" | "sending" | "success" | "error";

function validate(d: FormData): FormErrors {
  const e: FormErrors = {};
  if (!d.name.trim()) e.name = "Name is required.";
  else if (d.name.trim().length < 2) e.name = "At least 2 characters.";
  if (!d.email.trim()) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Enter a valid email.";
  if (!d.subject.trim()) e.subject = "Subject is required.";
  if (!d.message.trim()) e.message = "Message is required.";
  else if (d.message.trim().length < 20) e.message = "At least 20 characters.";
  return e;
}


export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors]     = useState<FormErrors>({});
  const [touched, setTouched]   = useState<Record<string, boolean>>({});
  const [status, setStatus]     = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name]) setErrors(prev => ({ ...prev, [name]: validate(updated)[name as keyof FormErrors] }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(formData)[name as keyof FormErrors] }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(formData);
    setErrors(errs);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(errs).length > 0) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTouched({});
    } catch { setStatus("error"); }
  };

  const fieldCls = (f: keyof FormErrors) =>
    `w-full bg-zinc-900/50 border rounded-2xl px-5 py-4 text-white text-sm placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#b90000]/50 focus:border-[#b90000] transition-all duration-300 ${
      errors[f] ? "border-red-500/50" : "border-zinc-800 hover:border-zinc-600"
    }`;

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Open to full-time opportunities, collaborations, and conversations. Drop me a message and I&apos;ll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0a0a0a] border border-zinc-800 shadow-2xl shadow-black overflow-hidden backdrop-blur-md relative h-full">
              {/* accent line at the top */}
              <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#b90000]/60 to-transparent" />

              <div className="p-8 md:p-10 h-full flex flex-col justify-center">
                {status === "success" ? (
                  /* ── Success state ── */
                  <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
                    <div className="w-20 h-20 rounded-3xl bg-[#b90000]/10 border border-[#b90000]/30 flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b90000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white tracking-tight mb-2">Message Sent!</h4>
                      <p className="text-zinc-400 text-sm max-w-sm">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-8 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium hover:border-[#b90000]/60 hover:text-white hover:-translate-y-0.5 transition-all duration-300 mt-4"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  /* ── Form ── */
                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                    <div className="mb-2">
                      <h3 className="text-2xl font-bold text-white tracking-tight mb-1">Send a Message</h3>
                      <p className="text-zinc-500 text-sm">Fill out the form below and I&apos;ll respond within 24 hours.</p>
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs text-zinc-500 uppercase tracking-widest font-bold ml-1">Name</label>
                        <input id="name" name="name" type="text" placeholder="Johann Batiancila"
                          value={formData.name} onChange={handleChange} onBlur={handleBlur}
                          className={fieldCls("name")} />
                        {errors.name && <p className="text-red-400 text-xs pl-2">{errors.name}</p>}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs text-zinc-500 uppercase tracking-widest font-bold ml-1">Email</label>
                        <input id="email" name="email" type="email" placeholder="you@example.com"
                          value={formData.email} onChange={handleChange} onBlur={handleBlur}
                          className={fieldCls("email")} />
                        {errors.email && <p className="text-red-400 text-xs pl-2">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-xs text-zinc-500 uppercase tracking-widest font-bold ml-1">Subject</label>
                      <input id="subject" name="subject" type="text" placeholder="Job opportunity / Project collab / Just saying hi!"
                        value={formData.subject} onChange={handleChange} onBlur={handleBlur}
                        className={fieldCls("subject")} />
                      {errors.subject && <p className="text-red-400 text-xs pl-2">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center ml-1">
                        <label htmlFor="message" className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Message</label>
                        <span className="text-[11px] text-zinc-600 font-medium">{formData.message.length} / 1000</span>
                      </div>
                      <textarea id="message" name="message" rows={5} maxLength={1000}
                        placeholder="Tell me about your project, role, or just say hello..."
                        value={formData.message} onChange={handleChange} onBlur={handleBlur}
                        className={`${fieldCls("message")} resize-none`} />
                      {errors.message && <p className="text-red-400 text-xs pl-2">{errors.message}</p>}
                    </div>

                    {/* Error banner */}
                    {status === "error" && (
                      <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        Something went wrong. Please try again or email me directly.
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group mt-2 w-full py-4 rounded-2xl bg-[#b90000] text-white font-bold tracking-wide text-sm hover:bg-red-700 hover:shadow-[0_0_30px_rgba(185,0,0,0.4)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      {status === "sending" ? (
                        <>
                          <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}