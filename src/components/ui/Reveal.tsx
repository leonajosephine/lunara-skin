import React from "react";
import { useInView } from "../../hooks/useInView";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 120 | 220 | 320;
  as?: React.ElementType;
};

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: Props) {
  const { ref, isInView } = useInView({ threshold: 0.12 });

  return (
    <Tag
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${isInView ? "reveal-in" : "reveal"} ${className}`}
    >
      {children}
    </Tag>
  );
}
