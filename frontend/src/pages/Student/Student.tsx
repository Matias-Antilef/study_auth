import { Link, Navigate, Route, Routes } from "react-router-dom";
import RouteNotFound from "../../utilities/RouteNotFound";
import { CommonRoutes, StudentRoutes } from "../../models/routes";
import Home from "../Home/Home";
import Account from "../Account/Account";
import NavBar from "../../Components/NavBar/NavBar";
import { AccountSVG } from "../../../public/IconsSVG";
import Course from "./Course/Course";

function Student() {
  return (
    <>
      <NavBar>
        <Link to={`/${StudentRoutes.STUDENT}/${CommonRoutes.HOME}`}>
          <AccountSVG />
          <span>Inicio</span>
        </Link>
        <Link to={`/${StudentRoutes.STUDENT}/${CommonRoutes.ACCOUNT}`}>
          <AccountSVG />
          <span>Cuenta</span>
        </Link>
      </NavBar>
      <Routes>
        <Route path="/" element={<Navigate to={CommonRoutes.HOME} />} />
        <Route path={CommonRoutes.HOME} element={<Home />} />
        <Route path={CommonRoutes.ACCOUNT} element={<Account />} />
        <Route path={StudentRoutes.COURSE} element={<Course />} />
      </Routes>
    </>
  );
}
export default Student;
