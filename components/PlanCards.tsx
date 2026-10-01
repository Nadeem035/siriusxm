"use client";

import { useState, type ReactNode } from "react";
import A from "./A";
import { Chevron } from "./Icons";

type Tile = { src: string; alt: string };

function TileSlider({ tiles, label }: { tiles: Tile[]; label: string }) {
  const [index, setIndex] = useState(0);
  const step = 108; // 96px tile + 12px gap
  const max = Math.max(0, tiles.length + 1 - 3);
  return (
    <div className="tile-slider">
      <div className="tile-viewport">
        <div className="tile-track" style={{ transform: `translateX(${-index * step}px)` }}>
          {tiles.map((t) => (
            <img key={t.alt} src={`/images/${t.src}.webp`} alt={t.alt} />
          ))}
          <button className="tile-more" type="button">
            <span>View more</span>
            <Chevron dir="right" />
          </button>
        </div>
      </div>
      <div className="tile-foot">
        <button className="tile-label" type="button">
          {label}
        </button>
        <div className="tile-arrows">
          <button aria-label="Previous" disabled={index === 0} onClick={() => setIndex(Math.max(0, index - 3))}>
            <Chevron dir="left" />
          </button>
          <button aria-label="Next" disabled={index >= max} onClick={() => setIndex(Math.min(max, index + 3))}>
            <Chevron dir="right" />
          </button>
        </div>
      </div>
    </div>
  );
}

export type AddOn = { name: string; price: number };

export function InCarPlanCard({
  name,
  badge,
  accent,
  onAccent,
  description,
  addOns,
  basePrice,
  cta,
  tiles,
  tilesLabel,
}: {
  name: string;
  badge: string;
  accent: string;
  onAccent: string;
  description: ReactNode;
  addOns?: AddOn[];
  basePrice: number;
  cta: string;
  tiles: Tile[];
  tilesLabel: string;
}) {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const total = basePrice + (addOns ?? []).reduce((s, a) => s + (on[a.name] ? a.price : 0), 0);

  return (
    <div className="plan-card" style={{ ["--accent" as string]: accent, ["--on-accent" as string]: onAccent }}>
      <div className="plan-head">
        <span className="plan-name">{name}</span>
        <span className="plan-badge">{badge}</span>
        <div className="plan-desc">{description}</div>
      </div>
      {addOns && (
        <>
          <span className="plan-addon-label">Want more than music? Select your add-ons:</span>
          <div className="plan-addons">
            {addOns.map((a) => (
              <div key={a.name} className="plan-addon">
                <span className="plan-addon-name">{a.name}</span>
                <span className="plan-addon-price">${a.price} more/mo.</span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={!!on[a.name]}
                  aria-label={`Add ${a.name}`}
                  className={`switch ${on[a.name] ? "is-on" : ""}`}
                  onClick={() => setOn((s) => ({ ...s, [a.name]: !s[a.name] }))}
                />
              </div>
            ))}
          </div>
        </>
      )}
      <p className="plan-price">
        <b>$1 for 3 months</b> then ${total.toFixed(2)}/mo.
      </p>
      <A className="btn plan-btn" href="#">
        {cta}
      </A>
      <TileSlider tiles={tiles} label={tilesLabel} />
    </div>
  );
}

export function TrialPlanCard({
  name,
  badge,
  headline,
  intro,
  features,
  price,
  cta,
}: {
  name: string;
  badge: string;
  headline: string;
  intro: ReactNode;
  features: ReactNode;
  price: ReactNode;
  cta: string;
}) {
  return (
    <div className="plan-card trial-card">
      <div className="trial-flag" />
      <div className="plan-head">
        <span className="plan-name">{name}</span>
        <span className="plan-badge">{badge}</span>
        <div className="plan-desc">
          <span className="trial-headline">{headline}</span>
          <p>{intro}</p>
          <ul>{features}</ul>
        </div>
      </div>
      <p className="plan-price">{price}</p>
      <A className="btn btn-blue plan-btn trial-btn" href="#">
        {cta}
      </A>
    </div>
  );
}
