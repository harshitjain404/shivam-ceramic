// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
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
        <h2 className={styles.heading}>Shop By Category</h2>

        <div className={styles.grid}>

{categories.map((item, index) => (
  <div key={index} className={styles.card}>
    {/* Icon */}
    <div className={styles.categoryIcon}>
      {item.icon}
    </div>

    {/* Title */}
    <h3>{item.title}</h3>

    {/* Description */}
    <p>{item.desc}</p>
  </div>
))}
        </div>
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
        <h2 className={styles.heading}>Why Shivam Ceramic</h2>

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
        </div>

        <Testimonials />
      </section>
    </main>
  );
}
