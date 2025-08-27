import React from "react";
import Image from "next/image";
import styles from "./MessageSection.module.css";

// Este adorno siempre será fijo
import publicCointsin from "@/assets/decors/double-line.svg";

// Opciones variables
import star from "@/assets/decors/star.svg";
import confeto from "@/assets/decors/confeto.svg";
import curvyArrow from "@/assets/decors/green-curve-shape-easy.svg";

interface MessageSectionProps {
  leftText: string;
  rightText: string;
  decoration?: "star" | "confeto" | "curvy-arrow"; // Opciones
}

const MessageSection: React.FC<MessageSectionProps> = ({ leftText, rightText, decoration }) => {
  const getDecoration = () => {
    switch (decoration) {
      case "star":
        return star;
      case "confeto":
        return confeto;
      case "curvy-arrow":
        return curvyArrow;
      default:
        return null;
    }
  };

  const selectedDecoration = getDecoration();

  return (
    <section className={styles.wrapper}>
      <div className={styles.leftCol}>
        <h2 className={styles.title}>
          {leftText}
          {/* Este adorno siempre está */}
          <span className={styles.decorationLeft}>
            <Image
              src={publicCointsin}
              alt="Decoration under Unlock"
              className={styles.decorImage}
            />
          </span>
          {/* Decoración variable */}
          {selectedDecoration && (
            <span className={styles.decorationRight}>
              <Image
                src={selectedDecoration}
                alt={`Decoration ${decoration}`}
                className={styles.decorImage}
              />
            </span>
          )}
        </h2>
      </div>
      <div className={styles.rightCol}>
        <p className={styles.text}>{rightText}</p>
      </div>
    </section>
  );
};

export default MessageSection;
