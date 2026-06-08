import styles from "./WhySection.module.css";
import Testimonials from "./Testimonials";
import { Trophy, BadgeCheck, Users } from "lucide-react";

export default function WhySection() {
  const features = [
    {
      icon: <Trophy size={34} />,
      title: "Since 1985",
      desc: "Decades of trust and customer satisfaction.",
    },
    {
      icon: <BadgeCheck size={34} />,
      title: "Top Brands",
      desc: "Authorized dealers of leading sanitaryware brands.",
    },
    {
      icon: <Users size={34} />,
      title: "Expert Guidance",
      desc: "Helping customers choose the right products.",
    },
  ];

  return (
    <section className={styles.section} id="contact">
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>

      <div className={styles.headingWrap}>
        <h2 className={styles.heading}>Why Shivam Ceramic</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.features}>
        {features.map((item, i) => (
          <div
            key={i}
            className={styles.feature}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className={styles.icon}>{item.icon}</div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <Testimonials />
    </section>
  );
}