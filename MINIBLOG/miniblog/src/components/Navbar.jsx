//CSS
import styles from "./Navbar.module.css";

//context
import { useAuthValue } from "../context/AuthContext";

//hook de autenticação
import { useAuthentication } from "../hooks/useAuthentication";

//Router
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user } = useAuthValue();
  const {logout} = useAuthentication()

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini<span>Blog</span>
      </NavLink>
      <ul className={styles.link_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        {/*páginas para usuario não logado abaixo */}
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Registrar
              </NavLink>
            </li>
          </>
        )}
        {/*páginas para usuario logado abaixo */}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
