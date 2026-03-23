"use client";

import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader title="Let's Build Something Amazing" subtitle="Get In Touch" />

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-extrabold text-slate-900">Contact Information</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-primary" />, label: "Email", info: "abubakarsa242@gmail.com" },
                { icon: <Phone className="text-primary" />, label: "Phone", info: "(+234) 8102553433" },
                { icon: <MapPin className="text-primary" />, label: "Location", info: "Nigeria (Open to Remote Worldwide)" },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 group">
                  <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg font-bold text-slate-900">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              {[
                { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/abubakarabdulrazak/" },
                { icon: <Twitter size={22} />, href: "https://twitter.com/lilsadiq2000" },
                { icon: <Github size={22} />, href: "https://github.com/Lilsadiq8345/" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-primary transition-all hover:-translate-y-1 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-10 bg-green-50 rounded-[2.5rem] border border-green-100 shadow-sm"
                >
                  <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-200">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 font-medium max-w-xs">
                    Thank you for reaching out! I've received your message and will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-8 text-green-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">Your Name</label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-semibold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">Email Address</label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="name@company.com"
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">Subject</label>
                    <input
                      required
                      name="subject"
                      type="text"
                      placeholder="How can I help you?"
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-semibold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">Message</label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-semibold resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm font-bold ml-1 animate-pulse">
                      ⚠️ {error}
                    </p>
                  )}

                  <button
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg transition-all hover:bg-primary active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl"
                  >
                    {isSubmitting ? "Sending Mission..." : "Send Message"}
                    {!isSubmitting && <Send size={20} />}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
