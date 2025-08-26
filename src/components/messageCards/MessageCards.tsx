import React from "react";
import Image from "next/image";
import styles from "./MessageCards.module.css";

// Íconos verdes que vas a pasar como .svg (puedes ajustarlos al path correcto)
import swirlIcon from "@/assets/decors/swirl.svg";
import globeIcon from "@/assets/decors/globe.svg";
import targetIcon from "@/assets/decors/arrow.svg";

// Ícono lupa
import searchIcon from "@/public/icons/search.svg";

const MessageCards: React.FC = () => {
  return (
    <section className={styles.cardsWrapper}>
      {/* Card 1 */}
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h3 className={styles.title}>
            Our certification services{" "}
            <span className={styles.highlight}>minimize stress</span> and
            streamline success
          </h3>
          <p className={styles.text}>
            We provide clear guidance at every step, from eligibility
            assessments to documentation submissions, ensuring your path to
            certification is smooth.
          </p>
        </div>
        <div className={styles.cardFooter}>
          <Image src={swirlIcon} alt="Decoration swirl" className={styles.icon} />
          <button className={styles.searchButton}>
            <Image src={searchIcon} alt="Search" />
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <Image src={globeIcon} alt="Globe decoration" className={styles.icon} />
          <button className={styles.searchButton}>
            <Image src={searchIcon} alt="Search" />
          </button>
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.title}>
            Connect with a network of{" "}
            <span className={styles.highlight}>quality-focused businesses</span>{" "}
            and boost your credibility
          </h3>
          <p className={styles.text}>
            Join Food Veritas Register to secure your certification and open
            doors to new markets and build customer trust.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h3 className={styles.title}>
            Achieve excellence with{" "}
            <span className={styles.highlight}>comprehensive support</span>{" "}
            throughout your journey
          </h3>
          <p className={styles.text}>
            With Food Veritas Register, maintain quality and safety in your food
            business amidst the uncertainty of certification requirements.
          </p>
        </div>
        <div className={styles.cardFooter}>
          <Image src={targetIcon} alt="Target decoration" className={styles.icon} />
          <button className={styles.searchButton}>
            <Image src={searchIcon} alt="Search" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MessageCards;
