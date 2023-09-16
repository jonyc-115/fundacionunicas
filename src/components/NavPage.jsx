import { Link } from "react-router-dom";
import "../styles/NavPage.css";

const NavPage = ({ toggleBtn, setToggleBtn }) => {
  let toggleMove = toggleBtn ? "" : "toggle-menu";
  return (
    <nav className={`nav-page ${toggleMove}`}>
      <button onClick={() => setToggleBtn(true)} className="close-menu">
        X
      </button>
      <li>
        <Link onClick={() => setToggleBtn(true)} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link onClick={() => setToggleBtn(true)} to="/vlog">
          Vlog
        </Link>
      </li>
    </nav>
  );
};

export default NavPage;
