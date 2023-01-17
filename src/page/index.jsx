import Form from "../components/Form";
import ResponseForm from "../components/ResponseForm";
import "./style.css";

const Page = () => {
  return (
    <>
      <div className="container-main">
        <div className="container-content">
          <section className="section-form">
            <Form />
          </section>
          <section className="section-responseform">
            <ResponseForm />
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
