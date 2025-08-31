import styles from "./Search.module.scss";

function Search() {
  return (
    <div className={styles.search__container}>
      <input
        type="text"
        className={styles.search__container__input}
        placeholder="Search for palettes"
      />
    </div>
  );
}

export default Search;
