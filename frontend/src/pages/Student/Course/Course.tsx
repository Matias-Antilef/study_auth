import { useLocation } from "react-router";
import styles from "./course.module.css";

function Course() {
  const { state } = useLocation();
  return <div className={styles.course_main}></div>;
}
export default Course;
