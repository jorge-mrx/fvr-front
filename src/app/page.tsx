'use client';
import Image from "next/image";

// Importa las imágenes como módulos
import image from "@/assets/newsGrid/1.jpg";
import NavBar from "@/components/navBar/NavBar";
import CertificationSection from "@/components/certificationSection/CertificationSection";

export default function Home() {
  return (
    <>
      <NavBar/>
      <CertificationSection/>
      <div style={{ padding: "1rem" }}></div>
    </>
  );
}