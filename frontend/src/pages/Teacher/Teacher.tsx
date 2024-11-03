import { Link, Navigate, Route, Routes } from "react-router-dom";
import { CommonRoutes, TeacherRoutes } from "../../models/routes";
import RouteNotFound from "../../utilities/RouteNotFound";
import Home from "../Home/Home";
import NavBar from "../../Components/NavBar/NavBar";
import { AccountSVG } from "../../../public/IconsSVG";
import Account from "../Account/Account";

function Teacher() {
  return (
    <>
      <NavBar>
        <Link to={`/${TeacherRoutes.TEACHER}/${CommonRoutes.HOME}`}>
          <AccountSVG />
          <span>Inicio</span>
        </Link>
        <Link to={`/${TeacherRoutes.TEACHER}/${CommonRoutes.ACCOUNT}`}>
          <AccountSVG />
          <span>Cuenta</span>
        </Link>
      </NavBar>

      <Routes>
        <Route path="/" element={<Navigate to={CommonRoutes.HOME} />} />
        <Route path={CommonRoutes.HOME} element={<Home />} />
        <Route path={CommonRoutes.ACCOUNT} element={<Account />} />
      </Routes>
    </>
  );
}
export default Teacher;
