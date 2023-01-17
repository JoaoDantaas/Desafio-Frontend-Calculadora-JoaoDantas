import { useContext } from "react";
import { IndexContext } from "../../context/index";

const ResponseForm = () => {
  const { simulate, oiii, sla } = useContext(IndexContext);

  return (
    <>
      <header>VOCÊ RECEBERÁ</header>
      <p></p>
      <h2>Amanhã: R$</h2>
      <h2>Em 15 dias: R$</h2>
      <h2>Em 30 dias: R$</h2>
      <h2>Em 90 dias: R$</h2>
    </>
  );
};

export default ResponseForm;
