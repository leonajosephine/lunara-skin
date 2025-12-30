import React from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function ImageCard({ src, alt, className = "" }: Props) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-ls-border ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover saturate-[0.95] contrast-[0.98]" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10" />
    </div>
  );
}
