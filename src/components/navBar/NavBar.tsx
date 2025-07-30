// NavBar.tsx
'use client';

import { useState, useRef } from 'react';
import styles from './NavBar.module.css';
import Image from 'next/image';
import logoImage from '@/assets/logo/logoh.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarContent}>
          <a href="#" className={styles.logoLink}>
            <Image src={logoImage} alt="Logo" className={styles.logo} />
          </a>

          <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>

          <div className={`${styles.navbarLinks} ${menuOpen ? styles.showMenu : ''}`}>
            <a href="#" className={styles.navbarLink}>About us</a>

            <Dropdown title="Services" items={[
              { name: 'Certification Services', url: '#' },
              { name: 'Elegibility', url: '#' },
              { name: 'Certification Process', url: '#' }
            ]} />

            <Dropdown title="Resources" items={[
              { name: 'FAQ', url: '#' },
              { name: 'Blog', url: '#' }
            ]} />

            <Dropdown title="Account" items={[
              { name: 'Login', url: '#' },
              { name: 'Register', url: '#' }
            ]} />

            <a href="#" className={styles.scheduleButton}>Schedule a Meeting</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Dropdown = ({ title, items }: { title: string, items: { name: string, url: string }[] }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className={styles.dropdown} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button className={styles.dropdownButton}>
        {title}
        <span className={open ? styles.caretUp : styles.caretDown}>&#9662;</span>
      </button>
      {open && (
        <div className={styles.dropdownContent}>
          {items.map((item, i) => (
            <a key={i} href={item.url} className={styles.dropdownItem}>{item.name}</a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
