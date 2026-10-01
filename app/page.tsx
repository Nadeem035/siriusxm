import VideoCarousel from "@/components/VideoCarousel";
import ChannelMarquee from "@/components/ChannelMarquee";
import { Campaign, Devices, Hero, OfferDetails, Promo, Stars, Trending, Variety } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Campaign />
        <Variety />
        <VideoCarousel />
        <Stars />
        <ChannelMarquee />
        <Trending />
        <Devices />
        <Promo />
      </main>
      <OfferDetails />
    </>
  );
}
