import "../styles/Arcangeles.css";
import arcangeles from "../../../assets/arcangeles.png";
import flecha from "../../../assets/flecha.png";
import { useState } from "react";

const Arcangeles = () => {
  const [descripcion, setDescripcion] = useState({
    nombre: "Arcangel Miguel",
    desc: `Protección contra las fuerzas de la oscuridad y todo tipo de maldad. Es apoyo cuando nos sentimos solos, tristes o necesitamos apoyo espiritual. DONES ESPIRITUALES: Liberación de miedos y dudas sobre uno mismo, fortalecimiento de la fe y la buena voluntad, perfeccionamiento del alma`,
  });

  console.log(descripcion);

  const handleClick = (unArcangel) => {
    const arcangel = [
      {
        nombre: "Arcangel Miguel",
        desc: `Protección contra las fuerzas de la oscuridad y todo tipo de maldad. Es apoyo cuando nos sentimos solos, tristes o necesitamos apoyo espiritual. DONES ESPIRITUALES: Liberación de miedos y dudas sobre uno mismo, fortalecimiento de la fe y la buena voluntad, perfeccionamiento del alma`,
      },
      {
        nombre: "Arcangel Jofiel",
        desc: `Jofiel ayuda en la lucha contra la contaminación, la limpieza de nuestro planeta y trae a la humanidad el don de la belleza. También es fuente de inspiración para el pensamiento artístico e intelectual que proporciona ayuda con los proyectos artísticos y de ver las cosas bellas que nos rodean`,
      },
      {
        nombre: "Arcangel Chamuel",
        desc: `nos ayuda a revertir una mala relación de pareja, siempre y cuando sea para el bien de todos. También da su ayuda cuando se pierden cosas importantes, no sólo en casos de mala relación de pareja, siempre y cuando sea para el bien de las personas involucradas`,
      },
      {
        nombre: "Arcangel Gabriel",
        desc: `El arcángel san Gabriel se conoce como el mensajero de Dios. Se cuenta, por ejemplo, que fue quien reveló el Corán al profeta Mahoma. Fue el encargado de anunciar a María que sería la madre de Jesús por gracia del Espíritu Santo, entidad a la que señala con su mano derecha.`,
      },
      {
        nombre: "Arcangel Rafael",
        desc: `Rafael es el arcángel cuya misión es traer sanación. De hecho, su nombre proviene del hebreo y significa “Medicina de Dios”. En la Biblia, él está entre los ángeles más cercanos al trono de Dios, quien lo elige como la guía de Tobías en su viaje para recoger el crédito dejado por su padre`,
      },
      {
        nombre: "Arcangel Uriel",
        desc: `San Uriel, cuyo nombre significa fuego de Dios, es el cuarto en la jerarquía de los arcángeles pero el primero delante de Dios. San Uriel sería el ángel que expulsó a Adán y Eva del Paraíso y el encargado de cuidar su entrada, y quien traería el fuego en el momento del Apocalipsis.`,
      },
      {
        nombre: "Arcangel Zadkiel",
        desc: `es el arcángel de la libertad, la benevolencia, la misericordia, y el patrono de todos los que perdonan.`,
      },
    ];

    let printArcangel = arcangel.find((el) => el.nombre === unArcangel);

    setDescripcion(printArcangel);
  };

  return (
    <section className="arcangeles">
      <div className="container">
        <h2>
          CONOCE LOS 7 ARCANGELES <br /> <span>Y SU PODER EN NUESTRA VIDA</span>
        </h2>
        <div className="conocelos">
          <div className="arc-img">
            <img src={arcangeles} alt="" />
          </div>
          <div className="arc-list-content">
            <div className="arc-arrow-text">
              <div className="arc-arrow">
                <img src={flecha} alt="" />
              </div>
              <div className="arc-text">
                <h3>CONOCELOS</h3>
                <p>
                  <span>LOS 7 ARCÁNGELES TIENEN UNA FUNCIÓN</span>
                  <br />
                  ESTÁN DESTINADOS A PROTEGERNOS Y CUIDARNOS EN CADA ASPECTO DE
                  NUESTRAS VIDAS. SERES DE LUZ QUE NOS ACOMPAÑAN EN TODO
                  MOMENTO, CADA ARCÁNGEL TIENE SU REINO CLARAMENTE DETERMINADO
                </p>
              </div>
            </div>
            <ul className="arc-list">
              <li>
                <button
                  className="arc-button"
                  onClick={(e) => handleClick("Arcangel Miguel")}
                >
                  <h3>
                    <span>1</span> ARCANGEL MIGUEL
                  </h3>
                </button>
              </li>
              <li>
                <button
                  className="arc-button"
                  onClick={(e) => handleClick("Arcangel Jofiel")}
                >
                  <h3>
                    <span>2</span> ARCANGEL JOFIEL
                  </h3>
                </button>
              </li>
              <li>
                <button
                  className="arc-button"
                  onClick={(e) => handleClick("Arcangel Chamuel")}
                >
                  <h3>
                    <span>3</span> ARCANGEL CHAMUEL
                  </h3>
                </button>
              </li>
              <li>
                <button
                  className="arc-button"
                  onClick={(e) => handleClick("Arcangel Gabriel")}
                >
                  <h3>
                    <span>4</span> ARCANGEL GABRIEL
                  </h3>
                </button>
              </li>
              <li>
                <button
                  className="arc-button"
                  onClick={(e) => handleClick("Arcangel Rafael")}
                >
                  <h3>
                    <span>5</span> ARCANGEL RAFAEL
                  </h3>
                </button>
              </li>
              <li>
                <button
                  className="arc-button"
                  onClick={(e) => handleClick("Arcangel Uriel")}
                >
                  <h3>
                    <span>6</span> ARCANGEL URIEL
                  </h3>
                </button>
              </li>
              <li>
                <button
                  className="arc-button"
                  onClick={(e) => handleClick("Arcangel Zadkiel")}
                >
                  <h3>
                    <span>7</span> ARCANGEL ZADKIEL
                  </h3>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="arc-description">
          <h3>{descripcion.nombre}</h3>
          <p>{descripcion.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default Arcangeles;
