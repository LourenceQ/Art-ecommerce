import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.cta}>
      <div className={styles.header}></div>
      <span>Sample Image 1</span>
      <span>Sample Image 2</span>

      <div className={styles.ctaText}>
        <div className={styles.ctaMainText}>
          Your<em className="emText"> Album </em> and <em className="emText">Artist</em> Name
        </div>
        <div className="{`${styles.ctaSubText}`}">
          On <em className="emText">Custom</em> Album Designs
        </div>
        <button className="buttonGlobal cta buttonShop">Shop Now</button>
      </div>
      <span>Sample Image 3</span>
      <span>Sample Image 4</span>
    </div>
  );
}
