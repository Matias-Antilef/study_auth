import CardCourse from "../../Components/CardCourse/CardCourse";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home_main}>
      <div className={styles.card_container}>
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
        <CardCourse />
      </div>
    </div>
  );
}
export default Home;
