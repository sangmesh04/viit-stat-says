import BarChart from "../Components/charts/BarChart";
import { Link } from "react-router-dom";

const Statistics = () => {
  return (
    <>
      <div className="home">
        {/* //   <!-- ======= Header ======= --> */}
        <header id="header" className="d-flex align-items-center">
          <div className="container d-flex align-items-center justify-content-between">
            <h1 className="logo">
              <Link to="/">
                <img
                  src="	https://static-mh.content.disney.io/matterhorn/assets/logos/disney_logo_dark-baa807690db7.png"
                  alt=""
                  srcset=""
                />{" "}
              </Link>
            </h1>
            {/* <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

            {/* <nav */}
            {/* <!-- .navbar --> */}
          </div>
        </header>
        {/* <!-- End Header --> */}

        {/* <!-- ======= Hero Section ======= --> */}
        <section id="hero1" className="d-flex align-items-center">
          <div
            className="container position-relative"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h1>Disney</h1>
            <h2>The stat says...</h2>
            {/* <Link to="dashboard" className="btn-get-started scrollto" data-bs-toggle="modal" data-bs-target="#signin">Let's Travel</Link> */}
          </div>
        </section>
        <section className="chartsection">
          <BarChart />
        </section>
      </div>
    </>
  );
};

export default Statistics;
