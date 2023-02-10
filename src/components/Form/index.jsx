import { useIndexContext } from "../../context/index";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

const Form = () => {
  const { simulate } = useIndexContext();

  const formSchema = yup.object().shape({
    amount: yup
      .number()
      .typeError("Valor de venda tem que ser um número")
      .required("Valor de venda obrigatório")
      .min(1000, "Valor de venda te que ser maior que 1000")
      .positive("Valor de venda tem que ser positivo")
      .integer("Valor de venda tem que ser inteiro"),
    installments: yup
      .number()
      .typeError("Parcela tem que ser um número")
      .required("Parcela obrigatória")
      .max(12, "Máximo de parcelas 12")
      .positive("Parcela tem que ser positivo")
      .integer("Parcela tem que ser inteiro"),
    mdr: yup
      .number()
      .typeError("MDR tem que ser um número")
      .required("MDR obrigatório")
      .max(100, "MDR tem que ser menordo que 100")
      .positive("MDR tem que ser positivo")
      .integer("MDR tem que ser inteiro"),
    days: yup.array().min(1).nullable().optional(),
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
        <div className="div-form div-max">
          <label>Informe os dias que quer saber</label>
          <input
            className="input"
            placeholder="Informe os dias"
            {...register("days")}
          />
          <h2 className="h2-max">
            Colocar dias dentro de colchetes e com vírgulas
          </h2>
        </div>
        <button>Calcular</button>
      </form>
    </>
  );
};

export default Form;
