// import styles from "./Navbar.module.css";

// export default function Navbar() {
//   return (
//     <nav className={styles.nav}>
//       <a href="#home" className={styles.logo}>
//         Shivam Ceramic
//       </a>

//       <div className={styles.links}>
//         <a href="/">Home</a>
//         <a href="/products">Products</a>
//         <a href="/brands">Brands</a>
//         <a href="/contact">Contact</a>
//       </div>

//       <a
//         href="https://wa.me/918356999444"
//         target="_blank"
//         className={styles.btn}
//       >
//         WhatsApp
//       </a>
//     </nav>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import {
  MessageCircleCheck,
   Phone,
   Menu,
} from "lucide-react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className={styles.topBar}>
        <a
          href="https://wa.me/918356999444"
          target="_blank"
          className={styles.utilityBtn}
        >
         <MessageCircleCheck size={20} />
        </a>

        <a
          href="tel:+918356999444"
          className={styles.utilityBtn}
        >
          <Phone size={20} />
        </a>
      </div>

      {/* Main nav */}
      <header
        className={`${styles.navbar} ${
          scrolled ? styles.scrolled : ""
        }`}
      >
        {/* left */}
        <nav
          className={`${styles.leftNav} ${
            menuOpen ? styles.showMenu : ""
          }`}
        >
          <Link href="/products">Products</Link>
          <Link href="/brands">Brands</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* logo */}
        <Link
          href="/"
          className={styles.logoWrap}
        >
          <img
            src="/logo.png"
            alt="Shivam Ceramic"
            className={styles.logo}
          />
        </Link>

        {/* right */}
        <div className={styles.rightNav}>
          <div className={styles.searchWrap}>
            <input
              type="text"
              placeholder="Search faucets, basins, showers..."
            />
          </div>

          <Link
            href="/cart"
            className={styles.cart}
          >
            🛒
          </Link>

          <button
            className={styles.menuBtn}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            ☰
          </button>
        </div>
      </header>
    </>
  );
}