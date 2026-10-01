"use client";

import { useEffect, useRef, useState } from "react";
import { videos } from "@/app/data";
import { SectionHeading } from "./Sections";
import { Chevron, CloseIcon, PlayIcon } from "./Icons";

export default function VideoCarousel() {
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(videos.items.length - 1);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState<string | null>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const measure = () => {
      if (!viewport.current || !track.current) return;
      const first = track.current.children[0] as HTMLElement | undefined;
      if (!first) return;
      const gap = parseFloat(getComputedStyle(track.current).columnGap) || 0;
      const s = first.offsetWidth + gap;
      const visible = Math.max(1, Math.floor((viewport.current.offsetWidth + gap) / s));
      setStep(s);
      setMaxIndex(Math.max(0, videos.items.length - visible));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const current = Math.min(index, maxIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPlaying(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="section video-section">
      <div className="container">
        <SectionHeading title={videos.title} subtitle={videos.subtitle} />
        <div className="video-viewport" ref={viewport}>
          <ul className="video-track" ref={track} style={{ transform: `translateX(${-current * step}px)` }}>
            {videos.items.map((v) => (
              <li key={v.youtubeId} className="video-slide">
                <button className="video-thumb" aria-label={`Play video: ${v.title}`} onClick={() => setPlaying(v.youtubeId)}>
                  <img src={v.image} alt={v.title} />
                  <span className="video-play">
                    <PlayIcon />
                  </span>
                </button>
                <button className="video-text" onClick={() => setPlaying(v.youtubeId)}>
                  <span className="video-title">{v.title}</span>
                  <span className="video-desc">{v.description}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="carousel-arrows">
          <button aria-label="Previous slide" disabled={current === 0} onClick={() => setIndex(Math.max(0, current - 1))}>
            <Chevron dir="left" />
          </button>
          <button aria-label="Next slide" disabled={current >= maxIndex} onClick={() => setIndex(Math.min(maxIndex, current + 1))}>
            <Chevron dir="right" />
          </button>
        </div>
      </div>

      {playing && (
        <div className="video-modal" role="dialog" aria-modal="true" onClick={() => setPlaying(null)}>
          <div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" aria-label="Close video" onClick={() => setPlaying(null)}>
              <CloseIcon />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${playing}?autoplay=1&rel=0`}
              title="SiriusXM video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
