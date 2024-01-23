import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.cta}>
      <div className={styles.header}></div>
      <span>Sample Image 1</span>
      <span>Sample Image 2</span>

      <div>
        <div>
          Your<em> Album </em> and <em>Artist</em> Name
        </div>
      </div>
      <div>
        <div>
          On <em>Custom</em> Album Designs
        </div>
        <button>Shop Now</button>
      </div>
      <span>Sample Image 3</span>
      <span>Sample Image 4</span>
    </div>
  );
}
