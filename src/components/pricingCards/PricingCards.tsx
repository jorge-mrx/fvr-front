import React from "react";
import styles from "./PricingCards.module.css";

const plans = [
  {
    name: "BASIC",
    subtitle: "Perfect For Beginners",
    price: "$99",
    period: "/month",
    buttonText: "Add to Cart",
    buttonColor: "green",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  {
    name: "STANDARD",
    subtitle: "Perfect For Personal",
    price: "$149",
    period: "/month",
    buttonText: "Add to Cart",
    buttonColor: "blue",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  {
    name: "PREMIUM",
    subtitle: "Perfect For Business",
    price: "$199",
    period: "/month",
    buttonText: "Add to Cart",
    buttonColor: "green",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
];

const PricingCards: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.cards}>
        {plans.map((plan, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.planName}>{plan.name}</h3>
            <p className={styles.subtitle}>{plan.subtitle}</p>
            <p className={styles.price}>
              {plan.price}
              <span className={styles.period}>{plan.period}</span>
            </p>
            <a
              href="#"
              className={`${styles.button} ${styles[plan.buttonColor]}`}
            >
              {plan.buttonText}
            </a>
            <p className={styles.renew}>120/month when you renew</p>
            <ul className={styles.features}>
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <a href="#" className={styles.more}>
              See all features ⌄
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingCards;
