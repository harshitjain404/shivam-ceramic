
import styles from "./ShopByCategory.module.css";
import {
  Droplets,
  Bath,
  ShowerHead,
  Sparkles,
  Package,
  CookingPot,
} from "lucide-react";

const categories = [
  {
    icon: <Droplets size={24} />,
    title: "Faucets",
    desc: "Modern mixers & taps that blend style and performance.",
    image: "/categories/faucets.jpg",
  },
  {
    icon: <Bath size={24} />,
    title: "Basins",
    desc: "Elegant wash basins for every space and style.",
    image: "/categories/basins.jpg",
  },
  {
    icon: <ShowerHead size={24} />,
    title: "Showers",
    desc: "Luxury shower systems for a refreshing experience.",
    image: "/categories/showers.jpg",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Mirrors",
    desc: "Designer mirror range to elevate interiors.",
    image: "/categories/mirrors.jpg",
  },
  {
    icon: <Package size={24} />,
    title: "Accessories",
    desc: "Essential bathroom accessories for a complete look.",
    image: "/categories/accessories.jpg",
  },
  {
    icon: <CookingPot size={24} />,
    title: "Kitchen Sinks",
    desc: "Premium sink solutions built for durability & style.",
    image: "/categories/kitchen-sinks.jpg",
  },
];

export default function ShopByCategory() {
  return (
    <section className={styles.section}>
      <div className={styles.headingWrap}>
        <h2 className={styles.heading}>Shop By Category</h2>

        <div className={styles.lineWrap}>
          <span className={styles.blue}></span>
          <span className={styles.red}></span>
        </div>

        <p className={styles.subtitle}>
          Explore our wide range of premium bathroom and kitchen solutions.
        </p>
      </div>  

      <div className={styles.grid}>
        {categories.map((item, i) => (
          <div
            key={i}
            className={styles.card}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className={styles.overlay}></div>

            <div className={styles.content}>
              <div className={styles.icon}>{item.icon}</div>

              <h3>{item.title}</h3>

              <div className={styles.cardLine}></div>

              <p>{item.desc}</p>

              <button className={styles.link}>Explore →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}