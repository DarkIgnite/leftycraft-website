'use client';

import { useEffect, useState, useRef } from 'react';
import { Users, Server, UserCheck } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 127,
    label: 'Pemain Online',
    suffix: '',
    glowColor: 'shadow-green-500/40',
    iconColor: 'text-green-400',
    borderColor: 'border-green-500/30',
  },
  {
    icon: Server,
    value: 1.218,
    label: 'Versi Server',
    suffix: '',
    isVersion: true,
    glowColor: 'shadow-primary/40',
    iconColor: 'text-primary',
    borderColor: 'border-primary/30',
  },
  {
    icon: UserCheck,
    value: 4500,
    label: 'Total Pemain Terdaftar',
    suffix: '+',
    glowColor: 'shadow-accent/40',
    iconColor: 'text-accent',
    borderColor: 'border-accent/30',
  },
];

function AnimatedCounter({
  value,
  suffix = '',
  isVersion = false,
}: {
  value: number;
  suffix?: string;
  isVersion?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const displayValue = isVersion
    ? '1.21.8'
    : count >= 1000
      ? `${(count / 1000).toFixed(count >= value ? 0 : 1)}K`.replace('.0K', 'K')
      : Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className="tabular-nums">
      {isVersion
        ? displayValue
        : `${Math.floor(count).toLocaleString()}${suffix}`}
    </span>
  );
}

export default function Stats() {
  const [onlinePlayers, setOnlinePlayers] = useState(0);
  useEffect(() => {
    async function fetchServerStats() {
      try {
        const res = await fetch(
          'https://api.mcstatus.io/v2/status/java/185.207.166.88:19001',
        );
        const data = await res.json();
        console.log(data);

        setOnlinePlayers(data.players.online);
      } catch (error) {
        console.error('Failed to fetch server stats', error);
      }
    }

    fetchServerStats();

    const interval = setInterval(fetchServerStats, 30000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group relative bg-card/60 backdrop-blur-xl border ${stat.borderColor} rounded-3xl p-8 text-center hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${stat.glowColor} min-w-70 flex-1 max-w-[320px]`}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative">
                  <div
                    className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-muted/80 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg ${stat.glowColor} transition-all duration-500`}
                  >
                    <Icon
                      className={`w-8 h-8 ${stat.iconColor} drop-shadow-[0_0_8px_currentColor]`}
                    />
                  </div>
                  <p className="text-4xl md:text-5xl font-black text-foreground mb-2">
                    <AnimatedCounter
                      value={index === 0 ? onlinePlayers : stat.value}
                      suffix={stat.suffix}
                      isVersion={stat.isVersion}
                    />
                  </p>
                  <p className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
