"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";

export default function Search({ placeholder }: { placeholder: string }) {
  return (
      <div className={styles.container}>
          <MdSearch />
          <input
              type="text"
              placeholder={placeholder}
              className={styles.input}
          />
      </div>
  );
}