import { Navigate, Route, Routes } from "react-router";
import Login from "./Auth/Login/Login";
import Student from "./pages/Student/Student";
import Teacher from "./pages/Teacher/Teacher";
import { BrowserRouter } from "react-router-dom";
import { PublicRoutes, StudentRoutes, TeacherRoutes } from "./models/routes";
import RouteNotFound from "./utilities/RouteNotFound";
import { UserProvider } from "./utilities/UserProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Navigate to={PublicRoutes.LOGIN} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={`${StudentRoutes.STUDENT}/*`} element={<Student />} />
            <Route path={`${TeacherRoutes.TEACHER}/*`} element={<Teacher />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
