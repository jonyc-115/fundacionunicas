import "../styles/HeroSection.css";
import hero_img from "../../../assets/hero_img.png";
import CTAButton from "../../../components/CTAButton";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero_text">
          <h1>
            FUNDACIÓN ÚNICAS <br />
            <span className="title_1">MUJERES UNIDAS</span>
            <br />
            <span className="title_2">MUJERES PODEROSAS</span>
            <br />
            <span className="title_1">MUJERES REALES</span>
          </h1>
          <CTAButton />
        </div>
        <div className="hero_img">
          <img src={hero_img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
