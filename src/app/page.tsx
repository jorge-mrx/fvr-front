'use client';
import Image from "next/image";
import NavBar from "@/components/navBar/NavBar";
import CertificationSection from "@/components/certificationSection/CertificationSection";
import MessageSection from "@/components/messageSection/MessageSection";
import MessageCards from "@/components/messageCards/MessageCards";
import WindowsGrid from "@/components/windowGrid/WindowGrid";

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
        leftText="Certification Services for Your Food Business"
        rightText="Transform your food-related enterprise with Food Veritas Register's expert certification services tailored for micro and small businesses in the food chain sector. We empower your company to meet industry standards of quality and safety, bolstering your credibility in the market."
        decoration="star"
      />
      <WindowsGrid/>

      <div style={{ padding: "20rem" }}></div>
    </>
  );
}
