// /**
//  * Dynamic Product Detail Page
//  * URL Example:
//  * /products/1
//  */

// import { products } from "../../../data/products";
// import styles from "./product-detail.module.css";

// type ProductPageProps = {
//   params: {
//     id: string;
//   };
// };

// export default function ProductPage({
//   params,
// }: ProductPageProps) {
//   /* Find matching product */
//   const product = products.find(
//     (item) => item.id === Number(params.id)
//   );

//   /* Product not found */
//   if (!product) {
//     return (
//       <main className={styles.notFound}>
//         <h1>Product Not Found</h1>
//       </main>
//     );
//   }

//   /* WhatsApp message */
//   const whatsappMessage = `Hello Shivam Ceramic, I am interested in ${product.name}. Please share details.`;

//   const whatsappLink = `https://wa.me/918356999444?text=${encodeURIComponent(
//     whatsappMessage
//   )}`;

//   return (
//     <main className={styles.page}>
//       {/* Product Layout */}
//       <section className={styles.container}>
//         {/* Left Image */}
//         <div className={styles.imageSection}>
//           <img
//             src={product.image}
//             alt={product.name}
//             className={styles.image}
//           />
//         </div>

//         {/* Right Content */}
//         <div className={styles.content}>
//           <p className={styles.brand}>
//             {product.brand}
//           </p>

//           <h1 className={styles.title}>
//             {product.name}
//           </h1>

//           <p className={styles.price}>
//             {product.price}
//           </p>

//           <p className={styles.description}>
//             Premium quality product from{" "}
//             {product.brand}. Designed for
//             modern bathrooms and luxury
//             spaces.
//           </p>

//           {/* CTA */}
//           <a
//             href={whatsappLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.button}
//           >
//             Enquire on WhatsApp
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }


/**
 * Dynamic Product Detail Page
 */

// import { products } from "../../../data/products";
// import styles from "./product-detail.module.css";

// type ProductPageProps = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// export default async function ProductPage({
//   params,
// }: ProductPageProps) {
//   /* Await params */
//   const { id } = await params;

//   /* Find matching product */
//   const product = products.find(
//     (item) => item.id === Number(id)
//   );

//   /* Product not found */
//   if (!product) {
//     return (
//       <main className={styles.notFound}>
//         <h1>Product Not Found</h1>
//       </main>
//     );
//   }

//   /* WhatsApp message */
//   const whatsappMessage = `Hello Shivam Ceramic, I am interested in ${product.name}. Please share details.`;

//   const whatsappLink = `https://wa.me/918356999444?text=${encodeURIComponent(
//     whatsappMessage
//   )}`;

//   return (
//     <main className={styles.page}>
//       <section className={styles.container}>
//         {/* Product Image */}
//         <div className={styles.imageSection}>
//           <img
//             src={product.image}
//             alt={product.name}
//             className={styles.image}
//           />
//         </div>

//         {/* Product Content */}
//         <div className={styles.content}>
//           <p className={styles.brand}>
//             {product.brand}
//           </p>

//           <h1 className={styles.title}>
//             {product.name}
//           </h1>

//           <p className={styles.price}>
//             {product.price}
//           </p>

//           <p className={styles.description}>
//             Premium quality product from{" "}
//             {product.brand}. Designed for
//             modern bathrooms and luxury
//             spaces.
//           </p>

//           <a
//             href={whatsappLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.button}
//           >
//             Enquire on WhatsApp
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }



// /**
//  * Dynamic Product Detail Page
//  */

// import { products } from "../../../data/products";
// import styles from "./product-detail.module.css";

// type ProductPageProps = {
//   params: {
//     id: string;
//   };
// };

// export default function ProductPage({
//   params,
// }: ProductPageProps) {
//   /* Find matching product */
//   const product = products.find(
//     (item) => item.id === Number(params.id)
//   );

//   console.log("Product ID:", params.id);
//   console.log("Found Product:", product);
//   /* Product not found */
//   if (!product) {
//     return (
//       <main className={styles.notFound}>
//         <h1>Product Not Found</h1>
//       </main>
//     );
//   }

//   /* WhatsApp message */
//   const whatsappMessage = `Hello Shivam Ceramic, I am interested in ${product.name}. Please share details.`;

//   const whatsappLink = `https://wa.me/918356999444?text=${encodeURIComponent(
//     whatsappMessage
//   )}`;

//   return (
//     <main className={styles.page}>
//       <section className={styles.container}>
//         {/* Product Image */}
//         <div className={styles.imageSection}>
//           <img
//             src={product.image}
//             alt={product.name}
//             className={styles.image}
//           />
//         </div>

//         {/* Product Content */}
//         <div className={styles.content}>
//           <p className={styles.brand}>
//             {product.brand}
//           </p>

//           <h1 className={styles.title}>
//             {product.name}
//           </h1>

//           <p className={styles.price}>
//             {product.price}
//           </p>

//           <p className={styles.description}>
//             Premium quality product from{" "}
//             {product.brand}. Designed for
//             modern bathrooms and luxury
//             spaces.
//           </p>

//           <a
//             href={whatsappLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.button}
//           >
//             Enquire on WhatsApp
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }






/**
 * Dynamic Product Detail Page
 * Next.js 15 Compatible
 */

import { products } from "../../../data/products";
import styles from "./product-detail.module.css";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  /* Await params */
  const { id } = await params;

  console.log("Product ID:", id);

  /* Find matching product */
  const product = products.find(
    (item) => item.id === Number(id)
  );

  console.log("Found Product:", product);

  /* Product not found */
  if (!product) {
    return (
      <main className={styles.notFound}>
        <h1>Product Not Found</h1>
      </main>
    );
  }

  /* WhatsApp message */
  const whatsappMessage = `Hello Shivam Ceramic, I am interested in ${product.name}. Please share details.`;

  const whatsappLink = `https://wa.me/918356999444?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className={styles.page}>
      <section className={styles.container}>
        {/* Product Image */}
        <div className={styles.imageSection}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
        </div>

        {/* Product Content */}
        <div className={styles.content}>
          <p className={styles.brand}>
            {product.brand}
          </p>

          <h1 className={styles.title}>
            {product.name}
          </h1>

          <p className={styles.price}>
            {product.price}
          </p>

          <p className={styles.description}>
            Premium quality product from{" "}
            {product.brand}. Designed for
            modern bathrooms and luxury
            spaces.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      
    </main>
  );
}