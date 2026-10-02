import Link from "next/link";
import styles from "./Header.module.css";

export function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label="Levels Parfum — página inicial">
      <svg
        className={styles.logoMark}
        viewBox="0 0 32 40"
        width="32"
        height="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M2 11 16 2l14 9" />
        <path d="M2 23 16 14l14 9" opacity="0.62" />
        <path d="M2 35 16 26l14 9" opacity="0.34" />
      </svg>
      <span className={styles.logoText} aria-hidden="true">
        <span className={styles.logoName}>LEVELS</span>
        <span className={styles.logoSub}>PARFUM</span>
      </span>
    </Link>
  );
}
