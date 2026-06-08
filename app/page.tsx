
import styles from "./page.module.css";
import Link from "next/link";



/**
 * Product categories for homepage
 * Later we can replace emoji with real icons/images
 */
const categories = [
  {
    title: "Faucets",
    icon: "🚰",
    desc: "Modern mixers & taps",
  },
  {
    title: "Basins",
    icon: "🛁",
    desc: "Elegant wash basins",
  },
  {
    title: "Showers",
    icon: "🚿",
    desc: "Luxury shower systems",
  },
  {
    title: "Mirrors",
    icon: "🪞",
    desc: "Designer mirror range",
  },
  {
    title: "Accessories",
    icon: "🧴",
    desc: "Bathroom essentials",
  },
  {
    title: "Kitchen Sinks",
    icon: "🍽️",
    desc: "Premium sink solutions",
  },
];

const brands = [
  "Jaquar",
  "Nirali",
  "Astral",
  "Prince",
  "Hindware",
  "Parryware",
];

  
import BrandCarousel from "../components/BrandCaurosel";
import Testimonials from "../components/Testimonials";
import WhySection from "../components/whySection";
import ShopByCategory from "../components/ShopByCategory";  
export default function Home() {
  return (
    <main className={styles.page}>
      {/* <section className={styles.hero} id="home">
        <p className={styles.tag}>Trusted Since 1985</p>

        <h1 className={styles.title}>
          Premium Bathroom <br />
          Solutions
        </h1>

        <p className={styles.desc}>
          Faucets, sanitaryware, basins, showers, mirrors and premium bath fittings from top brands.
        </p>

        <div className={styles.actions}>
          <Link href="/products" className={styles.primar}>
          <button  className={styles.primaryBtn}>
            Explore Products
          </button>
          </Link>
          <a
  href="https://share.google/KSNrvlF8DQcFWzXyI"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className={styles.secondaryBtn}>
    Visit Showroom
  </button>
</a>
        </div>
      </section>
 */}


<section className={styles.hero}>
  <div className={styles.heroContent}>

    {/* Small Tag */}
    <p className={styles.heroTag}>
      Trusted Since 1985
    </p>

    {/* Main Heading */}
    <h1 className={styles.heroTitle}>
      Premium Bathroom Solutions
    </h1>

    {/* Description */}
    <p className={styles.heroDesc}>
      Faucets, sanitaryware, basins, showers,
      mirrors and premium bath fittings
      from top brands.
    </p>

    {/* Buttons */}
    <div className={styles.heroButtons}>

      <a href="/products">
        <button className={styles.primaryBtn}>
          Explore Products
        </button>
      </a>

      <a
        href="https://share.google/KSNrvlF8DQcFWzXyI"
        target="_blank"
      >
        <button className={styles.secondaryBtn}>
          Visit Showroom
        </button>
      </a>

    </div>
  </div>
</section>



      <section className={styles.section} id="products">
        {/* <h2 className={styles.heading}>Shop By Category</h2>

        <div className={styles.grid}>

{categories.map((item, index) => (
  <div key={index} className={styles.card}>

    <div className={styles.categoryIcon}>
      {item.icon}
    </div>

    <h3>{item.title}</h3>


    <p>{item.desc}</p>
  </div>
))}
        </div> */}

        <ShopByCategory />
      </section>





{/* 
      <section className={styles.section} id="brands">
        <h2 className={styles.heading}>Authorized Brands</h2>

        <div className={styles.brandRow}>
          {brands.map((brand, index) => (
            <div key={index} className={styles.brandCard}>
              {brand}
            </div>
          ))}
        </div>
      </section> */}
<BrandCarousel />






      <section className={styles.section} id="contact">
        {/* <h2 className={styles.heading}>Why Shivam Ceramic</h2>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Since 1985</h3>
            <p>Decades of trust and customer satisfaction.</p>
          </div>

          <div className={styles.feature}>
            <h3>Top Brands</h3>
            <p>Authorized dealers of leading sanitaryware brands.</p>
          </div>

          <div className={styles.feature}>
            <h3>Expert Guidance</h3>
            <p>Helping customers choose the right products.</p>
          </div>
        </div> */}

          <WhySection />
        
      </section>
    </main>
  );
}
