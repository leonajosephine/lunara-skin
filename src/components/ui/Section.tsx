import React from "react";
import Container from "../layout/Container";

type Props = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  withTopBorder?: boolean;
  withBottomBorder?: boolean;
};

export default function Section({
  id,
  children,
  className = "",
  withTopBorder = false,
  withBottomBorder = false,
}: Props) {
  return (
    <section
      id={id}
      className={[
        "py-16",
        withTopBorder ? "border-t border-ls-border/70" : "",
        withBottomBorder ? "border-b border-ls-border/70" : "",
        className,
      ].join(" ")}
    >
      <Container>{children}</Container>
    </section>
  );
}
