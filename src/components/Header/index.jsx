import Link from "next/link";
import styles from "src/components/Header/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.anchor}>Index</Link>
      <Link href="/about" className={styles.anchor}>About</Link>
    </header>
  );
}
