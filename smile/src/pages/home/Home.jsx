import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
// import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      {/* <Slide slidesToShow={5} arrowsScroll={5}>
      {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide> */}
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>At Smile - Limited, we share a common vision for the future of smile-router and the impact it can have. We strive to create a future where our innovative technology transforms lives and brings smiles to people across the globe. Together, we are committed to shaping a world where the possibilities are endless, and the smile-router becomes an essential tool that makes everyday life easier and more enjoyable.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Let's explore our partnership.</h1>
          <div className="items">
            <div className="item">
            <img src="./img/glo.jpeg" alt="" />
              <div className="line"></div>
              <span>Glo</span>
            </div>
            <div className="item">
            <img src="./img/mtn.jpg" alt="" />
              <div className="line"></div>

              <span>MTN</span>
            </div>
            <div className="item">
            <img src="./img/airtel.png" alt="" />
              <div className="line"></div>
              <span>Airtel</span>
            </div>
            <div className="item">
            <img src="./img/etisalate.png" alt="" />
              <div className="line"></div>
              <span>Etisalat</span>
            </div>
            <div className="item">
            <img src="./img/mobile.png" alt="" />
              <div className="line"></div>
              <span>9-Mobile</span>
            </div>
            <div className="item">
            <img src="./img/verizon.jpeg" alt="" />
              <div className="line"></div>
              <span>Verizon</span>
            </div>
            <div className="item">
            <img src="./img/sprint.png" alt="" />
              <div className="line"></div>
              <span>Sprint-T</span>
            </div>
            <div className="item">
            <img src="./img/atat.jpg" alt="" />
              <div className="line"></div>
              <span>At&t</span>
            </div>
            <div className="item">
            <img src="./img/moov.png" alt="" />
              <div className="line"></div>
              <span>Moov</span>
            </div>
            <div className="item">
            <img src="./img/smile.jpeg" alt="" />
              <div className="line"></div>
              <span>Global Leadership Network</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
            The Smile-router
            </h1>
            <h1>
            The Smile-router can be incredibly helpful in various ways
            </h1>
            <p>
            Smile-router's features and functionality make it a valuable and helpful tool for individuals, businesses, and anyone seeking a reliable and convenient internet connection.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Seamless Internet Connectivity: The Smile-router provides reliable and high-speed internet connectivity,
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Enhanced Productivity: By offering stable and fast internet access,
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Flexible Mobility: The Smile-router's portability allows users to take it anywhere
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Multiple Device Support: With its ability to connect multiple devices simultaneously
            </div>
            
            <div className="title">
              <img src="./img/check.png" alt="" />
              Data Security: Smile-router prioritizes data security and privacy.
            </div>
            
            <div className="title">
              <img src="./img/check.png" alt="" />
              Cost-Efficiency: By eliminating the need for multiple internet subscriptions or relying on public Wi-Fi networks,
            </div>
            
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide> */}
    </div>
  );
}

export default Home;
