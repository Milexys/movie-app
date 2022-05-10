import Header from "../components/Header/Header";
import styles from "./Layout.module.scss"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
}
