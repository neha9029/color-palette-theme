import PageNav from "../components/PageNav";
import styles from "./Login.module.scss";

function Login() {
  return (
    <>
      <PageNav />
      <div className={styles.section__form}>
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Login</h2>
        </div>
        <form className={styles.form}>
          <input
            type="email"
            id="email"
            className={styles.form__input}
            placeholder="Email Address"
          />
          <input
            type="password"
            id="password"
            className={styles.form__input}
            placeholder="Password"
          />
          <button className={styles.form__input__btn__submit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
