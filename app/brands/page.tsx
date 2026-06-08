// // import styles from "./brands.module.css";

// // const brands = [
// //   {
// //     name: "Jaquar",
// //     desc: "Luxury faucets and bath fittings",
// //   },
// //   {
// //     name: "Kohler",
// //     desc: "Premium global bathroom design",
// //   },
// //   {
// //     name: "Cera",
// //     desc: "Elegant sanitaryware collections",
// //   },
// //   {
// //     name: "Hindware",
// //     desc: "Trusted bathroom innovation",
// //   },
// //   {
// //     name: "Grohe",
// //     desc: "German engineering & finish",
// //   },
// //   {
// //     name: "TOTO",
// //     desc: "Minimal Japanese luxury",
// //   },
// // ];

// // export default function BrandsPage() {
// //   return (
// //     <main className={styles.page}>
// //       {/* Hero */}
// //       <section className={styles.hero}>
// //         {/* background image */}
// //         <img
// //           src="/images/brands-hero.png"
// //           alt="Luxury bathroom showroom"
// //           className={styles.heroBg}
// //         />

// //         {/* dark overlay */}
// //         <div className={styles.overlay} />

// //         <div className={styles.heroContent}>
// //           <p className={styles.tag}>
// //             Curated Premium Partners
// //           </p>

// //           <h1 className={styles.title}>
// //             Brands Trusted By
// //             <br />
// //             <span>Architects & Homeowners</span>
// //           </h1>

// //           <p className={styles.subtitle}>
// //             Explore premium sanitaryware and bath fitting
// //             brands selected for quality, finish and timeless design.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Grid */}
// //       <section className={styles.gridSection}>
// //         <div className={styles.grid}>
// //           {brands.map((brand) => (
// //             <a
// //               key={brand.name}
// //               href={`/products?brand=${brand.name}`}
// //               className={styles.card}
// //             >
// //               <div className={styles.cardTop}>
// //                 <h2>{brand.name}</h2>
// //                 <span>→</span>
// //               </div>

// //               <p>{brand.desc}</p>
// //             </a>
// //           ))}
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className={styles.cta}>
// //         <div className={styles.ctaBox}>
// //           <h2>Visit Our Premium Showroom</h2>

// //           <p>
// //             Compare finishes, collections and quality
// //             in person with expert guidance.
// //           </p>

// //           <a
// //             href="https://www.google.com/maps?sca_esv=78843e6f5da49b15&sxsrf=ANbL-n7w1aAjNV4dqRslZMByR14wsd4JBw:1779275882956&kgmid=/g/1tf5zrr_&shem=dlvs1,rimspwouoe&shndl=30&kgs=60530e2c317b63ee&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KUHEyTu1yec7MSDB-bzNjner&daddr=Thosarwadi+Building,+6,+Hanuman+Cross+Rd,+opposite+Janata+Sahakari+Bank,+Satsang+CHSL,+Navpada,+Vile+Parle+East,+Vile+Parle,+Mumbai,+Maharashtra+400057"
// //             target="_blank"
// //             rel="noreferrer"
// //             className={styles.button}
// //           >
// //             Visit Showroom
// //           </a>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }



// import styles from "./brands.module.css";

// const brands = [
//   {
//     name: "Jaquar",
//     desc: "Luxury faucets and bath fittings",
//     catalogue: "/catalogues/jaquar.pdf",
//         logo: "/logos/jaquar.png",

//   },
//   {
//     name: "Kohler",
//     desc: "Premium global bathroom design",
//     catalogue: "/catalogues/kohler.pdf",
//   },
//   {
//     name: "Cera",
//     desc: "Elegant sanitaryware collections",
//     catalogue: "/catalogues/cera.pdf",
//   },
//   {
//     name: "Hindware",
//     desc: "Trusted bathroom innovation",
//     catalogue: "/catalogues/hindware.pdf",
//   },
//   {
//     name: "Grohe",
//     desc: "German engineering & finish",
//     catalogue: "/catalogues/grohe.pdf",
//   },
//   {
//     name: "TOTO",
//     desc: "Minimal Japanese luxury",
//     catalogue: "/catalogues/toto.pdf",
//   },
// ];

// export default function BrandsPage() {
//   return (
//     <main className={styles.page}>
//       {/* Hero */}
//       <section className={styles.hero}>
//         <img
//           src="/images/brands-hero.png"
//           alt="Luxury bathroom showroom"
//           className={styles.heroBg}
//         />

//         <div className={styles.overlay}></div>

//         <div className={styles.heroContent}>
//           <p className={styles.tag}>Curated Premium Partners</p>

