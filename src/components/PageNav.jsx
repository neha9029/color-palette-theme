import { NavLink } from "react-router-dom";
import Header from "./Header";
import styles from "./PageNav.module.scss";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Header />
      <ul>
        <li>
          <NavLink to="/mood">Mood</NavLink>
        </li>
        <li>
          <NavLink to="/theme">Theme</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
