import type { Metadata } from "next";
import { Accordion, CenterHero, OfferLink, WidePlan, type Card } from "@/components/Blocks";
import { CardCarousel, StickyBar } from "@/components/Interactive";
import { InCarPlanCard } from "@/components/PlanCards";
import { OfferDetails, SectionHeading } from "@/components/Sections";

export const metadata: Metadata = { title: "Packages, Plans & Price | SiriusXM" };

const musicTiles = [
  { src: "ch-hits-1", alt: "SiriusXM Hits 1" },
  { src: "ch-alt-nation", alt: "Alt Nation" },
  { src: "ch-the-highway", alt: "The Highway" },
  { src: "nav-hip-hop-nation", alt: "Hip-Hop Nation" },
  { src: "ch-80s-on-8", alt: "80s on 8" },
];

const accessTiles = [
  { src: "ch-mlb-network", alt: "MLB Network Radio" },
  { src: "ch-espn-radio", alt: "ESPN Radio" },
  { src: "ch-mad-dog", alt: "Mad Dog Sports Radio" },
  { src: "ch-pga-tour", alt: "SiriusXM PGA TOUR Radio" },
  { src: "ch-college-sports", alt: "College Sports Radio" },
  { src: "ch-nascar", alt: "SiriusXM NASCAR Radio" },
  { src: "ch-fox-news", alt: "FOX News Channel" },
  { src: "ch-ms-now", alt: "MS NOW" },
  { src: "ch-cnn", alt: "CNN" },
  { src: "ch-progress", alt: "SiriusXM Progress" },
  { src: "ch-potus", alt: "POTUS Politics" },
  { src: "ch-patriot", alt: "SiriusXM Patriot" },
  { src: "ch-radio-andy", alt: "Radio Andy" },
  { src: "nav-conan", alt: "Conan O'Brien Radio" },
  { src: "ch-kevin-hart-lol", alt: "Kevin Hart's LOL Radio" },
  { src: "ch-faction-talk", alt: "Faction Talk" },
  { src: "nav-howard-100", alt: "Howard 100" },
  { src: "ch-joel-osteen", alt: "Joel Osteen Radio" },
  ...musicTiles,
];

const originals: Card[] = [
  {
    image: "orig-unwell",
    alt: "Unwell on air with Alex Cooper",
    eyebrow: "MUSIC & TALK",
    title: "Get your fill of Unwell",
    body: (
      <>
        Tap into two new SiriusXM Channels with live shows featuring Alex Cooper&apos;s signature mix of bold conversation, relatable storytelling,
        and trend-defining music picks.
        <br />
        <b>Unwell Music (CH 3) &amp; Unwell On Air (Streaming)</b>
      </>
    ),
  },
  {
    image: "orig-conan",
    alt: "Stand-Up on CONAN",
    eyebrow: "COMEDY",
    title: "Stand-Up on CONAN with Laurie Kilmartin",
    body: "Laurie plays stand-up sets from Conan O'Brian's TV shows, and shares her behind-the scenes expertise (CH 104).",
  },
  {
    image: "orig-john-mayer",
    alt: "John Mayer",
    eyebrow: "MUSIC",
    title: "Life with John Mayer",
    body: "Tune in for an unparalleled music experience, featuring a handpicked mix of his favorite music, collaborations, and never-before-heard material (CH 14).",
  },
  {
    image: "orig-tinx",
    alt: "It's Me Tinx Live",
    eyebrow: "TALK",
    title: "It’s Me, Tinx Live",
    body: "The “big sister” of TikTok dives into all the hot topics and burning questions you want to hear about, as well as her satirical takes on pop culture (CH 102).",
  },
  {
    image: "orig-stephen-a",
    alt: "Stephen A Smith",
    eyebrow: "SPORTS",
    title: "Stephen A. live and unfiltered",
    body: "Every debate, every hot take, every moment that gets people talking. Hear Stephen A. live on Mad Dog Sports Radio (CH 82).",
  },
];

const faqs = [
  {
    title: "What is the benefit of a plan that includes SiriusXM in-car service?",
    open: true,
    content: (
      <p>
        With SiriusXM in-car service, you can tune in to your favorite channels and enjoy quality audio coast to coast in the 48 contiguous United
        States, the District of Columbia, and Puerto Rico (with some limitations).
      </p>
    ),
  },
  {
    title: "What are the benefits of streaming on the SiriusXM app?",
    content: (
      <p>
        Besides providing great flexibility in how you choose to listen, the SiriusXM app gives you even more exclusive content to explore,
        including streaming-only channels, podcasts, and SiriusXM video. To listen in your car with a streaming-only subscription, you’ll need to
        connect your phone to your car stereo or use Apple Car Play® or Android Auto.
      </p>
    ),
  },
  {
    title: "Which plans let me listen to SiriusXM on my streaming devices?",
    content: (
      <>
        <p>
          All our popular plans include streaming with the SiriusXM app. If you prefer listening to SiriusXM exclusively on your phone and other
          smart home and mobile devices, you have the option of choosing a streaming-only plan. However, if you choose a plan that provides
          SiriusXM in-car service, you also get the SiriusXM app. Learn more about all the ways to listen with the SiriusXM app.
        </p>
        <a className="acc-cta" href="#">
          View Ways to Listen
        </a>
      </>
    ),
  },
  {
    title: "How do I know the plan I choose contains the programming I want?",
    content: (
      <>
        <p>
          To learn more about what’s included in our All Access plan, as well as our All Music plan (including optional Sports, Talk, and News
          add-ons), check out the full list of available channels.
        </p>
        <a className="acc-cta" href="#">
          View Available Channels
        </a>
      </>
    ),
  },
  {
    title: "What other subscriptions are available?",
    content: (
      <>
        <p>We have plans for a variety of listeners. You can explore additional subscription options on our More Plans page.</p>
        <a className="acc-cta" href="#">
          View More Plans
        </a>
      </>
    ),
  },
];

