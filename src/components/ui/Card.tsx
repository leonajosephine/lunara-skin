import React, { type ElementType } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: ElementType;
};

export default function Card({ children, className = "", hover = true, as: Tag = "div" }: Props) {
  return (
    <Tag className={`card ${hover ? "card-hover" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
