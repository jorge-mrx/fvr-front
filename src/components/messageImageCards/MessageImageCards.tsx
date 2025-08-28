import React from "react";
import Image from "next/image";
import styles from "./MessageImageCards.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// 👉 Ejemplo de imagen importada para la tarjeta 2
import img1 from "@/assets/messageImageCards/1.webp";
import img2 from "@/assets/messageImageCards/2.avif";
import img3 from "@/assets/messageImageCards/3.webp";

const MessageImageCards: React.FC = () => {
  return (
    <section className={styles.cardsWrapper}>
      {/* Card 1 */}
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Image
            src={img1.src}
            alt="Card 1 top"
            fill
            className={styles.image}
          />
        </div>
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
          <button className={styles.searchButton}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Image
            src={img2.src}
            alt="Card 2 top"
            fill
            className={styles.image}
          />
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
        <div className={styles.cardFooter}>
          <button className={styles.searchButton}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Image
            src={img3.src}
            alt="Card 3 top"
            fill
            className={styles.image}
          />
        </div>
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
          <button className={styles.searchButton}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MessageImageCards;
