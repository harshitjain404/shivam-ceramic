"use client";

/**
 * Products Page
 * Search + Category + Brand Filters
 */

import { useState } from "react";
import styles from "./products.module.css";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function ProductsPage() {
  /* Search State */
  const [search, setSearch] = useState("");

  /* Filters */
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");

  /* Unique dropdown values */
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const brands = ["All", ...new Set(products.map((p) => p.brand))];

  /* Filter Logic */
  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    const matchesBrand =
      brand === "All" || item.brand === brand;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesBrand
    );
  });
console.log(filteredProducts);
  return (
    <main className={styles.page}>
      {/* Heading */}
      <section className={styles.top}>
        <p className={styles.tag}>Our Collection</p>

        <h1 className={styles.title}>
          Browse Products
        </h1>

        <p className={styles.desc}>
          Search and explore premium sanitaryware,
          faucets, basins, showers and more.
        </p>
      </section>

      {/* Filters */}
      <section className={styles.filters}>
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className={styles.input}
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {/* Category */}
        <select
          className={styles.select}
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          {categories.map((item, index) => (
            <option key={index}>
              {item}
            </option>
          ))}
        </select>

        {/* Brand */}
        <select
          className={styles.select}
          value={brand}
          onChange={(e) =>
            setBrand(e.target.value)
          }
        >
          {brands.map((item, index) => (
            <option key={index}>
              {item}
            </option>
          ))}
        </select>
      </section>

      {/* Results */}
      <p className={styles.count}>
  {filteredProducts.length} Products Found
</p>
      <section className={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
           <ProductCard
  key={item.id}
  id={item.id}
  name={item.name}
  brand={item.brand}
  price={item.price}
  image={item.image}
/>
          ))
        ) : (
          <p className={styles.empty}>
            No products found.
          </p>
        )}
      </section>
    </main>
  );
}