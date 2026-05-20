/**
 * Customer Testimonials Section
 */

import styles from "./Testimonials.module.css";

const reviews = [
  {
    name: "Rahul Mehta",
    review:
      "Excellent product range and genuine guidance. The showroom experience was amazing.",
  },

  {
    name: "Priya Shah",
    review:
      "Best place in Vile Parle for premium bathroom fittings and sanitaryware.",
  },

  {
    name: "Amit Jain",
    review:
      "Very professional staff and excellent after-sales support.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <p className={styles.tag}>
        Customer Reviews
      </p>

      <h2 className={styles.title}>
        What Our Customers Say
      </h2>

      <div className={styles.grid}>
        {reviews.map((item, index) => (
          <div
            key={index}
            className={styles.card}
          >
            <p className={styles.review}>
              "{item.review}"
            </p>

            <p className={styles.name}>
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}