import { Link } from "react-router-dom";
import HomeImg from "../assets/home.png";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>A computer science student in GCIT</p>
              <h1>Welcome to Ugyen Code</h1>
              <p>
                Greetings! I am Ugyen, a Computer Science enthusiast with a
                focus on Blockchain technology. Explore my projects and insights
                into programming languages and blockchain applications. Lets
                embark on this coding journey together!
              </p>
              <div className="flex">
                <Link to="/contact">
                  <button className="bg-green-900">Connct Now</button>
                </Link>

                <Link to="/service">
                  <button className="">Learn More</button>
                </Link>
              </div>
            </div>

            <div className="hero-image">
              <img src={HomeImg} alt="Home image" width="400" height="500" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
