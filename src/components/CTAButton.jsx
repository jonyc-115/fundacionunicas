import { Link } from "react-router-dom";
import "../styles/CTAButton.css";
import alas from "../assets/alas.png";

const CTAButton = () => {
  return (
    <div className="cta-btn">
      <Link to="/citas">
        Separa tu <br /> cita{" "}
        <div className="alas">
          <img src={alas} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default CTAButton;
