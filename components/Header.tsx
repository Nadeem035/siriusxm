"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/app/data";
import { BellIcon, Chevron, CloseIcon, ExternalIcon, Logo, MenuIcon, SearchIcon, SWatermark, UserIcon } from "./Icons";
import A from "./A";

type Menu = "discover" | "subscriptions" | null;

export default function Header() {
  const [menu, setMenu] = useState<Menu>(null);
  const [support, setSupport] = useState(false);
  const [search, setSearch] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [drawerPanel, setDrawerPanel] = useState<"discover" | "subscriptions" | "support" | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";
  const theme = /^\/(contactus|help)/.test(pathname) ? "light" : /^\/(free-trial|offers\/student)/.test(pathname) ? "dark" : "photo";
  const minimal = pathname.startsWith("/offers/military");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setSupport(false);
        setSearch(false);
        setDrawer(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setMenu(null);
        setSupport(false);
        setSearch(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
  }, [drawer]);

  const toggle = (m: Menu) => {
    setSupport(false);
    setSearch(false);
    setMenu((cur) => (cur === m ? null : m));
  };

  const closeAll = () => {
    setMenu(null);
    setSearch(false);
  };

  const solid = menu !== null || search;

  return (
    <>
      <div className={`nav-overlay ${solid ? "is-open" : ""}`} onClick={closeAll} />
      <header
        ref={ref}
        className={`site-header theme-${theme} ${minimal ? "is-minimal" : ""} ${solid ? "is-solid" : ""}`}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) {
            setMenu(null);
            setSearch(false);
            setSupport(false);
          }
        }}
      >
        <nav className="nav-strip">
          <div className="nav-left">
            <A href="/" className="nav-logo" aria-label="SiriusXM">
              <Logo />
            </A>
            <ul className="nav-links">
              <li>
                <button
                  className={`nav-link ${menu === "discover" ? "is-active" : ""}`}
                  aria-expanded={menu === "discover"}
                  onClick={() => toggle("discover")}
                >
                  Discover
                </button>
              </li>
              <li>
                <A className="nav-link" href={nav.channelGuide.href}>
                  {nav.channelGuide.label}
                </A>
              </li>
              <li>
                <button
                  className={`nav-link ${menu === "subscriptions" ? "is-active" : ""}`}
                  aria-expanded={menu === "subscriptions"}
                  onClick={() => toggle("subscriptions")}
                >
                  Subscriptions
                </button>
              </li>
            </ul>
          </div>

          <div className="nav-right">
            <button
              className={`nav-icon-btn nav-search ${search ? "is-open" : ""}`}
              aria-label="Search"
              aria-expanded={search}
              onClick={() => {
                setMenu(null);
                setSupport(false);
                setSearch((s) => !s);
              }}
            >
              <SearchIcon />
            </button>
            <div className="nav-account">
              <button className="nav-icon-btn" aria-label="Notifications">
                <BellIcon />
              </button>
              <A className="nav-icon-btn" href="#" aria-label="Account">
                <UserIcon />
              </A>
            </div>
            <button className="nav-icon-btn nav-hamburger" aria-label="Menu" onClick={() => setDrawer(true)}>
              <MenuIcon />
            </button>
            <div className="nav-support">
              <button
                className={`nav-link nav-link-support ${support ? "is-open" : ""}`}
                aria-expanded={support}
                onClick={() => {
                  setMenu(null);
                  setSearch(false);
                  setSupport((s) => !s);
                }}
              >
                Help &amp; Support
              </button>
              {support && (
                <div className="support-popover" role="menu">
                  <A className="support-heading" href={nav.support.heading.href}>
                    {nav.support.heading.label}
                    <ExternalIcon />
                  </A>
                  <ul>
                    {nav.support.links.map((l) => (
                      <li key={l.label}>
                        <A href={l.href}>{l.label}</A>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <A className="btn btn-nav" href={nav.startListening.href}>
              {nav.startListening.label}
            </A>
          </div>
        </nav>

        <div className={`mega ${menu === "discover" ? "is-open" : ""}`} role="menu" aria-hidden={menu !== "discover"}>
          <div className="mega-inner">
            <div className="mega-cta">
              <p>{nav.discover.blurb}</p>
              <A className="btn btn-outline btn-sm-text" href={nav.discover.cta.href}>
                {nav.discover.cta.label}
              </A>
            </div>
            <div className="mega-list">
              {nav.discover.categories.map((c) => (
                <A key={c.title} className="mega-item" href={c.href}>
                  <span className="mega-item-title">{c.title}</span>
                  <span className="mega-item-images">
                    {c.images.map((img) => (
                      <img key={img} src={`/images/${img}.webp`} alt="" />
                    ))}
                  </span>
                </A>
              ))}
            </div>
            <A className="mega-tile" href={nav.discover.tile.href}>
              <img src={`/images/${nav.discover.tile.image}.webp`} alt="" />
              <span className="mega-tile-text">
                <span className="mega-tile-eyebrow">{nav.discover.tile.eyebrow}</span>
                <span className="mega-tile-title">{nav.discover.tile.title}</span>
              </span>
            </A>
          </div>
        </div>

        <div className={`mega ${menu === "subscriptions" ? "is-open" : ""}`} role="menu" aria-hidden={menu !== "subscriptions"}>
          <div className="mega-inner">
            <div className="mega-cta">
              <p>{nav.subscriptions.blurb}</p>
              <A className="btn btn-outline btn-sm-text" href={nav.subscriptions.cta.href}>
                {nav.subscriptions.cta.label}
              </A>
            </div>
            <div className="mega-list">
              {nav.subscriptions.links.map((l) => (
                <A key={l.title} className="mega-item" href={l.href}>
                  <span className="mega-item-title">{l.title}</span>
                </A>
              ))}
            </div>
            <div className="mega-promo">
              <h2>{nav.subscriptions.promo.title}</h2>
              <p>{nav.subscriptions.promo.body}</p>
              <A className="btn btn-promo" href={nav.subscriptions.promo.cta.href}>
                {nav.subscriptions.promo.cta.label}
              </A>
            </div>
          </div>
        </div>
        <div className={`search-panel ${search ? "is-open" : ""}`} role="dialog" aria-label="Search" aria-hidden={!search}>
          <div className="search-mobile-top">
            <p>Search</p>
            <button aria-label="Close search" onClick={() => setSearch(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className="search-inner">
            <div className="search-row">
              <label className="search-input-wrap">
                <SearchIcon />
                <input placeholder="What are you looking for?" aria-label="Search SiriusXM" maxLength={128} />
              </label>
              <button className="search-close" onClick={() => setSearch(false)}>
                Close
              </button>
            </div>
            <p className="search-label">Suggestions</p>
            <ul className="search-chips">
              {nav.search.suggestions.map((s) => (
                <li key={s}>
                  <button className="chip">{s}</button>
                </li>
              ))}
            </ul>
            <p className="search-heading">Explore what SiriusXM has to offer</p>
            <div className="search-grid">
              {nav.search.quickLinks.map((q) => (
                <A key={q.title} href={q.href} className="search-link">
                  <img src={`/icons/${q.icon}.svg`} alt="" />
                  <span>{q.title}</span>
                </A>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className={`drawer-backdrop ${drawer ? "is-open" : ""}`} onClick={() => setDrawer(false)} />
      <aside
        className={`drawer ${drawer ? "is-open" : ""}`}
        aria-hidden={!drawer}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) {
            setDrawer(false);
            setDrawerPanel(null);
          }
        }}
      >
        <div className="drawer-head">
          {drawerPanel ? (
            <button className="drawer-icon" aria-label="Back" onClick={() => setDrawerPanel(null)}>
              <Chevron dir="left" />
            </button>
          ) : (
            <span />
          )}
          <button
            className="drawer-icon"
            aria-label="Close"
            onClick={() => {
              setDrawer(false);
              setDrawerPanel(null);
            }}
          >
            <CloseIcon />
          </button>
        </div>

        {!drawerPanel && (
          <>
            <ul className="drawer-list">
              <li>
                <button onClick={() => setDrawerPanel("discover")}>
                  Discover <Chevron dir="right" />
                </button>
              </li>
              <li>
                <A href={nav.channelGuide.href}>{nav.channelGuide.label}</A>
              </li>
              <li>
                <button onClick={() => setDrawerPanel("subscriptions")}>
                  Subscriptions <Chevron dir="right" />
                </button>
              </li>
              <li>
                <button onClick={() => setDrawerPanel("support")}>
                  Help &amp; Support <Chevron dir="right" />
                </button>
              </li>
            </ul>
            <A className="btn btn-blue drawer-cta" href={nav.startListening.href}>
              {nav.startListening.label}
            </A>
            <div className="drawer-foot">
              <SWatermark className="drawer-watermark" />
              <div className="drawer-badges">
                <A href="#">
                  <img src="/icons/app-store.svg" alt="Get the SXM iOS app from the App Store" />
                </A>
                <A href="#">
                  <img src="/icons/google-play.svg" alt="Get the SXM Android app from the Play Store" />
                </A>
              </div>
            </div>
          </>
        )}

        {drawerPanel === "discover" && (
          <div className="drawer-panel">
            <p>{nav.discover.blurb}</p>
            {nav.discover.categories.map((c) => (
              <A key={c.title} className="mega-item" href={c.href}>
                <span className="mega-item-title">{c.title}</span>
                <span className="mega-item-images">
                  {c.images.map((img) => (
                    <img key={img} src={`/images/${img}.webp`} alt="" />
                  ))}
                </span>
              </A>
            ))}
            <A className="btn btn-outline btn-sm" href={nav.discover.cta.href}>
              {nav.discover.cta.label}
            </A>
          </div>
        )}
        {drawerPanel === "subscriptions" && (
          <div className="drawer-panel">
            <p>{nav.subscriptions.blurb}</p>
            {nav.subscriptions.links.map((l) => (
              <A key={l.title} className="mega-item" href={l.href}>
                <span className="mega-item-title">{l.title}</span>
              </A>
            ))}
            <A className="btn btn-outline btn-sm" href={nav.subscriptions.cta.href}>
              {nav.subscriptions.cta.label}
            </A>
          </div>
        )}
        {drawerPanel === "support" && (
          <div className="drawer-panel">
            <A className="support-heading" href={nav.support.heading.href}>
              {nav.support.heading.label}
              <ExternalIcon />
            </A>
            <ul className="drawer-support">
              {nav.support.links.map((l) => (
                <li key={l.label}>
                  <A href={l.href}>{l.label}</A>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </>
  );
}
