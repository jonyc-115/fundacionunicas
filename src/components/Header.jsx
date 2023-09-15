import { Link } from "react-router-dom";
import NavPage from "./NavPage";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">LOGO</Link>
      <NavPage />
    </header>
  );
};

export default Header;
