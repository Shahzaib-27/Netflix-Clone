import styles from "./Header.module.css"

export default function HeaderFile() {

  return (
    <>
      <header className={styles.nav}>
        <div className={styles.navdata}>

          <img src="/Images/img.png" alt="Netflix" id="img" />

          <button  id={styles.fp} className={styles.sign_btn}>
              <a > 
              Sign in
              </a>
          </button>

        </div>
      </header>
    </>
  );
}


