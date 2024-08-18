import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer h-50">
      <div className="container">
        <nav className="d-flex justify-content-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Products
          </NavLink>
          <NavLink
            to={"/posts"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Posts
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};
