import styles from "./cardContainer.module.css";
import data from "../../pages/Student/Course/courses.json";
import { Link } from "react-router-dom";
import { StudentRoutes } from "../../models/routes";

function CardCourse() {
  return (
    <div className={styles.main_container}>
      <section className={styles.image_container}>
        {data && <img src={data.url} />}
      </section>

      <section className={styles.info_container}>
        {data && <h2> {data.title} </h2>}
        {data && <p> {data.profesor} </p>}
        <Link
          to={`/${StudentRoutes.STUDENT}/${StudentRoutes.COURSE}`}
          state={data}
        >
          Ver más
        </Link>
      </section>
    </div>
  );
}
export default CardCourse;
