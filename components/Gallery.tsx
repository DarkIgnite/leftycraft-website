'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  { src: '/images/gallery-1.png', alt: 'Spawn Area', span: 'row-span-2' },
  { src: '/images/gallery-2.png', alt: 'Warp Crate', span: 'row-span-2' },
  { src: '/images/gallery-3.png', alt: 'Dungeon Room', span: 'row-span-2' },
  {
    src: '/images/gallery-4.png',
    alt: 'Boss Dungeon Room',
    span: 'row-span-2',
  },
  { src: '/images/gallery-5.png', alt: 'Overworld Build', span: 'row-span-2' },
  { src: '/images/gallery-6.png', alt: 'Dungeon Trader', span: 'row-span-2' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section id="galeri" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-bold uppercase tracking-widest mb-4 drop-shadow-[0_0_10px_var(--primary)]">
            Screenshot
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
            Galeri{' '}
            <span className="text-primary drop-shadow-[0_0_15px_var(--primary)]">
              Server
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lihat keindahan dunia LeftyCraft melalui koleksi screenshot dari
            server kami
          </p>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`group relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              {/* Hover overlay with blur and title */}
              <div className="absolute inset-0 bg-background/0 backdrop-blur-0 group-hover:bg-background/40 group-hover:backdrop-blur-sm transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-center">
                  <div className="w-12 h-12 bg-primary/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-3 border border-primary/40">
                    <ZoomIn className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-bold text-lg drop-shadow-lg">
                    {image.alt}
                  </span>
                </div>
              </div>
              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-14 h-14 bg-card/80 backdrop-blur-xl rounded-2xl flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-border hover:border-primary/50"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain bg-card"
            />
          </div>
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground font-bold text-xl bg-card/80 backdrop-blur-xl px-6 py-3 rounded-xl border border-primary/30">
            {selectedImage.alt}
          </p>
        </div>
      )}

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
