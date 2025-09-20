import React from "react";
import styles from "./stats.module.css"
import backgroundImage from "@/assets/decors/istockphoto-2167802391-1024x1024.jpg";

const stats = [
  { value: "2,500", label: "Certified Food Business" },
  { value: "200+", label: "Food Chain Companies Trusting us" },
  { value: "30+", label: "States where we operate" },
];

const FoodStatsLanding: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.backgroundWrapper}>
        <img src={backgroundImage.src || backgroundImage} alt="Food Engineer" className={styles.backgroundImage} />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Trusted by Food Businesses Across the Nation</h2>
        <div className={styles.stats}>
          {stats.map((item, index) => (
            <div key={index} className={styles.statCard}>
              <span className={styles.value}>{item.value}</span>
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodStatsLanding;
