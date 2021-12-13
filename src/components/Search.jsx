import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import styles from "./Search.module.css";

export function Search() {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchinput}
          type="text"
          value={search}
          placeholder="Titulo"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value;
            setQuery({ search: value })
            // navigate("/?search=" + value);
          }}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
