import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#home" className={styles.logo}>
        Shivam Ceramic
      </a>

      <div className={styles.links}>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/brands">Brands</a>
        <a href="/contact">Contact</a>
      </div>

      <a
        href="https://wa.me/918356999444"
        target="_blank"
        className={styles.btn}
      >
        WhatsApp
      </a>
    </nav>
  );
}