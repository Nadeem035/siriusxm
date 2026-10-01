import type { Metadata } from "next";
import { CardRow } from "@/components/Blocks";
import { Devices, OfferDetails, SectionHeading } from "@/components/Sections";
import A from "@/components/A";
import { somethingGood } from "../shared";

export const metadata: Metadata = { title: "Student Discount | SiriusXM" };

export default function StudentPage() {
  return (
    <>
      <main>
        <section className="split-hero">
          <div className="container split-hero-inner">
            <div className="split-hero-text">
              <h1 className="hero-title">SiriusXM for students</h1>
              <p className="hero-sub">
                Currently enrolled? Check out our Student Streaming subscription offer. $1 for 3 months, then $4/mo. <b>Offer Details</b> below.
              </p>
              <A className="btn btn-white" href="#">
                Get Student Streaming
              </A>
            </div>
            <div className="split-hero-media">
              <img
                src="/images/student-hero.webp"
                alt="Man holding phone showing SiriusXM App with Hip Hop Nation, Tik Tok Radio and SiriusXM FLY"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>
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
          <b>OFFER DETAILS:</b> Eligible Students (defined below) may activate a Student Streaming Platinum plan and pay $1.00 for their first 3
          months. Credit card required. After your promotional term ends, your plan will <b>AUTOMATICALLY RENEW</b> every month and you will be
          charged at then-current student rate (currently $4.00/month), unless and until you cancel. The student plan requires eligibility
          verification and annual re-verification in order to maintain the student rate. Your eligibility will be verified upon initial enrollment
          and then every twelve (12) months thereafter to continue receiving the student rate.{" "}
          <b>
            If you fail re-verification, either because you are no longer an Eligible Student or fail to re-verify your enrollment status at the end
            of any 12-month period, you will no longer be eligible for the student rate and your subscription will automatically renew at the
            then-current full-priced monthly rate for (currently $11.99/month).
          </b>{" "}
          Applicable tax and other fees may apply. There are no refunds except as provided in our Customer Agreement. Cancel at least 24 hours prior
          to renewal; cancellation is effective at the end of your current billing period. <b>Please see our </b>
          <a href="#">
            <b>Customer Agreement</b>
          </a>
          <b> for complete terms and how to cancel, which includes online methods or calling us at 1-866-635-2349.</b> All fees, content and
          features are subject to change. This offer is available online only and cannot be combined with any other and may be modified or
          terminated at any time. Channel lineup varies by package.
        </p>
        <p>
          To qualify for this student plan, you must be at least 18 years of age and currently enrolled in a United States based, degree granting,
          accredited school of higher education (an “Eligible Student”). Eligible Students who currently have an active paid streaming subscription
          may contact us at the phone number above for instructions on how to change their subscription to this streaming student plan.
        </p>
        <p>
          We utilize SheerID Inc. (“SheerID”), a third-party verification service to verify your student eligibility which includes collecting and
          processing your name, educational institution, email address, and date of birth. In some cases, SheerID may request additional
          documentation to establish your enrollment, such as a school-issued ID, class schedule, transcript, registration, or tuition receipt. You
          are providing your information for verification to SheerID which will be subject to the terms of SheerID’s Privacy Policy available at{" "}
          <a href="#">www.sheerid.com/privacy-policy/</a> and such information may be shared and used by SiriusXM in accordance with its{" "}
          <a href="#">Privacy Policy</a>. You acknowledge and agree that SiriusXM and SheerID may process, share and use your information consistent
          with the terms of each party’s respective Privacy Policies.
        </p>
        <p>
          SiriusXM reserves the right, consistent with our Customer Agreement, to change the rate charged for the student plan, limit the duration of
          Student Eligibility, or to modify, suspend or cease offering this plan at any time in its sole discretion. In the event SiriusXM ceases to
          offer the student plan, SiriusXM is under no obligation to permit any further subscriptions to this plan. Further SiriusXM may terminate or
          suspend your access to the student plan any time including for any actual or suspected unauthorized use of the service or SiriusXM may in
          its sole discretion request re-verification of a student’s eligibility at any time if it suspects any individual to be acting in violation
          of our Customer Agreement or these offer terms. If SiriusXM suspends your subscription access, you agree that SiriusXM will have no
          liability to or responsibility to you and SiriusXM will not refund any amounts that you have already paid, to the fullest extent permitted
          under applicable law. SiriusXM’s failure to enforce any terms of this program will not constitute a waiver of that provision.
        </p>
      </OfferDetails>
    </>
  );
}
