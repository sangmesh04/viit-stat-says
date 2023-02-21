import cindrella from "../img/1.webp";
import frozen from "../img/2.jpeg";
import mulan from "../img/3.webp";
import pirate from "../img/4.jpeg";
import lion from "../img/5.jpeg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* //   <!-- ======= Header ======= --> */}
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <Link to="stats">
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
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h1>Disney</h1>
          <h2>The land of happiness and enjoyment...!</h2>
          {/* <Link to="dashboard" className="btn-get-started scrollto" data-bs-toggle="modal" data-bs-target="#signin">Let's Travel</Link> */}
        </div>
      </section>
      {/* <!-- End Hero --> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container-fluid">
            <div className="section-title">
              <span>Quotes</span>
              <h2>Quotes</h2>
              <p>The quotes that will change your life...</p>
            </div>
            <div className="row">
              <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <img src={cindrella} className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>
                        “No matter how your heart is grieving, if you keep on
                        believing, the dream that you wish will come true.”
                        -Cinderella
                      </h5>
                      <p>
                        <i>
                          Don’t worry Cinderella, we will definitely keep on
                          believing.
                        </i>
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={frozen} className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>
                        “Love is putting someone else’s needs before yours.”
                        -Frozen
                      </h5>
                      <p>
                        <i>Pretty much the definition of love.</i>
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={mulan} className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>
                        “The flower that blooms in adversity is the most rare
                        and beautiful of them all.” -Mulan
                      </h5>
                      <p>
                        <i>Preach that truth, Fa Zhou.</i>
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={pirate} className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>
                        “You will always remember this as the day that you
                        almost caught Captain Jack Sparrow.” -Pirates of the
                        Caribbean: The Curse of the Black Pearl
                      </h5>
                      <p>
                        <i>
                          There’s really nothing like a good Jack Sparrow quote.
                        </i>
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={lion} className="d-block" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>
                        "The past can hurt. But the way I see it, you can either
                        run from it, or learn from it." -The Lion King
                      </h5>
                      <p>
                        <i>Emotions.</i>
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <span>Features</span>
              <h2>Features</h2>
              <p>Here some features of Travelogue</p>
            </div>

            <div className="row">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-person-plus"></i>
                  </div>
                  <h4>
                    <a href="">Add friends</a>
                  </h4>
                  <p>
                    Organizer need to create tour diary and add people. All the
                    added people will have access for adding here. User can set
                    timeline and tell others what to do.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-images"></i>
                  </div>
                  <h4>
                    <a href="">Make some plans</a>
                  </h4>
                  <p>
                    This is main part of our website. Here added user can create
                    breakpoints and can add images/videos or can share
                    descriptive info. Anyone in group add their expenses here
                    with description about it.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-flag"></i>
                  </div>
                  <h4>
                    <a href="">Flag visited Spots</a>
                  </h4>
                  <p>
                    The globe map will be updated by marking with flag. This map
                    will be different for everyone depending upon which tour he
                    has done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Cta Section ======= --> */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="text-center">
              <h3>Pack your bags...</h3>
              <p>
                {" "}
                Grab all neccessary things and connect with all your friends to
                plan and rock it 🤘
              </p>
              <a className="cta-btn" href="stats">
                See our stats
              </a>
            </div>
          </div>
        </section>
        {/* <!-- End Cta Section --> */}
      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <img
                    src="	https://static-mh.content.disney.io/matterhorn/assets/logos/disney_logo_dark-baa807690db7.png"
                    alt=""
                    srcset=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Disney</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
    </div>
  );
};

export default Home;
