import { Logo } from "./Logo";
import styles from "./Header.module.css";

const links = [
  { href: "#colecao", label: "A coleção" },
  { href: "#essencia", label: "Nossa essência" },
  { href: "#atendimento", label: "Atendimento" },
] as const;

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav} aria-label="Principal">
        <ul className={styles.navList}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.navLink}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="#atendimento" className={styles.contact}>
        Fale com a Levels
        <span className={styles.dot} aria-hidden="true" />
      </a>
    </header>
  );
}
