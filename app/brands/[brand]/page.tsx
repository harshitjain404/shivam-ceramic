  import Link from "next/link";
  import { brands } from "@/data/brands";
  import styles from "./catalogue.module.css";

  export default async function BrandPage({
    params,
  }: {
    params: Promise<{ brand: string }>;
  }) {
    const { brand } = await params;

    const currentBrand = brands.find(
      (item) => item.slug === brand
    );

    if (!currentBrand) {
      return <h1>Brand Not Found</h1>;
    }

    return (
      <main className={styles.page}>
        <h1>{currentBrand.name} Catalogues</h1>

        <div className={styles.grid}>
          {currentBrand.catalogues.map((catalogue) => (
            <Link
              key={catalogue.fileId}
              href={`/viewer/${catalogue.fileId}`}
              className={styles.card}
            >
              {/* <img
                src={`https://drive.google.com/thumbnail?id=${catalogue.fileId}&sz=w1000`}
                alt={catalogue.title}
              /> */}
<img
  src={`https://drive.google.com/thumbnail?id=${catalogue.fileId}&sz=w1000`}
  alt={catalogue.title}
  style={{
    width: "100%",
    height: "400px",
    objectFit: "cover",
    display: "block",
  }}
/>
              <h3>{catalogue.title}</h3>
            </Link>
          ))}
        </div>
      </main>
    );
  }