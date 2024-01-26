import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.heroImage}>
        <Image
          objectFit="cover"
          layout="fill"
          src="/images/hero-banner.png"
          alt="heroImage"
        />
      </div>
      <div className={styles.cta}>
        <div className={styles.header}></div>
        <span className={styles.image}>
          <Image
            layout="fixed"
            width="200"
            height="200"
            src="/images/albums/sunset-divide/divinity.png"
            alt="divinityAlbum"
          />
        </span>
        <span className={styles.image}>
          <Image
            layout="fixed"
            width="200"
            height="200"
            src="/images/albums/static-eyes/synchronicity.png"
            alt="synchronicity"
          />
        </span>

        <div className={styles.ctaText}>
          <div className={styles.ctaMainText}>
            Your<em className="emText"> Album </em> and{" "}
            <em className="emText">Artist</em> Name
          </div>
          <div className="{`${styles.ctaSubText}`}">
            On <em className="emText">Custom</em> Album Designs
          </div>
          <button className="buttonGlobal cta buttonShop">Shop Now</button>
        </div>
        <span className={styles.image}>
          <Image
            layout="fixed"
            width="200"
            height="200"
            src="/images/albums/static-eyes/the-undertaking.png"
            alt="theUndertaking"
          />
        </span>
        <span className={styles.image}>
          <Image
            layout="fixed"
            width="200"
            height="200"
            src="/images/albums/chaos-principle/as-the-sun-speaks.png"
            alt="asTheSunSpeaks"
          />
        </span>
      </div>
      <div className={styles.soundwavesImage}>
        <Image
          // style={{width: '100%', height: '100%', position: 'relative'}}
          width="1"
          height="1"
          objectFit="cover"
          layout="responsive"
          src="/images/soundwaves.jpg"
          alt="soundwaveImage"
        />
      </div>
    </>
  );
}
