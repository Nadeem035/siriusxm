import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

/** Anchor that uses client-side navigation for internal routes ("/..."), and a plain <a> for "#" / hash links. */
export default function A({ href = "#", ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string }) {
  if (href.startsWith("/")) return <Link href={href} {...rest} />;
  return <a href={href} {...rest} />;
}
