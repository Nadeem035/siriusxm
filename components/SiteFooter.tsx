"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Sections";

export default function SiteFooter() {
  const pathname = usePathname() || "/";
  return <Footer minimal={pathname.startsWith("/offers/military")} />;
}
