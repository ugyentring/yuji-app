import Yuji from "../assets/yuji.jpg";

const Register = () => {
  return (
    <>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img
                style={{ borderRadius: "5px" }}
                className="register-yuji"
                src={Yuji}
                width="400"
                height="500"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
