import React, { useEffect, useRef, useState } from "react";
import styles from "./WindowGrid.module.css";
import backgroundImage from "@/assets/decors/istockphoto-2167802391-1024x1024.jpg";

const WindowGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maskId] = useState("window-mask");
  const [maskContent, setMaskContent] = useState("");

  // filas de ventanas: 2, 3, 4
  const rows = [2, 3, 4];

  useEffect(() => {
    const updateMask = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const windows = Array.from(
        container.querySelectorAll<HTMLElement>(`.${styles.window}`)
      );

      // bounding box del contenedor
      const rect = container.getBoundingClientRect();

      let maskRects = "";
      windows.forEach((win) => {
        const r = win.getBoundingClientRect();
        const x = r.left - rect.left;
        const y = r.top - rect.top;
        maskRects += `<rect x="${x}" y="${y}" width="${r.width}" height="${r.height}" fill="white"/>`;
      });

      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${rect.width}" height="${rect.height}">
          <mask id="${maskId}">
            <rect width="100%" height="100%" fill="black"/>
            ${maskRects}
          </mask>
        </svg>
      `;

      setMaskContent(svg);
    };

    updateMask();
    window.addEventListener("resize", updateMask);

    return () => {
      window.removeEventListener("resize", updateMask);
    };
  }, [maskId]);

  const bgSrc = (backgroundImage as any)?.src ?? (backgroundImage as any);

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bgSrc})` }}
      ref={containerRef}
    >
      <div
        className={styles.overlay}
        style={{ WebkitMaskImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(
          maskContent
        )}')`, maskImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(
          maskContent
        )}')` }}
      />

      <div className={styles.grid}>
        {rows.map((count, ri) => (
          <div key={ri} className={styles.row}>
            {Array.from({ length: count }).map((_, i) => (
              <div key={i} className={styles.window}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WindowGrid;
