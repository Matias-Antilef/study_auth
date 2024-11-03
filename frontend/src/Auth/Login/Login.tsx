import { useState } from "react";
import { parseJwt } from "../../utilities/ParseJWT";
import { StudentRoutes, TeacherRoutes } from "../../models/routes";
import { useNavigate } from "react-router";
import { useUserContext } from "../../utilities/UserProvider";

function Login() {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setUser } = useUserContext();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = {
      username: userInput.username,
      password: userInput.password,
    };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          const token = parseJwt(res.token);
          setUser({
            first_name: token.first_name,
            last_name: token.last_name,
            role: token.role,
          });
          localStorage.setItem("token", res.token);
          localStorage.setItem("first_name", token.first_name);
          localStorage.setItem("last_name", token.last_name);
          localStorage.setItem("rol", token.role);

          switch (token.role) {
            case "student":
              navigate(`/${StudentRoutes.STUDENT}`, { replace: true });
              break;
            case "teacher":
              navigate(`/${TeacherRoutes.TEACHER}`, { replace: true });
              break;

            default:
              break;
          }
        }
      })
      .catch((err) => console.error(err));

    setUserInput({
      username: "",
      password: "",
    });
  }

  return (
    <div className="main">
      <h1>Login</h1>
      <form>
        <label>Nombre de usuario: </label>
        <input
          type="text"
          placeholder="nombre de usuario"
          value={userInput.username}
          onChange={(e) =>
            setUserInput({ ...userInput, username: e.target.value })
          }
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="password"
          value={userInput.password}
          onChange={(e) =>
            setUserInput({ ...userInput, password: e.target.value })
          }
        />

        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
}
export default Login;
