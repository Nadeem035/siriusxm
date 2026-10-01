import type { Metadata } from "next";
import { Accordion } from "@/components/Blocks";
import { SectionHeading } from "@/components/Sections";

export const metadata: Metadata = { title: "Help Center | SiriusXM" };

const links = (items: string[]) => (
  <div className="acc-links">
    {items.map((q) => (
      <p key={q}>
        <a href="#">{q}</a>
      </p>
    ))}
  </div>
);

const topics = [
  {
    title: "Frequently Asked Questions",
    icon: "help-faq",
    open: true,
    content: links([
      "How do I send a signal to my radio?",
      "How do I transfer my service?",
      "I have two or more accounts. Can I combine them?",
      "How do I manage or cancel my service?",
      "FAQs for the T-Mobile SiriusXM On Us Offer",
      "How can I tell if a SiriusXM email, text message, or website is legitimate?",
      "Have questions about our All Music or All Access plan? We’re here to help.",
    ]),
  },
  {
    title: "Subscriptions & Accounts",
    icon: "help-subscriptions",
    content: links([
      "How do I manage or cancel my service?",
      "My subscription is no longer linked to a vehicle. What can I do?",
      "I want to change my subscription. What should I do?",
      "How do I make changes to my subscription package?",
      "How do I add my new vehicle to my existing account?",
      "Why and when does my subscription automatically renew? Will you notify me?",
      "How do I manage my contact preferences?",
      "Can I temporarily suspend my service?",
      "Can I combine accounts if I already have another trial subscription?",
      "How do I activate a SiriusXM trial in a vehicle equipped with a SiriusXM, XM, or Sirius satellite radio?",
      "I'm already a subscriber. Do I get a discount on additional subscription?",
      "What if I want SiriusXM in more than one vehicle?",
      "What are the benefits of using the Online Account Center?",
      "Is my trial subscription refundable?",
      "How do I opt in and out of communications from SiriusXM?",
      "What services and channels do I get with my trial subscription?",
      "How do I register my account so I can manage it online?",
      "I don't know my Online Account Center login. What can I do?",
      "How do I become a subscriber when my trial subscription ends?",
      "How do I find my account number?",
      "How will I know when my trial subscription is ending?",
      "Does my subscription automatically renew? Will you notify me?",
      "Profiles 2.0 Portal FAQs",
      "Can I listen to MLB® games online?",
      "Can I exchange my SiriusXM product?",
      "Why does the audio quality vary when I stream?",
      "Why do I hear a previous song/show ending when a new one begins?",
      "Can I get SiriusXM streaming service outside of the United States?",
      "What plans include live NFL games?",
      "Does returning a radio purchased with a plan cancel my SiriusXM subscription?",
      "Frequently Asked Questions About Your Privacy Rights",
    ]),
  },
  {
    title: "Billing & Payments",
    icon: "help-billing",
    content: links([
      "How do I pay my bill?",
      "What payment and billing options does SiriusXM provide?",
      "Do I have to pay a fee to replace my radio with another radio?",
      "How soon will my return be processed?",
      "Do I pay for shipping if I return a purchased item to SiriusXM?",
    ]),
  },
  {
    title: "My Radio",
    icon: "help-radio",
    content: links([
      "How do I send a signal to my radio?",
      "What happened to all my channels? I'm only getting Preview Channel now.",
      "How do I find my Radio ID (ESN or SID)?",
      "FAQs for SiriusXM in Lucid Vehicles",
    ]),
  },
  {
    title: "Streaming on the SiriusXM app",
    icon: "help-app",
    content: links([
      "How do I download and update the SiriusXM app?",
      "Can I listen to SiriusXM at home?",
      "How do I favorite a channel, show, or episode in the SiriusXM app?",
      "How can I use SiriusXM on televisions?",
      "How do I adjust my volume and mute audio in the SiriusXM app?",
      "Does SiriusXM offer any discounts to military personnel?",
      "How long can I keep downloaded shows on my device?",
      "How many times can I skip forward or rewind?",
      "Why does SiriusXM stop streaming after a while?",
      "Why can’t I download some on-demand content to my device?",
      "What happens if I disable my cookies?",
      "Does the SiriusXM app work with AirPlay on my Apple device?",
      "Do my settings save across SiriusXM’s online player and the app?",
    ]),
  },
];

export default function HelpPage() {
  return (
    <main className="light-page">
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Need help with something?"
            subtitle="For quick and easy access to the information you may be looking for, we've listed helpful answers and tips under each of the topics below."
          />
          <Accordion items={topics} />
          <div className="still-help">
            <p>
              <b>Still need help?</b>
            </p>
            <p>
              <a href="#">Search Help &amp; Support articles</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
