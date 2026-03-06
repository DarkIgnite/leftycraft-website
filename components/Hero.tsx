'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Users,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const serverIP = 'leftycraft.id';
  const [playersOnline, setPlayersOnline] = useState<number | null>(null);

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const fetchPlayersOnline = async () => {
      try {
        const res = await fetch(
          'https://api.mcstatus.io/v2/status/java/185.207.166.88:19001',
        );
        const data = await res.json();
        setPlayersOnline(data.players.online);
      } catch (error) {
        console.error('Failed to fetch players online', error);
      }
    };

    fetchPlayersOnline();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with Minecraft screenshot and dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Minecraft World"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-background/50" />
        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/15 rounded-full blur-[128px] animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Content - Centered */}
      <div className="relative container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Server Status Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-xl border border-primary/30 rounded-full px-4 py-2 mb-6 shadow-lg shadow-primary/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm text-muted-foreground">Server Online</span>
            <span className="text-sm text-foreground font-medium flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-primary" />
              {playersOnline ?? '...'} Pemain
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight text-balance">
            Selamat Datang di{' '}
            <span className="text-primary drop-shadow-[0_0_20px_var(--primary)]">
              LeftyCraft
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed text-balance">
            Server Minecraft terbaik di Indonesia dengan komunitas yang ramah,
            gameplay seru, dan fitur-fitur menarik yang siap menemani
            petualanganmu!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="https://discord.gg/pY6QrjEshm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 font-semibold px-8 h-14 text-base transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Gabung Discord
              </Button>
            </Link>

            <Link
              href="https://minecraft-mp.com/server/351994/vote/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-semibold px-8 h-14 text-base transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Vote Server
              </Button>
            </Link>
          </div>

          {/* Copy IP Button */}
          <button
            onClick={copyIP}
            className="group inline-flex items-center gap-4 bg-card/90 backdrop-blur-xl border border-primary/30 hover:border-primary/60 rounded-2xl px-6 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <div className="text-left">
              <p className="text-xs text-primary/80 uppercase tracking-wider mb-1 font-medium">
                Server IP
              </p>
              <p className="text-xl font-mono font-bold text-foreground drop-shadow-[0_0_10px_rgba(255,200,0,0.3)]">
                {serverIP}
              </p>
            </div>
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/40 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
              {copied ? (
                <Check className="w-6 h-6 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
              ) : (
                <Copy className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(255,200,0,0.5)]" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