//           <h1 className={styles.title}>
//             Brands Trusted By
//             <br />
//             <span>Architects & Homeowners</span>
//           </h1>

//           <p className={styles.subtitle}>
//             Explore premium sanitaryware and bath fitting brands selected for
//             quality, finish and timeless design.
//           </p>
//         </div>
//       </section>

//       {/* Brand cards */}
//       <section className={styles.gridSection}>
//         <div className={styles.grid}>
//           {brands.map((brand) => (
//             <a
//               key={brand.name}
//               href={brand.catalogue}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.card}
//             >
//               <div className={styles.cardTop}>
//                 <h2>{brand.name}</h2>
//                 <span>→</span>
//               </div>

//               <p>{brand.desc}</p>
//             </a>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className={styles.cta}>
//         <div className={styles.ctaBox}>
//           <h2>Visit Our Premium Showroom</h2>

//           <p>
//             Compare finishes, collections and quality in person with expert
//             guidance.
//           </p>

//           <a
//             href="https://www.google.com/maps"
//             target="_blank"
//             rel="noreferrer"
//             className={styles.button}
//           >
//             Visit Showroom
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }


// import styles from "./brands.module.css";
// import Link from "next/link";

// const brands = [
//   {
//     slug: "jaquar",
//     name: "Jaquar",
//     desc: "Luxury faucets and bath fittings",
//     logo: "/brands/jaquar.png",
//     catalogue:
//       "https://drive.google.com/file/d/1-NnGpuDK_8WpdzqQPpvsewJ_CbAPLEBA/view",
//   },

//   {
//     slug: "kohler",
//     name: "Kohler",
//     desc: "Premium global bathroom design",
//     logo: "/brands/kohler.png",
//     catalogue: "/catalogues/kohler.pdf",
//   },

//   {
//     slug: "cera",
//     name: "Cera",
//     desc: "Elegant sanitaryware collections",
//     logo: "/brands/cera.png",
//     catalogue: "/catalogues/cera.pdf",
//   },

//   {
//     slug: "hindware",
//     name: "Hindware",
//     desc: "Trusted bathroom innovation",
//     logo: "/brands/hindware.png",
//     catalogue: "/catalogues/hindware.pdf",
//   },

//   {
//     slug: "grohe",
//     name: "Grohe",
//     desc: "German engineering & finish",
//     logo: "/brands/grohe.png",
//     catalogue: "/catalogues/grohe.pdf",
//   },

//   {
//     slug: "toto",
//     name: "TOTO",
//     desc: "Minimal Japanese luxury",
//     logo: "/brands/toto.png",
//     catalogue: "/catalogues/toto.pdf",
//   },
// ];

// export default function BrandsPage() {
//   return (
//     <main className={styles.page}>
//       {/* Hero Section */}

//       <section className={styles.hero}>
//         <div className={styles.heroOverlay}></div>

//         <div className={styles.heroContent}>
//           <span className={styles.tag}>
//             Curated Premium Partners
//           </span>

//           <h1>
//             Brands Trusted By
//             <span> Architects & Homeowners</span>
//           </h1>

//           <p>
//             Explore premium sanitaryware, faucets,
//             showers and bath collections from the
//             world's most trusted brands.
//           </p>
//         </div>
//       </section>

//       {/* Brands Grid */}

//       <section className={styles.gridSection}>
//         <div className={styles.grid}>
//           {brands.map((brand) => (
//             <Link
//               key={brand.slug}
//               href={`/brands/${brand.slug}`}
//               className={styles.card}
//             >
//               <div className={styles.logoWrap}>
//                 <div className={styles.logoBg}>
//                   <img
//                     src={brand.logo}
//                     alt={brand.name}
//                     className={styles.logo}
//                   />
//                 </div>
//               </div>

//               <div className={styles.cardContent}>
//                 <h2>{brand.name}</h2>

//                 <p>{brand.desc}</p>

//                 <span className={styles.openBtn}>
//                   View Catalogue →
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

import Link from "next/link";
import { brands } from "@/data/brands";
import styles from "./brands.module.css";

export default function BrandsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Premium Brands</h1>

        <p className={styles.subtitle}>
          Explore our collection of world-class sanitaryware and bath fittings.
        </p>
      </section>

      <section className={styles.grid}>
        {brands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/brands/${brand.slug}`}
            className={styles.card}
          >
            <div className={styles.logoWrapper}>
              <img
                src={brand.logo}
                alt={brand.name}
                className={styles.logo}
              />
            </div>

            <h2>{brand.name}</h2>

            <span>
              {brand.catalogues.length} Catalogues
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}0