import type { Metadata } from "next";
import { CardRow, CenterHero } from "@/components/Blocks";
import { StickyBar } from "@/components/Interactive";
import { Devices, OfferDetails, SectionHeading } from "@/components/Sections";
import A from "@/components/A";
import { somethingGood } from "../shared";

export const metadata: Metadata = { title: "Military Discount | SiriusXM" };

export default function MilitaryPage() {
  return (
    <>
      <main>
        <StickyBar text="Thanks for your service! Enjoy 25% off a SiriusXM subscription with our military discount." cta="Get started" href="#" primary />
        <CenterHero
          bg="/images/military-hero.webp"
          title="Our salute to the military"
          subtitle="Save 25% with our military discount for eligible military personnel, spouses, and dependents—including veterans, retirees, active duty, and reserve."
        >
          <div className="center-hero-cta">
            <A className="btn btn-white" href="#">
              Get started
            </A>
            <p className="legal-caption is-center">
              Credit Card Required. <b>Offer Details </b>below.
            </p>
          </div>
        </CenterHero>
        <section className="section">
          <div className="container">
            <SectionHeading title="There's always something good on SiriusXM" />
            <CardRow cards={somethingGood} />
          </div>
        </section>
        <Devices />
      </main>
      <OfferDetails>
        <p>
          <b>OFFER DETAILS:</b> Activate an eligible package and plan and you will save 25% off our current full price rate for the life of the
          subscription. Fees and taxes apply. The subscription plan you choose will <b>automatically renew</b> thereafter, and you will be charged
          according to your chosen payment method at 25% off our then-current rates.{" "}
          <b>
            Please see our Customer Agreement at www.siriusxm.com for complete terms and how to cancel, which includes calling us at 1-866-635-2349.
          </b>{" "}
          All fees and programming subject to change. This offer cannot be combined with any other and may be modified, suspended or cancelled at any
          time. Offer available only to eligible military personnel, spouses and dependents, including Veterans, Retirees, Active Duty and Reserve.
          Eligibility subject to review of any required documentation.
        </p>
      </OfferDetails>
    </>
  );
}
