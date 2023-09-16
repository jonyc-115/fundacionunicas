import { Link } from "react-router-dom";
import NavPage from "./NavPage";
import "../styles/Header.css";
import MenuBtn from "./MenuBtn.jsx";
import { useEffect, useState } from "react";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let scrollY = window.scrollY;
      if (window.innerWidth < 1024 && scrollY > 64) {
        setActive(true);
      } else if (window.innerWidth < 1024 && scrollY < 64) {
        setActive(false);
      } else if (window.innerWidth > 1024) {
        setActive(true);
      }
    });

    return () => {};
  }, []);

  let isActive = active ? "" : "none";
  console.log(active);

  return (
    <header className={`header ${isActive}`}>
      <div className="container">
        <Link onClick={() => setToggleBtn(true)} to="/">
          LOGO
        </Link>
        <NavPage toggleBtn={toggleBtn} setToggleBtn={setToggleBtn} />
        <MenuBtn toggleBtn={toggleBtn} setToggleBtn={setToggleBtn} />
      </div>
    </header>
  );
};

export default Header;
