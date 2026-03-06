'use client';

import { FaTiktok } from 'react-icons/fa';
import { useState } from 'react';
import {
  Gamepad2,
  Copy,
  Check,
  MessageCircle,
  Twitter,
  Youtube,
} from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const serverIP = 'leftycraft.id';

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      icon: MessageCircle,
      href: 'https://discord.com/invite/pY6QrjEshm',
      label: 'Discord',
    },
    {
      icon: FaTiktok,
      href: 'https://www.tiktok.com/@leftycraft.id',
      label: 'TikTok',
    },
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#tentang', label: 'Tentang' },
    { href: '#galeri', label: 'Galeri' },
    { href: '#ranks', label: 'Ranks' },
  ];

  return (
    <footer className="relative border-t border-primary/20 bg-linear-to-b from-card/50 to-background">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="inline-flex items-center gap-3 mb-5 group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                <Gamepad2 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-black text-foreground">
                Lefty
                <span className="text-primary drop-shadow-[0_0_10px_var(--primary)]">
                  Craft
                </span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-md mb-6 leading-relaxed">
              Server Minecraft Indonesia terbaik dengan komunitas yang ramah dan
              gameplay yang seru. Bergabung sekarang dan mulai petualanganmu!
            </p>

            {/* Server IP */}
            <button
              onClick={copyIP}
              className="group inline-flex items-center gap-4 bg-card/80 backdrop-blur-xl border border-border hover:border-primary/50 rounded-2xl px-5 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Server IP
                </p>
                <p className="font-mono font-bold text-foreground text-lg">
                  {serverIP}
                </p>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300">
                {copied ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <Copy className="w-5 h-5 text-primary" />
                )}
              </div>
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-foreground font-bold text-lg mb-5">
              Sosial Media
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 bg-muted/60 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-transparent hover:border-primary/40"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} LeftyCraft. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Not affiliated with Mojang Studios or Microsoft
          </p>
        </div>
      </div>
    </footer>
  );
}
