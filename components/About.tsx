import { Shield, Zap, Database, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Fitur Keamanan',
    description: 'Sistem keamanan menjaga server tetap fair',
    glowColor: 'group-hover:shadow-cyan-500/30',
    iconBg: 'group-hover:bg-cyan-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Zap,
    title: 'Low Latency',
    description: 'Uptime 99.9% dan ping rendah untuk pengalaman terbaik',
    glowColor: 'group-hover:shadow-primary/30',
    iconBg: 'group-hover:bg-primary/20',
    iconColor: 'text-primary',
  },
  {
    icon: Database,
    title: 'Data Backup',
    description: 'Backup otomatis setiap hari ke cloud storage aman',
    glowColor: 'group-hover:shadow-emerald-500/30',
    iconBg: 'group-hover:bg-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Users,
    title: 'Komunitas Aktif',
    description: 'Ratusan pemain dari seluruh Indonesia yang ramah',
    glowColor: 'group-hover:shadow-violet-500/30',
    iconBg: 'group-hover:bg-violet-500/20',
    iconColor: 'text-violet-400',
  },
];

export default function About() {
  return (
    <section id="tentang" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-accent/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-bold uppercase tracking-widest mb-4 drop-shadow-[0_0_10px_var(--primary)]">
            Tentang Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 text-balance">
            Tentang{' '}
            <span className="text-primary drop-shadow-[0_0_15px_var(--primary)]">
              Server
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            LeftyCraft Network adalah server Minecraft Indonesia yang
            didedikasikan untuk memberikan pengalaman bermain terbaik. Dengan
            berbagai gamemode seperti Survival, SkyBlock, dan minigames seru,
            kami memastikan setiap pemain menemukan keseruan yang mereka cari.
          </p>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-card/60 backdrop-blur-xl border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${feature.glowColor}`}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col items-center text-center">
                  <div
                    className={`w-20 h-20 bg-muted/80 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 ${feature.iconBg}`}
                  >
                    <Icon
                      className={`w-10 h-10 ${feature.iconColor} drop-shadow-[0_0_12px_currentColor] transition-all duration-300`}
                    />
                  </div>
                  <h3 className="text-foreground font-bold text-xl mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
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
