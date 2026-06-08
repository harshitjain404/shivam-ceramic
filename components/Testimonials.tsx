// /**
//  * Customer Testimonials Section
//  */

// import styles from "./Testimonials.module.css";

// const reviews = [
//   {
//     name: "Rahul Mehta",
//     review:
//       "Excellent product range and genuine guidance. The showroom experience was amazing.",
//   },

//   {
//     name: "Priya Shah",
//     review:
//       "Best place in Vile Parle for premium bathroom fittings and sanitaryware.",
//   },

//   {
//     name: "Amit Jain",
//     review:
//       "Very professional staff and excellent after-sales support.",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className={styles.section}>
//       <p className={styles.tag}>
//         Customer Reviews
//       </p>

//       <h2 className={styles.title}>
//         What Our Customers Say
//       </h2>

//       <div className={styles.grid}>
//         {reviews.map((item, index) => (
//           <div
//             key={index}
//             className={styles.card}
//           >
//             <p className={styles.review}>
//               "{item.review}"
//             </p>

//             <p className={styles.name}>
//               {item.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const reviews = [
    {
      text: "Excellent product range and genuine guidance. The showroom experience was amazing.",
      name: "Rahul Mehta",
    },
    {
      text: "Best place in Vile Parle for premium bathroom fittings and sanitaryware.",
      name: "Priya Shah",
    },
    {
      text: "Very professional staff and excellent after-sales support.",
      name: "Amit Jain",
    },
  ];

  return (
    <section className={styles.section}>
      <p className={styles.sub}>Customer Reviews</p>

      <h2 className={styles.heading}>What Our Customers Say</h2>

      <div className={styles.grid}>
        {reviews.map((review, i) => (
          <div
            key={i}
            className={styles.card}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <p className={styles.text}>“{review.text}”</p>
            <h4>{review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}