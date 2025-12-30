import React from "react";

type Variant = "primary" | "outline" | "ghost";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const base =
  "btn focus-ring px-6 py-3"; // nutzt deine Klassen aus index.css

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  ghost: "underline underline-offset-4 text-[0.7rem]",
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
