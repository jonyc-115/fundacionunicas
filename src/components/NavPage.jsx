import { Link } from "react-router-dom";

const NavPage = () => {
  return (
    <nav className="nav-page">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/vlog">Vlog</Link>
      </li>
    </nav>
  );
};

export default NavPage;
