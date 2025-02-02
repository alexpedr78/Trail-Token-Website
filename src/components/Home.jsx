import Features from "./Features";
import Contact from "./Contact";
import About from "./About";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function document() {
    navigate("/docs");
  }
  return (
    <>
      <section className="section-HomePage">
        <div className="card-HomePage">
          <p>
            Your adventure begins with the tap of a button! Explore new places,
            complete challenges, and earn tokens while discovering the world
            around you.
          </p>
          <button className="button-regular" onClick={document}>
            learn about Tap to visit
          </button>
        </div>
        <div className="card-HomePage">
          <About />
        </div>
        <div className="card-HomePage">
          <Features />
        </div>
        <div className="card-HomePage">
          <Contact />
        </div>
      </section>
    </>
  );
}

export default Home;
