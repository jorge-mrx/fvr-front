import React from "react";
import Image from "next/image";
import styles from "./MessageSection.module.css";

import publicCointsin from "@/assets/decors/double-line.svg";
import greenCurve from "@/assets/decors/green-curve-shape-easy.svg";

interface MessageSectionProps {
  leftText: string;
  rightText: string;
}

const MessageSection: React.FC<MessageSectionProps> = ({ leftText, rightText }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.leftCol}>
        <h2 className={styles.title}>
          {leftText}
          <span className={styles.decorationLeft}>
            <Image
              src={publicCointsin}
              alt="Decoration under Unlock"
              className={styles.decorImage}
            />
          </span>
          {/* Decoración final */}
          <span className={styles.decorationRight}>
            <Image
              src={greenCurve}
              alt="Decoration at end of Certification"
              className={styles.decorImage}
            />
          </span>
        </h2>
      </div>
      <div className={styles.rightCol}>
        <p className={styles.text}>{rightText}</p>
      </div>
    </section>
  );
};

export default MessageSection;
