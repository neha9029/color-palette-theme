import PageNav from "../components/PageNav";
import styles from "./Homepage.module.scss";
function Homepage() {
  return (
    <div className="main-container">
      <PageNav />
      <h2>Main Content</h2>
    </div>
  );
}

export default Homepage;
