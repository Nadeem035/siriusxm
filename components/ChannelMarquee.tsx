"use client";

import { useState } from "react";
import { channelList, type Channel } from "@/app/data";
import { SectionHeading } from "./Sections";
import A from "./A";

function Badges({ badges }: { badges?: Channel["badges"] }) {
  if (!badges) return null;
  return (
    <>
      {badges.map((b) =>
        b === "onlyOn" ? (
          <span key={b} className="badge-only" role="img" aria-label="Only on SiriusXM">
            ONLY ON <img src="/icons/s-logo.svg" alt="" />
          </span>
        ) : (
          <span key={b} className="badge">
            {b === "explicit" ? "EXPLICIT" : "APP ONLY"}
          </span>
        ),
      )}
    </>
  );
}

function Item({ c }: { c: Channel }) {
  return (
    <A className="ch-item" href={c.href}>
      <img src={`/images/${c.image}.webp`} alt={c.title} />
      <span className="ch-text">
        <span className="ch-meta">
          {c.eyebrow && <span className="ch-eyebrow">{c.eyebrow}</span>}
          <Badges badges={c.badges} />
        </span>
        <span className="ch-title">{c.title}</span>
        <span className="ch-body">{c.body}</span>
      </span>
    </A>
  );
}

export default function ChannelMarquee() {
  const [paused, setPaused] = useState(false);
  const cols: Channel[][] = [];
  for (let i = 0; i < channelList.items.length; i += 3) cols.push(channelList.items.slice(i, i + 3));

  return (
    <section className="section">
      <div className="container">
        <SectionHeading title={channelList.title} subtitle={channelList.subtitle} />
        <div className="center-cta center-cta-tight">
          <A className="btn btn-outline" href={channelList.cta.href}>
            {channelList.cta.label}
          </A>
        </div>
      </div>
      <div className="marquee" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className={`marquee-track ${paused ? "is-paused" : ""}`}>
          {[0, 1].map((dup) =>
            cols.map((col, i) => (
              <div key={`${dup}-${i}`} className="marquee-col" aria-hidden={dup === 1}>
                {col.map((c) => (
                  <Item key={c.title} c={c} />
                ))}
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
