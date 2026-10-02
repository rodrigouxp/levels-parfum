import Image from "next/image";
import { whatsappUrl } from "@/lib/site";
import heroImage from "@/assets/hero-noir.jpg";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <div className={styles.main}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            LEVELS PARFUM · COLLECTION 01
          </p>

          <h1 id="hero-title" className={styles.title}>
            A sua presença,
            <br />
            em outro <em className={styles.accent}>nível</em>.
          </h1>

          <p className={styles.lead}>
            Há presenças que ficam.
            <br />
            Encontre a fragrância que traduz a sua.
          </p>

          <div className={styles.actions}>
            <a href="#colecao" className={styles.primary}>
              Explorar a coleção
            </a>
            <a
              href={whatsappUrl}
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar no WhatsApp
            </a>
          </div>
        </div>

        <dl className={styles.meta}>
          <dt className="sr-only">Formato</dt>
          <dd>EAU DE PARFUM</dd>
          <dt className="sr-only">Volume</dt>
          <dd>100 ML · SEM GÊNERO</dd>
        </dl>
      </div>

      <figure className={styles.visual}>
        <Image
          src={heroImage}
          alt="Frasco de Eau de Parfum Noir 01 da Levels Parfum, com líquido âmbar e tampa preta, sobre uma pedra escura ao lado de um pedaço de madeira de oud."
          fill
          preload
          fetchPriority="high"
          placeholder="blur"
          quality={90}
          sizes="(min-width: 900px) 50vw, 100vw"
          className={styles.image}
        />

        <span className={styles.counter} aria-hidden="true">
          01 / 03
        </span>

        <span className={styles.vertical} aria-hidden="true">
          UMA ASSINATURA LEVELS
        </span>

        <figcaption className={styles.caption}>
          <span className={styles.captionLabel}>A PROFUNDIDADE DO ÂMBAR</span>
          <span className={styles.captionTitle}>
            Noir
            <sup className={styles.captionIndex}>01</sup>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
