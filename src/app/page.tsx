'use client';
import Image from "next/image";
import NavBar from "@/components/navBar/NavBar";
import CertificationSection from "@/components/certificationSection/CertificationSection";
import MessageSection from "@/components/messageSection/MessageSection";
import MessageCards from "@/components/messageCards/MessageCards";
import WindowsGrid from "@/components/windowGrid/WindowGrid";
import MessageImageCards from "@/components/messageImageCards/MessageImageCards";

export default function Home() {
  return (
    <>
      <NavBar />
      <div style={{ padding: "1rem" }}></div>
      <CertificationSection />
      <div style={{ padding: "1rem" }}></div>
      
      <MessageSection
        leftText="Unlock Your Food Business Potential with Certification"
        rightText="Certification can elevate your brand's reputation and ensure compliance with industry regulations, helping you stand out in the crowded food marketplace."
        decoration="curvy-arrow"
      />
      
      <div style={{ padding: "3rem" }}></div>
      <MessageCards />
      <div style={{ padding: "3rem" }}></div>
      <MessageSection
        leftText="Why Choose Food Veritas Register?"
        rightText="Elevate your food business with Food Veritas Register's specialized certification services tailored for micro and small enterprises in the food chain sector. Our mission is to enhance your brand's credibility while ensuring compliance with industry standards, so your products can be recognized for quality and safety."
        decoration="star"
      />
      <WindowsGrid/>
      <div style={{ padding: "18rem"}}></div>
      <MessageSection
        leftText="Certification Services for Your Food Business"
        rightText="Transform your food-related enterprise with Food Veritas Register's expert certification services tailored for micro and small businesses in the food chain sector. We empower your company to meet industry standards of quality and safety, bolstering your credibility in the market."
        decoration="star"
      />
      <div style={{ padding: "3rem" }}></div>
      <MessageImageCards/>
      <div style={{ padding: "20rem" }}></div>
    </>
  );
}
