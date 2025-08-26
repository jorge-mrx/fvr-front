'use client';
import Image from 'next/image';
import styles from './CertificationSection.module.css';

// 🔽 Importa tus imágenes reales aquí
import EmilyPhoto from '@/assets/certificationSection/eggs.avif';
import MichaelPhoto from '@/assets/certificationSection/eggs.avif';

// 👉 Imágenes y SVGs columna derecha
import Eggs from '@/assets/certificationSection/eggs.avif';
import PublicContain1 from '@/assets/certificationSection/publicContain.webp';
import PublicContain2 from '@/assets/certificationSection/publicContain1.webp';
import OrangeDots from '@/assets/certificationSection/orange-dots.svg';
import OrangeCurve from '@/assets/certificationSection/orange-curve-shape.svg';
import FourStar from '@/assets/certificationSection/four-angle-star.svg';

const CertificationSection = () => {
  const media = {
    emily: EmilyPhoto,
    michael: MichaelPhoto,
    eggs: Eggs,
    publicContain1: PublicContain1,
    PublicContain2: PublicContain2,
    orangeDots: OrangeDots,
    orangeCurve: OrangeCurve,
    fourStar: FourStar,
  };

  return (
    <section className={styles.section}>
      {/* Columna izquierda */}
      <div className={styles.leftCol}>
        <h1 className={styles.title}>
          Certificación
          <br />
          de inocuidad alim
          <span className={styles.swooshWrap}>
            entaria
            <svg
              className={styles.swoosh}
              viewBox="0 0 480 28"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M5 20 C 90 40, 180 -10, 300 16 C 380 32, 450 8, 475 12"
                fill="none"
                stroke="#F0BF4C"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          <br /> con alcance global
        </h1>

        <p className={styles.subtext}>
          Certification Body focused on micro and small businesses in the food
          chain sector, enhancing your credibility and safety standards.
        </p>

        <div className={styles.actions}>
          <a href="#" className={styles.btnGreen}>
            Start Your Certification
          </a>
          <a href="#" className={styles.btnLink}>
            Learn About Our Services
          </a>

          {/* Línea decorativa + flecha */}
          <svg
            className={styles.linkDecor}
            viewBox="0 0 220 70"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M5 35 C 60 35, 120 35, 165 35"
              fill="none"
              stroke="#28A745"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M160 20 C 185 38, 195 48, 205 60"
              fill="none"
              stroke="#28A745"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M194 42 L205 60 L184 58"
              fill="none"
              stroke="#28A745"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Reseñas */}
        <div className={styles.reviewsGrid}>
          <div className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <Image
                src={media.emily}
                alt="Emily Smith"
                width={48}
                height={48}
                className={styles.avatar}
              />
              <div className={styles.reviewer}>Emily Smith</div>
            </div>
            <div className={styles.stars} aria-label="5 stars">
              ★★★★★
            </div>
            <p className={styles.reviewText}>
              Food Veritas Register streamlined our certification journey,
              removing barriers and enhancing our market presence.
            </p>
          </div>

          <div className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <Image
                src={media.michael}
                alt="Michael Johnson"
                width={48}
                height={48}
                className={styles.avatar}
              />
              <div className={styles.reviewer}>Michael Johnson</div>
            </div>
            <div className={styles.stars} aria-label="5 stars">
              ★★★★★
            </div>
            <p className={styles.reviewText}>
              Thanks to Food Veritas Register, our business established trust
              with customers, leading to valuable partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div className={styles.rightCol}>
        <div className={styles.imageCard}>
          {/* Imágenes */}
          <Image
            src={media.eggs}
            alt="Main Image"
            className={styles.imgMain}
          />
          <Image
            src={media.PublicContain2}
            alt="Decorative Image 1"
            className={styles.imgSecondary}
          />
          <Image
            src={media.publicContain1}
            alt="Decorative Image 2"
            className={styles.imgTertiary}
          />

          {/* Decoraciones */}
          <Image
            src={media.orangeDots}
            alt="Dots Decoration Top Left"
            className={styles.dotsTopLeft}
          />
          <Image
            src={media.orangeDots}
            alt="Dots Decoration Bottom Right"
            className={styles.dotsBottomRight}
          />
          <Image
            src={media.orangeCurve}
            alt="Curve Decoration"
            className={styles.curveDecor}
          />
          <Image
            src={media.fourStar}
            alt="Star Decoration"
            className={styles.starDecor}
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
