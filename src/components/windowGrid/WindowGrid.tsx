import React from "react";
import Image from "next/image";
import styles from "./WindowGrid.module.css";

import orangeShape from "@/assets/decors/choose-orange-shape.svg";
import backgroundImage from "@/assets/decors/istockphoto-2167802391-1024x1024.jpg";

const WindowsGrid: React.FC = () => {
  const bg = backgroundImage.src; // usamos el import real

  return (
    <section className={styles.wrapper}>
      {/* Adorno en esquina */}
      <Image
        src={orangeShape}
        alt="Orange Decoration"
        className={styles.orangeShape}
      />

      <div className={styles.grid}>
        {/* Fila 1 */}
        <div
          className={`${styles.window} ${styles.imgWindow}`}
          style={{ backgroundImage: `url(${bg})`, backgroundPosition: "15% 25%" }}
        />
        <div className={`${styles.window} ${styles.textWindow}`}>
          <h3>2,500</h3>
          <p>Certified Food Businesses</p>
        </div>

        {/* Fila 2 */}
        <div
          className={`${styles.window} ${styles.imgWindow}`}
          style={{ backgroundImage: `url(${bg})`, backgroundPosition: "50% 20%" }}
        />
        <div className={`${styles.window} ${styles.textWindow}`}>
          <h3>200+</h3>
          <p>Food Chain Companies Trusting Us</p>
        </div>
        <div
          className={`${styles.window} ${styles.imgWindow}`}
          style={{ backgroundImage: `url(${bg})`, backgroundPosition: "85% 20%" }}
        />

        {/* Fila 3 */}
        <div
          className={`${styles.window} ${styles.imgWindow}`}
          style={{ backgroundImage: `url(${bg})`, backgroundPosition: "25% 70%" }}
        />
        <div className={`${styles.window} ${styles.textWindow}`}>
          <h3>30+</h3>
          <p>States Where We Operate</p>
        </div>
        <div
          className={`${styles.window} ${styles.imgWindow}`}
          style={{ backgroundImage: `url(${bg})`, backgroundPosition: "80% 70%" }}
        />
      </div>
    </section>
  );
};

export default WindowsGrid;
