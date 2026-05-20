// /**
//  * ProductCard Component
//  * Reusable card with image support + WhatsApp CTA
//  */

// import styles from "./ProductCard.module.css";

// type ProductCardProps = {
//   name: string;
//   brand: string;
//   price: string;
//   image?: string;
// };

// export default function ProductCard({
//   name,
//   brand,
//   price,
//   image,
// }: ProductCardProps) {
//   const whatsappMessage = `Hello Shivam Ceramic, I am interested in ${name} by ${brand}. Please share details.`;

//   const whatsappLink = `https://wa.me/918356999444?text=${encodeURIComponent(
//     whatsappMessage
//   )}`;

//   return (
//     <div className={styles.card}>
//       {/* Image area */}
//       <div className={styles.imageBox}>
//         {image ? (
//           <img
//             src={image}
//             alt={name}
//             className={styles.image}
//           />
//         ) : (
//           <span>Product Image</span>
//         )}
//       </div>

//       {/* Content */}
//       <div className={styles.content}>
//         <p className={styles.brand}>{brand}</p>

//         <h3 className={styles.name}>{name}</h3>

//         <p className={styles.price}>MRP: {price}</p>

//         <a
//           href={whatsappLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={styles.linkWrap}
//         >
//           <button className={styles.button}>
//             Enquire Now
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// }






/**
 * ProductCard Component
 * Reusable product card with:
 * - Image
 * - Product info
 * - WhatsApp CTA
 * - Product detail navigation
 */

import styles from "./ProductCard.module.css";
import Link from "next/link";

type ProductCardProps = {
  id?: number;
  name: string;
  brand: string;
  price: string;
  image?: string;
};

export default function ProductCard({
  id,
  name,
  brand,
  price,
  image,
}: ProductCardProps) {
  /**
   * WhatsApp inquiry message
   */
  const whatsappMessage = `Hello Shivam Ceramic, I am interested in ${name} by ${brand}. Please share details.`;

  const whatsappLink = `https://wa.me/918356999444?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  console.log(id);
  console.log(name);
    
  return (
    <div className={styles.card}>
      {/* Product detail page link */}
      <Link
        href={`/products/${id}`}
        className={styles.productLink}
      >
        {/* Image area */}
        <div className={styles.imageBox}>
          {image ? (
            <img
              src={image}
              alt={name}
              className={styles.image}
            />
          ) : (
            <span>Product Image</span>
          )}
        </div>

        {/* Content */}
        <div className={styles.content}>
          <p className={styles.brand}>
            {brand}
          </p>

          <h3 className={styles.name}>
            {name}
          </h3>

          <p className={styles.price}>
            MRP: {price}
          </p>
        </div>
      </Link>

      {/* WhatsApp Button */}
      <div className={styles.content}>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkWrap}
        >
          <button className={styles.button}>
            Enquire Now
          </button>
        </a>
      </div>
    </div>
  );
}