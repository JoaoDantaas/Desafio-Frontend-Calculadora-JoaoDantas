import { useContext } from "react";
import { IndexContext } from "../../context/index";
import "./style.css";

const ResponseForm = () => {
  const { values } = useContext(IndexContext);
  let arrayNames = [];
  let arrayValues = [];

  for (let key in values) {
    arrayNames.push(key);
    arrayValues.push(values[key]);
  }
  return (
    <>
      <div className="container-responseform">
        {values ? (
          <em>
            <h2 className="h2-responseform">VOCÊ RECEBERÁ</h2>
            {values &&
              arrayValues.map((value, i) => (
                <h4 key={i}>
                  Em {arrayNames[i]} dias: <strong>R$ {value}</strong>
                </h4>
              ))}
          </em>
        ) : (
          <>
            <h2 className="h2-responseform">SIMULE SUA ANTECIPAÇÃO :)</h2>
          </>
        )}
      </div>
    </>
  );
};

export default ResponseForm;
