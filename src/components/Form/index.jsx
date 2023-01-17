import { useIndexContext } from "../../context/index";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const Form = () => {
  const { simulate, values } = useIndexContext();

  const formSchema = yup.object().shape({
    amount: yup.string().required("Amount obrigatório"),
    installments: yup.string().required("Installments obrigatório"),
    mdr: yup.string().required("MDR obrigatório"),
  });
  // console.log(values);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // const simulate = async (data) => {
  //   console.log(data);
  //   await axios
  //     .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <form onSubmit={handleSubmit(simulate)}>
        <div>
          <label>Informe o valor da venda *</label>
          <input
            type="number"
            className="input"
            placeholder="a"
            {...register("amount")}
          />
          <h3>{errors.amount?.message}</h3>
        </div>
        <div>
          <label>Em quantas parcelas *</label>
          <input
            type="text"
            className="input"
            placeholder="b"
            {...register("installments")}
          />
          <h3>{errors.installments?.message}</h3>
        </div>
        <div>
          <label>Informe o percentual de MDR</label>
          <input
            type="text"
            className="input"
            placeholder="c"
            {...register("mdr")}
          />
          <h3>{errors.mdr?.message}</h3>
        </div>
        <button>Cadastrar</button>
      </form>
    </>
  );
};

export default Form;
