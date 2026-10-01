import type { Metadata } from "next";
import { Accordion, ContentCard } from "@/components/Blocks";
import { CallCenterToggle, Tabs } from "@/components/Interactive";
import A from "@/components/A";

export const metadata: Metadata = { title: "Contact Us | SiriusXM" };

const faqLinks = (
  <>
    <p>
      <a href="#">How do I send a signal to my radio?</a>
    </p>
    <p>
      <a href="#">How do I transfer my service?</a>
    </p>
    <p>
      <a href="#">I have two or more accounts. Can I combine them?</a>
    </p>
    <p>
      <a href="#">How do I manage or cancel my service?</a>
    </p>
    <p>
      Still have more questions? <A href="/help">Visit the help center</A>
    </p>
  </>
);

function ListenerCare() {
  return (
    <>
      <div className="section-heading contact-subheading">
        <h2 className="h3">Need help with something?</h2>
      </div>
      <Accordion items={[{ title: "Frequently Asked Questions", icon: "help-faq", open: true, content: <div className="acc-links">{faqLinks}</div> }]} />
      <div className="card-row contact-cards" style={{ ["--cols" as string]: 3 }}>
        <ContentCard
          c={{
            image: "contact-chat",
            alt: "Messaging with Harmony on a phone",
            title: "Chat with us",
            body: "If you’re unable to resolve your issue through the self-help links, we can assist you via online chat 24/7.",
          }}
        >
          <span className="chat-spacing">
            <button className="btn btn-blue" type="button">
              Chat now
            </button>
          </span>
          If you&apos;re having trouble accessing Chat, try turning off your ad-blocker or switch to another browser.
        </ContentCard>
        <ContentCard
          c={{
            image: "contact-call",
            alt: "Call Center for Help Center",
            title: "Call us",
            body: (
              <>
                <b>Call Center Hours:</b>
                <br />
                Mon – Sun: 8 am – 8 pm ET
              </>
            ),
          }}
        >
          <CallCenterToggle />
          <b>NOTE:</b> Please have your account number or radio ID (also called ESN or RID) handy. If you have previously contacted SiriusXM with
          an issue, and it hasn&apos;t been resolved to your satisfaction - we&apos;re here to help!
          <span className="cc-cta">
            <a href="#">Unresolved Issues</a>
          </span>
        </ContentCard>
        <ContentCard
          c={{
            image: "contact-email",
            alt: "Man at a laptop",
            title: "Have a suggestion or shout-out you want to make?",
            body: "Tell us what you think about our channels and shows, your overall site experience, and more. Our team is listening! Hearing from you helps us continue to make SiriusXM even better.",
          }}
        >
          <span className="cc-cta">
            <a href="#">Submit feedback</a>
          </span>
        </ContentCard>
      </div>
    </>
  );
}

function MediaContacts() {
  return (
    <div className="media-contacts">
      <h3 className="h3">News Media</h3>
      <p>
        Members of the media who have questions or need more information about SiriusXM, please contact: <a href="#">press@siriusxm.com</a>.
      </p>
      <h3 className="h3">Advertising</h3>
      <p>SiriusXM Satellite Radio...radio delivered in a whole new way:</p>
      <ul>
        <li>National reach — 100% coverage, coast-to-coast</li>
        <li>Exclusive content — Star personalities and power brands</li>
        <li>Creative ideas — Innovative messages and sponsorships</li>
        <li>Niche targeted — Reach your audience by demo, format, or lifestyle</li>
      </ul>
      <p>
        Are you interested in discussing advertising with SiriusXM? Email us at <a href="#">advertising@siriusxm.com</a>, and be sure to include
        your contact information, including your phone number.
      </p>
      <h3 className="h3">Careers</h3>
      <p>
        Interested in working for SiriusXM? Please see our <a href="#">Careers</a> section.
      </p>
      <h3 className="h3">Investor Relations</h3>
      <p>
        Interested in investment information for SiriusXM? <a href="#">Click Here</a> to reach our investor relations teams.
      </p>
      <h3 className="h3">Payment Address</h3>
      <p>Sirius XM Radio Inc.</p>
      <p>PO Box 71170</p>
      <p>Philadelphia, PA 19176-1170</p>
      <h3 className="h3">Returned Equipment Address</h3>
      <p>SiriusXM Satellite Radio-Returns</p>
      <p>300 Nixon Lane</p>
      <p>Edison, NJ 08837</p>
      <h3 className="h3">Mailing Address</h3>
      <p>SiriusXM</p>
      <p>P.O. Box 33174</p>
      <p>Detroit, MI 48232</p>
      <h3 className="h3">Prospective Supplier Registration</h3>
      <p>
        Interested in being a prospective supplier for Sirius XM? Click on the link below, create an account and complete the Prospective Supplier
        Registration form. Your information will be saved in our database for future consideration to an RFx Sourcing Event opportunity.
      </p>
      <p>
        <a href="#">SiriusXM Prospective Supplier Registration site</a>
      </p>
      <h3 className="h3">Record Labels and Recording Artists</h3>
      <p>Do you have a recording that you would like played on SiriusXM? Please submit your recording to:</p>
      <p>
        <b>Attn: Music Programming Department</b>
      </p>
      <p>SiriusXM</p>
      <p>1221 Avenue of the Americas</p>
      <p>New York, NY 10020</p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="light-page">
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h1 className="h2">Contact Us</h1>
          </div>
          <Tabs
            tabs={[
              { label: "Listener Care", content: <ListenerCare /> },
              { label: "Media & Other Contacts", content: <MediaContacts /> },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
