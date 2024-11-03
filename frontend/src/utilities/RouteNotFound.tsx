import { Route, Routes, useNavigate } from "react-router";
import { useEffect } from "react";
import { parseJwt } from "./ParseJWT";
import { PublicRoutes } from "../models/routes";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

function RouteNotFound({ children }: Props) {
  const token = localStorage.getItem("token");
  const parsedToken = token ? parseJwt(token) : null;
  const tokenExistsAndValid =
    parsedToken && parsedToken.exp * 1000 > Date.now();
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenExistsAndValid) {
      localStorage.clear();
      navigate(`/${PublicRoutes.LOGIN}`);
    }
  }, [tokenExistsAndValid, navigate]);

  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Route Not Found</div>} />
    </Routes>
  );
}

export default RouteNotFound;
