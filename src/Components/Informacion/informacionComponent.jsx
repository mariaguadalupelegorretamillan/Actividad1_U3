import { useContext } from "react";
import Contador from "../Contador/contador";
import { GlobalContext } from "../../Context/Global/global.context";
import miimagen from "../../assets/mio.png"
import iphp from "../../assets/php.png"
import icss from "../../assets/css.png"
import ihtml from "../../assets/html.png"
import ijava from "../../assets/java.png"
import { useTranslation } from "react-i18next";
import imagen from "../../assets/twitter.png" 


function InformacionComponent() {
  const { i18n, t } = useTranslation();

  function changeLaguage(language) {
    i18n.changeLanguage(language);
  }
    const { handleCount } = useContext(GlobalContext);

  return (
    <div>
      <div className="menu">
        <ul>
          <li>
            <p >HOME</p>
          </li>
          <li>
              <p onClick={() => changeLaguage("en")}>INGLES</p>
          </li>
          <li>
              <p  onClick={() => changeLaguage("es")} >ESPAÑOL</p>
          </li>
        </ul>

        <div className="n1">
          <p><b>IN</b></p>
        </div>
        <div className="img1">
          <img src={imagen}  height="22px" class="logs"></img>
        </div>
        

      </div>
      <div className="card-info">
        <div className="container-info">
          <h1 className="tit">{t("title")}</h1>
          <p className="info" >{t("subtitle")}</p>
          <br/>
          <button className="botoon" onClick={() => handleCount("increment")}><p>{t("botons")}</p></button>
          <Contador />
        </div>
      </div>
      <img src={miimagen} className="mio"/>
      <br/><br/><br/>
      <div className="cad-info-tecnologias">
        <div className="lenguajes">
            <div className="card-lenguajes">
                <img src={iphp} className="img-lenguajes"/>
                <p className="text-lenguajes">PHP</p>
            </div>
            <div className="card-lenguajes">
                <img src={ihtml} className="img-lenguajes"/>
                <p className="text-lenguajes">HTML</p>
            </div>
            <div className="card-lenguajes">
                <img src={icss} className="img-lenguajes"/>
                <p className="text-lenguajes">CSS</p>
            </div>
            <div className="card-lenguajes">
                <img src={ijava} className="img-lenguajes"/>
                <p className="text-lenguajes">JavaS</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default InformacionComponent;