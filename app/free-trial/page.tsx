import type { Metadata } from "next";
import { CenterHero, OfferLink } from "@/components/Blocks";
import { TrialPlanCard } from "@/components/PlanCards";
import { OfferDetails } from "@/components/Sections";

export const metadata: Metadata = { title: "Free Trial | SiriusXM" };

export default function FreeTrialPage() {
  return (
    <>
      <main>
        <CenterHero bg="/images/free-hero.webp" title="Start listening for Free" subtitle="with a new subscription. Offer Details below." />
        <section className="section section-tight-top">
          <div className="container">
            <div className="plan-grid">
              <TrialPlanCard
                name="Platinum"
                badge="CAR + APP"
                headline="3 months Free"
                intro={
                  <>
                    No credit card required. <OfferLink /> below.
                  </>
                }
                features={
                  <>

                  <li><b>In-car listening plus streaming</b> on the app</li>
                  <li><b>Ad-free music</b> curated by genre and decade</li>
                  <li><b>Live NFL, MLB®, NBA, NCAA®, NHL®</b>, and NASCAR® play-by-play, plus sports talk</li>
                  <li><b>Original talk,</b> exclusive comedy, news from every angle</li>
                  <li><b>Popular podcast series,</b> including SiriusXM originals and more</li>
                  <li><b>SiriusXM video</b> of in-studio interviews and performances</li>
                  <li><b>Discounted SiriusXM merch</b></li>
                  <li><b>Nugs.net concerts</b></li>
                
                  </>
                }
                price={<b>3 months Free</b>}
                cta="Get Platinum"
              />
              <TrialPlanCard
                name="All Access (App Only)"
                badge="APP ONLY"
                headline="3 months Free"
                intro={
                  <>
                    Then $11.99/mo. New subscribers only. Cancel online. <OfferLink /> below.
                  </>
                }
                features={
                  <>

                  <li><b>Listening on your phone,</b> speakers, TV, and other smart devices</li>
                  <li><b>Ad-free music</b> curated by genre and decade</li>
                  <li><b>Live NFL, MLB®, NBA, NCAA®, NHL®,</b> and NASCAR® play-by-play, plus sports talk</li>
                  <li><b>Original talk,</b> exclusive comedy, news from every angle</li>
                  <li><b>Popular podcast series,</b> including SiriusXM originals and more</li>
                
                  </>
                }
                price={
                  <>
                    <b>3 months Free</b> then $11.99/mo.
                  </>
                }
                cta="Get All Access (App Only)"
              />
            </div>
          </div>
        </section>
      </main>
      <OfferDetails>
        <p>
          <b>OFFER DETAILS FOR PLATINUM PACKAGE:</b> Your trial subscription will stop at the end of the stated trial period unless you decide to
          purchase a new plan. <b>Please see our </b>
          <a href="#">
            <b>Customer Agreement</b>
          </a>
          <b> and </b>
          <a href="#">
            <b>Privacy Policy</b>
          </a>
          <b> for complete terms and how to cancel, which includes online methods or calling us at 1-866-635-2349. </b>By registering for a trial
          subscription, SiriusXM may contact you at the registration information provided with special offers from time to time. You may manage
          your contact preferences through your online account. All fees, content and features are subject to change. This offer cannot be combined
          with any other and may be modified or terminated at any time. Channel lineup varies by package. This offer is available only on qualifying
          inactive radios as determined solely by SiriusXM.
        </p>
        <p>
          <b>OFFER DETAILS FOR ALL ACCESS (APP ONLY) PACKAGE:</b> Subscribe to the All Access (App Only) plan and get your first 3 months for $0.00.
          Credit card required. After your promotional term ends, your plan will <b>AUTOMATICALLY RENEW</b> every month and you will be charged at
          the then-current rates (currently $11.99/month), unless and until you cancel. Applicable tax and other fees may apply. There are no refunds
          except as provided in our Customer Agreement. Cancel at least 24 hours prior to renewal; cancellation is effective at the end of your
          current billing period. <b>Please see our </b>
          <a href="#">
            <b>Customer Agreement</b>
          </a>
          <b> for complete terms and how to cancel, which includes online methods or calling us at 1-866-635-2349.</b> All fees, content and
          features are subject to change. This offer cannot be combined with any other and may be modified or terminated at any time. Channel lineup
          varies by package. Offer available to new and eligible returning subscribers.
        </p>
      </OfferDetails>
    </>
  );
}
