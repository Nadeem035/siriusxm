import { campaign, devices, footer, hero, offerCtas, promo, stars, trending, variety } from "@/app/data";
import { FacebookIcon, InstagramIcon, Logo, TiktokIcon, XIcon, YoutubeIcon } from "./Icons";
import A from "./A";

export function SectionHeading({ title, subtitle, children }: { title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <div className="section-heading">
      {children}
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="subhead">{subtitle}</p>}
    </div>
  );
}

function OfferButtons({ light = false }: { light?: boolean }) {
  return (
    <div className="cta-group">
      <div className="cta-buttons">
        <A className="btn btn-white" href={offerCtas.primary.href}>
          {offerCtas.primary.label}
        </A>
        <A className="btn btn-ghost-light" href={offerCtas.secondary.href}>
          {offerCtas.secondary.label}
        </A>
      </div>
      <p className={`legal-caption ${light ? "is-center" : ""}`}>
        See{" "}
        <A href="#pageOfferDetails">
          <b>Offer Details</b>
        </A>
        .
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <div className="hero-wrap">
      <section className="hero">
        <img className="hero-bg" src={hero.background} alt="" fetchPriority="high" />
        <div className="hero-content container">
          <div className="hero-text">
            <h1 className="hero-title">{hero.title}</h1>
            <p className="hero-sub">{hero.subtitle}</p>
            <OfferButtons />
          </div>
        </div>
        <img className="hero-mobile-img" src={hero.mobileImage} alt={hero.imageAlt} />
      </section>
      <div className="container">
        <p className="hero-credit">{hero.credit}</p>
      </div>
    </div>
  );
}

export function Campaign() {
  return (
    <section className="section">
      <div className="container">
        <div className="campaign" style={{ background: campaign.background }}>
          <div className="campaign-img" style={{ ["--fade" as string]: campaign.background }}>
            <img src={campaign.image} alt={campaign.imageAlt} />
          </div>
          <div className="campaign-text">
            <h3 className="campaign-title">{campaign.title}</h3>
            <p className="campaign-body">{campaign.body}</p>
            <div className="cta-buttons">
              <A className="btn btn-white" href={campaign.primary.href}>
                {campaign.primary.label}
              </A>
              <A className="btn btn-ghost-light btn-ghost-soft" href={campaign.secondary.href}>
                {campaign.secondary.label}
              </A>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Variety() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title={variety.title} subtitle={variety.subtitle} />
        <div className="cat-grid">
          {variety.categories.map((c) => (
            <A key={c.title} className="cat-card" href={c.href}>
              <div className="cat-images">
                {c.images.map((img) => (
                  <img
                    key={img.src}
                    className={c.round ? "is-round" : ""}
                    style={"bg" in img ? { background: img.bg } : undefined}
                    src={`/images/${img.src}.webp`}
                    alt={img.alt}
                  />
                ))}
              </div>
              <h3 className="cat-title">{c.title}</h3>
              <p className="cat-body">{c.body}</p>
            </A>
          ))}
        </div>
        <div className="center-cta">
          <A className="btn btn-outline" href={variety.cta.href}>
            {variety.cta.label}
          </A>
        </div>
      </div>
    </section>
  );
}

