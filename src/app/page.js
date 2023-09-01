import {
  Navbar,
  Banner,
  Hero,
  Hero2,
  Hero3,
  Hero4,
  Hero5,
  Hero6,
} from "../components";

export default function Home() {
  return (
    <div>
      <Banner
        text1="Trained Aesop consultations are available to provide bespoke skin care advise."
        text2="Book a video consultation"
        className="bg-[#C2C2AF]"
      />
      <Banner
        text1="Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400"
        text2="+"
        className="bg-[#252525] text-[#FFFEF2] !py-3 "
      />
      <Navbar />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
    </div>
  );
}
