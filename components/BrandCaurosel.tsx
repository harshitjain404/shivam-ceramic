// /**
//  * Brand Logo Carousel
//  * Infinite sliding brand logos
//  */

// import styles from "./BrandCarousel.module.css";

// const brands = [
//   "Jaquar",
//   "Nirali",
//   "Astral",
//   "Prince",
//   "Hindware",
//   "Parryware",
//   "Cera",
//   "Kohler",
//   "Kodiaq",
//   "Grohe",
//   "Global Drain",
//   "Venus Water Heaters",
//   "Racold Water Heaters",

// ];

// export default function BrandCarousel() {
//   return (
//     <section className={styles.section}>
//       <p className={styles.tag}>
//         Brands We Deal In
//       </p>

//       <h2 className={styles.title}>
//         Trusted Industry Leaders
//       </h2>

//       {/* Sliding Track */}
//       <div className={styles.slider}>
//         <div className={styles.track}>
//           {[...brands, ...brands].map(
//             (brand, index) => (
//               <div
//                 key={index}
//                 className={styles.card}
//               >
//                 {brand}
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }


/**
 * Brand Logo Carousel
 */

import styles from "./BrandCarousel.module.css";

const brands = [
  {
    name: "Jaquar",
    logo: "/brands/jaquar.png",
  },

  {
    name: "Cera",
    logo: "/brands/cera.png",
  },

  {
    name: "Kohler",
    logo: "/brands/kohler.png",
  },

  {
    name: "Astral",
    logo: "/brands/astral.png",
  },

  {
    name: "Prince",
    logo: "/brands/prince.png",
  },

  {
    name: "Nirali",
    logo: "/brands/niraling.jpg",
  },

  {
    name: "Hindware",
    logo: "/brands/hindware.jpg",
  },

  {
    name: "Parryware",
    logo: "/brands/parryware.png",
  },
];

export default function BrandCarousel() {
  return (
    <section className={styles.section}>
      <p className={styles.tag}>
        Brands We Deal In
      </p>

      <h2 className={styles.title}>
        Trusted Industry Leaders
      </h2>

      {/* Slider */}
      <div className={styles.slider}>
        <div className={styles.track}>
          {[...brands, ...brands].map(
            (brand, index) => (
              <div
                key={index}
                className={styles.card}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={styles.logo}
                />
               
               
              </div>
              
            )
          )}
          
        </div>
      </div>
    </section>
  );
}