export function Stars() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title={stars.title} subtitle={stars.subtitle}>
          <div className="s-badge" role="img" aria-label="Only on SiriusXM">
            <img src="/icons/s-logo.svg" alt="" />
          </div>
        </SectionHeading>
        <div className="stars">
          {stars.items.map((s) => (
            <A key={s.name} className="star" href={s.href}>
              <img src={`/images/${s.image}.webp`} alt={s.name} style={{ background: s.bg }} />
              <span className="star-ch">{s.channel}</span>
              <span className="star-name">{s.name}</span>
              <span className="star-body">{s.body}</span>
            </A>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Trending() {
  const f = trending.featured;
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title={trending.title} />
        <div className="center-cta center-cta-tight">
          <A className="btn btn-outline" href={trending.cta.href}>
            {trending.cta.label}
          </A>
        </div>
        <div className="trend-group">
          <A className="trend-card trend-featured" href={f.href}>
            <div className="trend-media">
              <img src={`/images/${f.image}.webp`} alt={f.alt} />
            </div>
            <div className="trend-content">
              <h3 className="trend-title">{f.title}</h3>
              <p className="trend-body">{f.body}</p>
            </div>
          </A>
          <div className="trend-row">
            {trending.cards.map((c) => {
              const inner = (
                <>
                  <div className="trend-media">
                    <img src={`/images/${c.image}.webp`} alt={c.alt} />
                  </div>
                  <div className="trend-content">
                    <h3 className="trend-title">{c.title}</h3>
                    <div className="trend-body">{c.body}</div>
                  </div>
                </>
              );
              return c.href ? (
                <A key={c.title} className="trend-card is-link" href={c.href}>
                  {inner}
                </A>
              ) : (
                <div key={c.title} className="trend-card">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Devices() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title={devices.title} subtitle={devices.subtitle} />
        <div className="device-grid">
          {devices.items.map((d) => (
            <A key={d.title} className="device-card" href={devices.href}>
              <div className="device-icons">
                {d.icons.map((i) => (
                  <span key={i.src} className="device-icon">
                    <img src={`/icons/${i.src}.svg`} alt={i.alt} />
                  </span>
                ))}
              </div>
              <h3 className="device-title">{d.title}</h3>
              <p className="device-body">{d.body}</p>
            </A>
          ))}
        </div>
        <div className="center-cta">
          <A className="btn btn-outline" href={devices.cta.href}>
            {devices.cta.label}
          </A>
        </div>
      </div>
    </section>
  );
}

export function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="section-heading">
          <h2 className="h2">{promo.title}</h2>
          <p className="subhead">{promo.subtitle}</p>
        </div>
        <OfferButtons light />
      </div>
    </section>
  );
}

export function OfferDetails({ children }: { children?: React.ReactNode }) {
  if (children) {
    return (
      <section className="offer-details" id="pageOfferDetails">
        <div className="container">{children}</div>
      </section>
    );
  }
  return (
    <section className="offer-details" id="pageOfferDetails">
      <div className="container">
        <p>
          <b>OFFER DETAILS:</b> The subscription plan you choose will <b>AUTOMATICALLY RENEW</b> and you will be charged at then-current
          rates for that plan until you cancel. Credit card required. Applicable tax and other fees may apply. There are no refunds except
          as provided in our Customer Agreement. Cancel at least 24 hours prior to renewal; cancellation is effective at the end of your
          current billing period. <b>Please see our </b>
          <A href="#">
            <b>Customer Agreement</b>
          </A>
          <b> and </b>
          <A href="#">
            <b>Privacy Policy</b>
          </A>
          <b>
            {" "}
            at www.siriusxm.com for complete terms, our refund policy and how to cancel, which includes online methods or calling us at
            1-866-635-2349.
          </b>{" "}
          All fees, content and features are subject to change. This offer cannot be combined with any other and may be modified or
          terminated at any time. Channel lineup varies by package. Offer available to new subscribers and qualifying ESN/Device IDs as
          determined solely by SiriusXM.
        </p>
      </div>
    </section>
  );
}

export function Footer({ minimal = false }: { minimal?: boolean }) {
  const s = footer.social;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {minimal ? (
            <ul className="footer-minimal">
              <li>
                <A href="#">Register</A>
              </li>
              <li>
                <A href="#">Sign in</A>
              </li>
              <li>
                <A href="/help">Help &amp; Support</A>
              </li>
            </ul>
          ) : (
          <div className="footer-cols">
            {footer.columns.map((col) => (
              <div key={col.heading} className="footer-col">
                <span className="footer-heading">{col.heading}</span>
                <ul>
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <A href={href}>{label}</A>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          )}
          <div className="footer-apps">
            <div className="footer-badges">
              <A href={footer.appStore}>
                <img src="/icons/app-store.svg" alt="Get the SXM iOS app from the App Store" />
              </A>
              <A href={footer.googlePlay}>
                <img src="/icons/google-play.svg" alt="Get the SXM Android app from the Play Store" />
              </A>
            </div>
            <ul className="footer-social">
              <li>
                <A href={s.facebook} aria-label="Like us on Facebook">
                  <FacebookIcon />
                </A>
              </li>
              <li>
                <A href={s.instagram} aria-label="Follow us on Instagram">
                  <InstagramIcon />
                </A>
              </li>
              <li>
                <A href={s.tiktok} aria-label="Follow us on TikTok">
                  <TiktokIcon />
                </A>
              </li>
              <li>
                <A href={s.x} aria-label="Follow us on X">
                  <XIcon />
                </A>
              </li>
              <li>
                <A href={s.youtube} aria-label="Watch us on YouTube">
                  <YoutubeIcon />
                </A>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <nav className="footer-legal">
            <ul>
              {footer.legal.map(([label, href]) => (
                <li key={label}>
                  <A href={href}>
                    {label}
                    {label === "Your Privacy Choices" && <img src="/icons/privacy-options.svg" alt="" aria-hidden="true" />}
                  </A>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-brand">
            <A href="/" aria-label="SiriusXM">
              <Logo className="footer-logo" />
            </A>
            <p>{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
