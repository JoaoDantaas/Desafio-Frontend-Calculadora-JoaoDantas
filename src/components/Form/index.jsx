import { useIndexContext } from "../../context/index";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

const Form = () => {
  const { simulate } = useIndexContext();

  const formSchema = yup.object().shape({
    amount: yup.string().required("Amount obrigatório"),
    installments: yup.string().required("Installments obrigatório"),
    mdr: yup.string().required("MDR obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <h1 className="h1-form">Simule sua Antecipação</h1>
      <form onSubmit={handleSubmit(simulate)}>
        <div className="div-form">
          <label>Informe o valor da venda *</label>
          <input
            className="input"
            placeholder="Informe o valor"
            {...register("amount")}
          />
          <h3>{errors.amount?.message ? errors.amount?.message : ""}</h3>
        </div>
        <div className="div-form div-max">
          <label>Em quantas parcelas *</label>
          <input
            className="input"
            placeholder="Informe quantas parcelas"
            {...register("installments")}
          />
          <h2 className="h2-max">Máximo de 12 parcelas</h2>
          <h3>{errors.installments?.message}</h3>
        </div>
        <div className="div-form">
          <label>Informe o percentual de MDR *</label>
          <input
            className="input"
            placeholder="Informe o percentual"
            {...register("mdr")}
          />
          <h3>{errors.mdr?.message}</h3>
        </div>
        <button>Calcular</button>
      </form>
    </>
  );
};

export default Form;
