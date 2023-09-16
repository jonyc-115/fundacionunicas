import "../styles/Arcangeles.css";
import arcangeles from "../../../assets/arcangeles.png";
import flecha from "../../../assets/flecha.png";

const Arcangeles = () => {
  return (
    <section className="arcangeles">
      <div className="container">
        <div className="title-arcangeles">
          <h2>
            CONOCE LOS 7 ARCANGELES <br />
            <span>Y SU PODER EN NUESTRA VIDA</span>
          </h2>
        </div>
        <div className="flex_content">
          <div className="arcangeles_img">
            <img src={arcangeles} alt="" />
          </div>
          .
          <div className="text_arc">
            <div className="title_arrow">
              <div className="arrow">
                <img src={flecha} alt="" />
              </div>
              <div className="title_arc">
                <h3>CONOCELOS</h3>
                <p>
                  <strong>
                    Los 7 arcangeles tienen una función particular
                  </strong>{" "}
                  <br />
                  Están destinados a protegernos y cuidarnos en cada aspecto de
                  nuestras vidas. Seres de luz que nos acompañan en todo
                  momento, cada arcangel tiene su reino claramente determinado
                </p>
              </div>
            </div>
            <div className="arc_list">
              <ul>
                <li>
                  <span>1.</span> ARCANGEL MIGUEL
                </li>
                <li>
                  <span>2.</span>
                  ARCANGEL JOFIEL
                </li>
                <li>
                  <span>3.</span>
                  ARCANGEL CHAMUEL
                </li>
                <li>
                  <span>4.</span>
                  ARCANGEL GABRIEL
                </li>
                <li>
                  <span>5.</span>
                  ARCANGEL RAFAEL
                </li>
                <li>
                  <span>6.</span>
                  ARCANGEL URIEL
                </li>
                <li>
                  <span>7.</span>
                  ARCANGEL ZADAKIEL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arcangeles;
