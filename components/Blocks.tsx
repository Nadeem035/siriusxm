import type { ReactNode } from "react";
import A from "./A";
import { Chevron } from "./Icons";

/** Full-bleed hero with centered heading over a background image (plans, free trial, military). */
export function CenterHero({
  bg,
  title,
  size = "h1",
  subtitle,
  children,
}: {
  bg: string;
  title: string;
  size?: "h1" | "h2";
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="center-hero">
      <img className="center-hero-bg" src={bg} alt="" fetchPriority="high" />
      <div className="center-hero-content container">
        <h1 className={`center-hero-title ${size === "h2" ? "is-h2" : ""}`}>{title}</h1>
        {subtitle && <p className="center-hero-sub">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

export type Card = { image: string; alt: string; title: string; body: ReactNode; eyebrow?: string; href?: string };

/** Grey rounded card with image, optional eyebrow, title and body. */
export function ContentCard({ c, ratio = "3 / 2", children }: { c: Card; ratio?: string; children?: ReactNode }) {
  const inner = (
    <>
      <div className="cc-media">
        <img src={`/images/${c.image}.webp`} alt={c.alt} style={{ aspectRatio: ratio }} />
      </div>
      <div className="cc-content">
        {c.eyebrow && <span className="cc-eyebrow">{c.eyebrow}</span>}
        <h3 className="cc-title">{c.title}</h3>
        <div className="cc-body">
          {c.body}
          {children}
        </div>
      </div>
    </>
  );
  return c.href ? (
    <A className="content-card is-link" href={c.href}>
      {inner}
    </A>
  ) : (
    <div className="content-card">{inner}</div>
  );
}

export function CardRow({ cards, ratio }: { cards: Card[]; ratio?: string }) {
  return (
    <div className="card-row" style={{ ["--cols" as string]: cards.length }}>
      {cards.map((c) => (
        <ContentCard key={c.title} c={c} ratio={ratio} />
      ))}
    </div>
  );
}

export type AccordionItem = { title: string; icon?: string; content: ReactNode; open?: boolean };

/** Native <details> accordion, styled like the SiriusXM FAQ blocks. */
export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="accordion">
      {items.map((it) => (
        <details key={it.title} className="acc-item" open={it.open}>
          <summary className="acc-summary">
            <span className="acc-left">
              {it.icon && <img className="acc-icon" src={`/icons/${it.icon}.svg`} alt="" />}
              <span className="acc-title">{it.title}</span>
            </span>
            <Chevron className="acc-chevron" />
          </summary>
          <div className="acc-content">{it.content}</div>
        </details>
      ))}
    </div>
  );
}

/** Horizontal plan banner (Sports Pass / App Only). */
export function WidePlan({
  id,
  accent,
  textOnAccent,
  image,
  imageAlt,
  title,
  body,
  price,
  cta,
}: {
  id?: string;
  accent: string;
  textOnAccent: string;
  image: string;
  imageAlt: string;
  title: string;
  body: ReactNode;
  price: ReactNode;
  cta: string;
}) {
  return (
    <div className="wide-plan" id={id} style={{ ["--accent" as string]: accent, ["--on-accent" as string]: textOnAccent }}>
      <div className="wide-plan-media">
        <img src={`/images/${image}.webp`} alt={imageAlt} />
      </div>
      <div className="wide-plan-content">
        <h3 className="wide-plan-title">{title}</h3>
        <p className="wide-plan-body">{body}</p>
      </div>
      <div className="wide-plan-cta">
        <p>{price}</p>
        <A className="btn wide-plan-btn" href="#">
          {cta}
        </A>
      </div>
    </div>
  );
}

export function OfferLink({ children = "Offer Details" }: { children?: ReactNode }) {
  return (
    <a href="#pageOfferDetails">
      <b>{children}</b>
    </a>
  );
}
