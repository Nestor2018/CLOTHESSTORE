import React from "react";

import "../styles/components/Footer.scss";
import iconFace from "../assets/icons/icon-face.svg";
import iconYoutobe from "../assets/icons/icon-youtobe.svg";
import iconTwitter from "../assets/icons/icon-twitter.svg";
import iconInstagram from "../assets/icons/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-container">
        <div>
          <h3>POLÍTICAS</h3>
          <p>Políticas de privacidad</p>
          <p>Políticas de cambio</p>
          <p>Políticas de envío</p>
          <p>Términos y condiciones</p>
          <p>Responsabilidad social</p>
        </div>
        <div>
          <h3>SOBRE NOSOTROS</h3>
          <p>Encuentra tu tienda</p>
          <p>Contáctanos</p>
          <p>Trabaja con nosotros</p>
        </div>
        <div className="Footer-container_img">
          <h3>SÍGUENOS EN:</h3>
          <div className="flex">
            <div>
              <img src={iconFace} className="face-icon" />
            </div>
            <div>
              <img src={iconYoutobe} />
            </div>
            <div>
              <img src={iconTwitter} />
            </div>
            <div>
              <img src={iconInstagram} />
            </div>
          </div>
        </div>
      </div>
      <hr className="Footer-line" />
      <p className="Footer-copy">
        © Copyright Colombia. Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
