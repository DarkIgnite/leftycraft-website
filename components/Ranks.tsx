'use client';

import Link from 'next/link';
import { Check, Crown, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ranks = [
  {
    name: 'Semi',
    price: '9.999',
    tierColor: 'from-slate-400 to-slate-500',
    borderColor: 'border-slate-500/40',
    glowColor: 'group-hover:shadow-slate-400/30',
    description: 'Rank pemula untuk memulai perjalanan',
    features: [
      '/stonecutter',
      '/loom',
      'Bonus Legendary Key 1x',
      'Warna chat putih',
      'Bonus Balance $50.000',
      'Limit Sethome 5',
      'Limit Jual /ah 5',
      'Penyimpanan Vault 5',
      'Max Claim Land 5',
      'Block Claim 10k',
    ],
    popular: false,
  },
  {
    name: 'Semi+',
    price: '24.999',
    tierColor: 'from-emerald-400 to-emerald-600',
    borderColor: 'border-emerald-500/40',
    glowColor: 'group-hover:shadow-emerald-400/30',
    description: 'Upgrade dari Semi dengan fitur lebih',
    features: [
      '/grindstone',
      '/cartography',
      '/smithingtable',
      'Bonus Legendary Key 2x',
      'Warna chat putih',
      'Bonus Balance $100.000',
      'Limit Sethome 6',
      'Limit Jual /ah 6',
      'Penyimpanan Vault 10',
      'Max Claim Land 6',
      'Block Claim 15k',
    ],
    popular: false,
  },
  {
    name: 'Member+',
    price: '49.999',
    tierColor: 'from-cyan-400 to-cyan-600',
    borderColor: 'border-cyan-500/40',
    glowColor: 'group-hover:shadow-cyan-400/30',
    description: 'Untuk member setia server',
    features: [
      '/craft',
      '/anvil',
      '/hat',
      'Bonus Legendary Key 3x',
      'Warna chat hijau',
      'Bonus Balance $200.000',
      'Limit Sethome 7',
      'Limit Jual /ah 7',
      'Penyimpanan Vault 20',
      'Max Claim Land 8',
      'Block Claim 20k',
    ],
    popular: false,
  },
  {
    name: 'Member++',
    price: '99.999',
    tierColor: 'from-blue-400 to-blue-600',
    borderColor: 'border-blue-500/40',
    glowColor: 'group-hover:shadow-blue-400/30',
    description: 'Member dengan privilege ekstra',
    features: [
      '/speed walk',
      '/fly',
      '/speed fly',
      '/enderchest',
      'Bonus Legendary Key 4x',
      'Warna chat biru',
      'Bonus Balance $300.000',
      'Limit Sethome 8',
      'Limit Jual /ah 8',
      'Penyimpanan Vault 30',
      'Max Claim Land 9',
      'Block Claim 25k',
    ],
    popular: true,
  },
  {
    name: 'Luxury',
    price: '149.999',
    tierColor: 'from-violet-400 to-violet-600',
    borderColor: 'border-violet-500/40',
    glowColor: 'group-hover:shadow-violet-400/30',
    description: 'Rank premium dengan banyak keuntungan',
    features: [
      '/nick',
      '/ptime',
      '/pweather',
      '/feed',
      'Bonus Legendary Key 5x',
      'Bonus Spawner Key 2x',
      'Warna chat pink',
      'Bonus Balance $500.000',
      'Limit Sethome 9',
      'Limit Jual /ah 10',
      'Penyimpanan Vault 40',
      'Max Claim Land 15',
      'Block Claim 30k',
    ],
    popular: false,
  },
  {
    name: 'Luxury+',
    price: '249.999',
    tierColor: 'from-yellow-400 to-amber-500',
    borderColor: 'border-primary/50',
    glowColor: 'group-hover:shadow-primary/50',
    description: 'Rank paling populer dengan fitur lengkap',
    features: [
      '/repair',
      '/repair all',
      '/eheal',
      '/glow',
      '/scale',
      'Bonus Legendary Key 8x',
      'Bonus Spawner Key 5x',
      'Warna chat emas',
      'Bonus Balance $1.000.000',
      'Limit Sethome 10',
      'Limit Jual /ah 20',
      'Penyimpanan Vault 64',
      'Max Claim Land 25',
      'Block Claim 50k',
      'BONUS FREE SUFFIX',
    ],
    popular: true,
  },
  {
    name: 'Custom Rank',
    price: '549.999',
    tierColor: 'from-rose-400 to-pink-600',
    borderColor: 'border-rose-500/40',
    glowColor: 'group-hover:shadow-rose-400/30',
    description: 'Buat rank sesuai keinginanmu',
    features: [
      '/itemname',
      'Bonus Legendary Key 10x',
      'Bonus Spawner Key 10x',
      'Warna chat emas',
      'Bonus Balance $2.000.000',
      'Limit Sethome Unlimited',
      'Limit Jual /ah 30',
      'Penyimpanan Vault 100',
      'Max Claim Land Unlimited',
      'Block Claim 300k',
      'BONUS FREE SUFFIX',
    ],
    popular: false,
  },
];

export default function Ranks() {
  return (
    <section id="ranks" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-bold uppercase tracking-widest mb-4 drop-shadow-[0_0_10px_var(--primary)]">
            Donasi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Server{' '}
            <span className="text-primary drop-shadow-[0_0_15px_var(--primary)]">
              Ranks
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dukung server dengan membeli rank dan dapatkan berbagai keuntungan
            eksklusif
          </p>
        </div>

        {/* Ranks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ranks.map((rank, index) => (
            <div
              key={index}
              className={`group relative bg-card/60 backdrop-blur-xl border-2 ${
                rank.popular ? 'border-primary' : rank.borderColor
              } rounded-3xl p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${rank.glowColor} ${
                rank.popular
                  ? 'ring-2 ring-primary/30 shadow-xl shadow-primary/20'
                  : ''
              }`}
            >
              {/* Popular Badge */}
              {rank.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-black px-4 py-2 rounded-full shadow-lg shadow-primary/40">
                    <Crown className="w-4 h-4" />
                    PALING POPULER
                  </div>
                </div>
              )}

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Rank Header */}
                <div className="text-center mb-6 pt-2">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br ${rank.tierColor} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    {rank.popular ? (
                      <Crown className="w-8 h-8 text-white drop-shadow-lg" />
                    ) : index === ranks.length - 1 ? (
                      <Sparkles className="w-8 h-8 text-white drop-shadow-lg" />
                    ) : (
                      <Star className="w-8 h-8 text-white drop-shadow-lg" />
                    )}
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-1">
                    {rank.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {rank.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground font-medium">
                      Rp
                    </span>
                    <span className="text-4xl font-black text-foreground">
                      {rank.price}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {rank.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="https://api.whatsapp.com/send?phone=6282157941613"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`w-full font-bold h-12 text-base transition-all duration-300 ${
                      rank.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/40 hover:shadow-primary/60 hover:scale-105'
                        : 'bg-muted/80 text-foreground hover:bg-primary/20 hover:text-primary border border-border hover:border-primary/50'
                    }`}
                  >
                    Beli Rank
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
