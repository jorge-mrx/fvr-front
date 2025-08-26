import React from "react";
import Image from "next/image";
import styles from "./MessageCards.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // 👈 IMPORTA AQUÍ
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// Íconos verdes decorativos
import swirlIcon from "@/assets/decors/swirl.svg";
import globeIcon from "@/assets/decors/globe.svg";
import targetIcon from "@/assets/decors/arrow.svg";

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
          <div className={styles.searchBox}>
            <button className={styles.searchButton}>
                <FontAwesomeIcon icon={faSearch} /> {/* 👈 AQUÍ */}
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <Image src={globeIcon} alt="Globe decoration" className={styles.icon} />
          <div className={styles.searchBoxTop}>
            <button className={styles.searchButton}>
                <FontAwesomeIcon icon={faSearch} /> {/* 👈 AQUÍ */}
            </button>
          </div>
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
          <div className={styles.searchBox}>
            <button className={styles.searchButton}>
                <FontAwesomeIcon icon={faSearch} inverse />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageCards;
