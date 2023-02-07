import { useIndexContext } from "../../context/index";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

const Form = () => {
  const { simulate } = useIndexContext();

  const formSchema = yup.object().shape({
    amount: yup
      .number("Valor de venda tem que ser um número")
      .required("Valor de venda obrigatório")
      .min(1000, "Valor de venda te que ser maior que 1000"),
    installments: yup
      .number("Parcela tem que ser um número")
      .required("Parcela obrigatória")
      .max(12, "Máximo de parcelas 12"),
    mdr: yup
      .number("MDR tem que ser um número")
      .required("MDR obrigatório")
      .max(100, "MDR tem que ser menordo que 100"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  console.log(errors);
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
