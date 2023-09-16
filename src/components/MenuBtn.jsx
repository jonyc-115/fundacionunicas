import "../styles/MenuBtn.css";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const MenuBtn = ({ toggleBtn, setToggleBtn }) => {
  let isClose = toggleBtn ? "" : "close";

  return (
    <button
      onClick={() => setToggleBtn(!toggleBtn)}
      className={`menu-btn ${isClose}`}
    >
      {toggleBtn ? <img src={menu} alt="" /> : <img src={close} alt="" />}
    </button>
  );
};

export default MenuBtn;
