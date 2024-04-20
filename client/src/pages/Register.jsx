import Yuji from "../assets/yuji.jpg";

const Register = () => {
  return (
    <>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src={Yuji}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
