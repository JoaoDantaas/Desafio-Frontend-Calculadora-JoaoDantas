import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const IndexContext = createContext();

const IndexProvider = ({ children }) => {
  const [values, setValues] = useState();

  const simulate = async (data) => {
    if (data.days == null) {
      delete data.days;
    }
    await axios
      .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
      .then((response) => {
        setValues(response.data);
        toast.success("Simulação feita com sucesso!", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error("Algo deu errado!", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <IndexContext.Provider value={{ simulate, values }}>
      {children}
    </IndexContext.Provider>
  );
};
export function useIndexContext() {
  const context = useContext(IndexContext);

  return context;
}

export default IndexProvider;
