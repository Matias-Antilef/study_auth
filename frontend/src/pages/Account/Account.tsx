import styles from "./account.module.css";

function Account() {
  return (
    <div className={styles.account_main}>
      <section>
        <h1>Matias Antilef</h1>
        <form>
          <button type="submit">Cambiar</button>
        </form>
      </section>
    </div>
  );
}
export default Account;