export default function ChoosePlanPage() {
  return (
    <>
      <main>
        <CenterHero
          bg="/images/plans-hero.webp"
          size="h2"
          title="We’re all about what YOU want to hear"
          subtitle="Music, Sports, News, Talk. Our plans let you choose the variety you're looking for—and where you want to listen."
        />

        <section className="section" id="plans">
          <div className="container">
            <div className="plans-intro">
              <h2 className="h2">Our popular in-car plans</h2>
              <p>
                Includes radio service and listening with the SiriusXM app on your devices. Subscribe now and get your first <b>3 months for $1</b>.
                <br />
                See <OfferLink />.
              </p>
            </div>
            <div className="plan-grid">
              <InCarPlanCard
                name="All Music"
                badge="CAR + APP"
                accent="#6900ff"
                onAccent="#fff"
                description="Curated by genre, decade, artist, and mood"
                addOns={[
                  { name: "Sports", price: 8 },
                  { name: "News", price: 5 },
                  { name: "Talk", price: 5 },
                ]}
                basePrice={11.99}
                cta="Get All Music"
                tiles={musicTiles}
                tilesLabel="View popular add-on channels"
              />
              <InCarPlanCard
                name="All Access"
                badge="CAR + APP"
                accent="#31c8ff"
                onAccent="#000"
                description={
                  <>
                    <span>Everything we offer:</span>
                    <span>
                      <b>Ad-free music</b> curated by genre, decade, artist, and mood
                    </span>
                    <span>
                      <b>Live NFL, MLB®, NBA, NHL®</b>, and college games, plus NASCAR®, PGA TOUR, and more
                    </span>
                    <span>
                      <b>Premium sports talk</b>, including analysis, predictions, and fantasy sports
                    </span>
                    <span>
                      <b>World and national news</b> plus politics and issues
                    </span>
                    <span>
                      <b>Celebrity-hosted talk shows</b> and comedy
                    </span>
                    <span>
                      <b>Exclusive video</b> of in-studio interviews and performances
                    </span>
                  </>
                }
                basePrice={25.99}
                cta="Get All Access"
                tiles={accessTiles}
                tilesLabel="View popular All Access channels"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2 className="h3">The sports plan for the biggest fans</h2>
            </div>
            <WidePlan
              accent="#0072ec"
              textOnAccent="#fff"
              image="plans-sports-pass"
              imageAlt="Sports Pass Channels"
              title="SiriusXM Sports Pass"
              body={
                <>
                  Live games, league coverage, national and local sports talk—all in one place. See <OfferLink />.
                </>
              }
              price={
                <>
                  <b>1 month Free </b>then only $5/mo.
                </>
              }
              cta="Get SiriusXM Sports Pass"
            />
          </div>
        </section>

        <section className="section" id="streaming">
          <div className="container">
            <div className="section-heading">
              <h2 className="h3">Want streaming only?</h2>
            </div>
            <WidePlan
              accent="#ffd213"
              textOnAccent="#000"
              image="plans-phones"
              imageAlt="SiriusXM app on phones"
              title="All Access (App Only)"
              body={
                <>
                  Get everything we offer. Listen exclusively on your home and mobile devices. See <OfferLink />.
                </>
              }
              price={
                <>
                  <b>$1 for 3 months </b>then $11.99/mo.
                </>
              }
              cta="Get All Access (App Only)"
            />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading title="SiriusXM Originals" subtitle="New and trending originals. Only on SiriusXM." />
            <CardCarousel cards={originals} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2 className="h3">You&apos;ve got questions?</h2>
              <p className="subhead">We&apos;ve got answers.</p>
            </div>
            <Accordion items={faqs} />
          </div>
        </section>

        <StickyBar text="Subscribe now for $1 for 3 months!" cta="Jump to plans" href="#plans" />
      </main>
      <OfferDetails>
        <p>
          <b>OFFER DETAILS:</b> The subscription plan you choose will <b>AUTOMATICALLY RENEW</b> and you will be charged at then-current rates for
          that plan until you cancel. Credit card required. Applicable tax and other fees may apply. There are no refunds except as provided in our
          Customer Agreement. Cancel at least 24 hours prior to renewal; cancellation is effective at the end of your current billing period.{" "}
          <b>Please see our </b>
          <a href="#">
            <b>Customer Agreement</b>
          </a>
          <b> and </b>
          <a href="#">
            <b>Privacy Policy</b>
          </a>
          <b> for complete terms, our refund policy and how to cancel, which includes online methods or calling us at 1-866-635-2349.</b> All fees,
          content and features are subject to change. This offer cannot be combined with any other and may be modified or terminated at any time.
          Channel lineup varies by package. Offer available to new subscribers and qualifying ESN/Device IDs as determined solely by SiriusXM.
        </p>
      </OfferDetails>
    </>
  );
}
