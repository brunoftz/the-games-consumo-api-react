import styles from "@/components/Footer/Footer.module.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footerContent}>
        <div cassName={styles.footerLeft}>
          <ul className={styles.footerItems}>
            <li>Português (Brasil)</li>
            <li>English (US)</li>
            <li>Español</li>
            <li>Français (France)</li>
            <li>Italiano</li>
          </ul>
        </div>

        <div className={styles.footerRight}>
          <ul>
            <li>The games &copy; 2024</li>
          </ul>
        </div>
      </div>
      </footer>
    </>
  );
};
export default Footer;
