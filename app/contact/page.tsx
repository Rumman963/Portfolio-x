"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin,} from "lucide-react";
import { FaXTwitter , FaGithub, FaLinkedin  } from "react-icons/fa6";

const contactInfo = [
  { icon: Mail, label: "mohdrummankhan96@gmail.com", href: "mailto:mohdrummankhan96@gmail.com" },
  { icon: Phone, label: "+91 9696089396", href: "tel:+919696089396" },
  { icon: MapPin, label: "Lucknow, Uttar Pradesh", href: null },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Rumman963", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/rumman96", icon: FaLinkedin },
  { name: "Twitter", href: "https://twitter.com/RummanOnChain", icon: FaXTwitter },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-2 text-center">
        Contact Me
      </h1>
      <p className="text-white/50 text-center mb-12">
        Have a project in mind or just want to say hi? Let&apos;s talk.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-6 space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                    <Icon size={16} />
                    <span className="text-sm">{item.label}</span>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-6">
              <p className="text-white/50 text-sm mb-4">Find me online</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="p-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="bg-white/5 border-white/10">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/60 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white text-sm focus:outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white text-sm focus:outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white text-sm focus:outline-none focus:border-white/40 resize-none"
                />
              </div>

              <Button type="submit" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>

              {status === "sent" && (
                <p className="text-green-400 text-sm text-center">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}