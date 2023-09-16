import "../styles/History.css";
import CTAButton from "../../../components/CTAButton";
import jen_2 from "../../../assets/jenn_2.png";

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <div className="container">
        <div className="his_img">
          <img src={jen_2} alt="" />
        </div>
        <div className="text_content">
          <h2>Conoce mi historia</h2>
          <p>
            Soy <strong>Jenny Salcedo</strong>, hace 21 años comence mi camino
            espiritual donde he apoyado y ayudado a{" "}
            <strong>más de 500 mujeres</strong> a volver a su amor propio y
            confianza en sí mismas
          </p>
          <p>
            Por que a traves de mi propia historia pude experimentar, lo que es
            la baja estima, la depresión, el abuso y la traición, tuve que tomar
            las herramientas necesarias para lograr salir de esa situación,
            entrenarme y manifestar la confianza en
            <strong>Dios</strong>
          </p>
          <p>
            Por eso hoy por hoy, tengo la plena confianza y seguridad de que con
            las herramientas que tengo puedo seguir ayudando a muchas mujeres...
            O a muchas más personas
          </p>
          <h3>
            Si quieres conocer más de mi, te invito a que exploremos juntos esta
            nueva plataforma y sigamos creciendo en comunidad
          </h3>
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
