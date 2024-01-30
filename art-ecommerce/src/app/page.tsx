import styles from "./page.module.css";
import Image from "next/image";

import {
  dearMisery,
  aRequiemOfPeace,
  asTheSunSpeaks,
  theEscape,
  newLife,
  synchronicity,
  theUndertaking,
  theWayItIs,
  whyWeSuffer,
  ashes,
  divinity,
  tranquility,
} from "../../public/images/albums";

import heroBanner from "../../public/images/hero-banner.png";
import soundwaves from "../../public/images/soundwaves.jpg";

export default function Home() {
  return (
    <>
      <div className={styles.heroImage}>
        <Image
          objectFit="cover"
          layout="fill"
          src={heroBanner}
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
            src={divinity}
            alt="divinityAlbum"
          />
        </span>
        <span className={styles.image}>
          <Image
            layout="fixed"
            width="200"
            height="200"
            src={synchronicity}
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
            src={theUndertaking}
            alt="theUndertaking"
          />
        </span>
        <span className={styles.image}>
          <Image
            layout="fixed"
            width="200"
            height="200"
            src={asTheSunSpeaks}
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
          src={soundwaves}
          alt="soundwaveImage"
        />
      </div>
    </>
  );
}
