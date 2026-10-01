"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import A from "./A";
import { ContentCard, type Card } from "./Blocks";
import { Chevron } from "./Icons";

/** Horizontal card carousel with prev/next arrows (SiriusXM Originals). */
export function CardCarousel({ cards }: { cards: Card[] }) {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [max, setMax] = useState(cards.length - 1);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      const first = track.current?.children[0] as HTMLElement | undefined;
      if (!first || !viewport.current || !track.current) return;
      const gap = parseFloat(getComputedStyle(track.current).columnGap) || 0;
      const s = first.offsetWidth + gap;
      setStep(s);
      setMax(Math.max(0, cards.length - Math.floor((viewport.current.offsetWidth + gap) / s)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [cards.length]);

  const current = Math.min(index, max);
  return (
    <div className="card-carousel">
      <div className="card-carousel-viewport" ref={viewport}>
        <div className="card-carousel-track" ref={track} style={{ transform: `translateX(${-current * step}px)` }}>
          {cards.map((c) => (
            <div key={c.title} className="card-carousel-slide">
              <ContentCard c={c} ratio="16 / 9" />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-arrows">
        <button aria-label="Previous slide" disabled={current === 0} onClick={() => setIndex(Math.max(0, current - 1))}>
          <Chevron dir="left" />
        </button>
        <button aria-label="Next slide" disabled={current >= max} onClick={() => setIndex(Math.min(max, current + 1))}>
          <Chevron dir="right" />
        </button>
      </div>
    </div>
  );
}

/** White bar that slides in at the top of the viewport once the hero has scrolled away. */
export function StickyBar({ text, cta, href, primary = false }: { text: string; cta: string; href: string; primary?: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`sticky-bar ${show ? "is-visible" : ""}`} aria-hidden={!show}>
      <div className="container sticky-bar-inner">
        <p className="sticky-bar-text">{text}</p>
        <A className={`btn ${primary ? "btn-blue" : "btn-outline btn-sm btn-sm-text"}`} href={href}>
          {cta}
        </A>
      </div>
    </div>
  );
}

/** Contact page tabs. */
export function Tabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="tabs-wrap">
        <div className="tabs" role="tablist">
          {tabs.map((t, i) => (
            <button key={t.label} role="tab" aria-selected={active === i} className={`tab ${active === i ? "is-active" : ""}`} onClick={() => setActive(i)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div role="tabpanel">{tabs[active].content}</div>
    </>
  );
}

/** "Our Call Center is Open" disclosure that reveals the phone number. */
export function CallCenterToggle() {
  const [open, setOpen] = useState(false);
  return (
    <span className="call-toggle">
      <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        Our Call Center is Open
        <Chevron dir={open ? "up" : "down"} />
      </button>
      {open && (
        <span className="call-number">
          <a href="#">1-800-689-6881</a>
        </span>
      )}
    </span>
  );
}
