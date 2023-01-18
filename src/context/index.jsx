import { createContext, useContext, useState } from "react";
import axios from "axios";

export const IndexContext = createContext();

const IndexProvider = ({ children }) => {
  const [values, setValues] = useState();

  const simulate = async (data) => {
    await axios
      .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
      .then((response) => {
        setValues(response.data);
      })
      .catch((err) => {
        console.log(err);
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
