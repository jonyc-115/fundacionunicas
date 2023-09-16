import "../styles/Services.css";
import arcangeles from "../../../assets/arcangeles.png";

const Services = () => {
  return (
    <section className="services">
      <div className="title-services">
        <h2>
          CONOCE LOS 7 ARCANGELES <span>Y SU PODER EN NUESTRA VIDA</span>{" "}
        </h2>
      </div>
      <h1>CONOCE LOS 7 ARCANGELES</h1>
      <div className="arcangeles">
        <img src={arcangeles} alt="" />
      </div>
    </section>
  );
};

export default Services;
