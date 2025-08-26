'use client';
import Image from "next/image";

// Importa las imágenes como módulos
import image from "@/assets/newsGrid/1.jpg";
import NavBar from "@/components/navBar/NavBar";
import CertificationSection from "@/components/certificationSection/CertificationSection";
import MessageSection from "@/components/messageSection/MessageSection";
import MessageCards from "@/components/messageCards/MessageCards";

export default function Home() {
  return (
    <>
      <NavBar/>
      <div style={{ padding: "1rem" }}></div>
      <CertificationSection/>
      <div style={{ padding: "1rem" }}></div>
      <MessageSection
      leftText="Unlock Your Food Business Potential with Certification"
      rightText="Certification can elevate your brand's reputation and ensure compliance with industry regulations, helping you stand out in the crowded food marketplace."
      />
      <div style={{ padding: "3rem" }}></div>
      <MessageCards/>
      <div style={{ padding: "20rem" }}></div>
    </>
  );
}