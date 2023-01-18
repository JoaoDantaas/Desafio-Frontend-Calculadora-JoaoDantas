import { useContext } from "react";
import { IndexContext } from "../../context/index";
import "./style.css";

const ResponseForm = () => {
  const { values } = useContext(IndexContext);

  return (
    <>
      <div className="container-responseform">
        <em>
          <h2 className="h2-responseform">VOCÊ RECEBERÁ</h2>
          <h4>
            Amanhã: <strong>R$ {values ? values["1"] : "0,00"}</strong>
          </h4>
          <h4>
            Em 15 dias: <strong>R$ {values ? values["15"] : "0,00"}</strong>
          </h4>
          <h4>
            Em 30 dias: <strong>R$ {values ? values["30"] : "0,00"}</strong>
          </h4>
          <h4>
            Em 90 dias: <strong>R$ {values ? values["90"] : "0,00"}</strong>
          </h4>
        </em>
      </div>
    </>
  );
};

export default ResponseForm;
