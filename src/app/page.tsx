'use client';
import Image from "next/image";

// Importa las imágenes como módulos
import image from "@/assets/newsGrid/1.jpg";
import NavBar from "@/components/navBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar/>
      HOLA
      <div style={{ padding: "1rem" }}></div>
    </>
  );
}