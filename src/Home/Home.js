import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Common from './Common';



const Home = () => {
  let [whyusData] = useState(Common);
  //let [whyusrightData] = useState(Common);
  return (
    <>
      <main id="main">
        {/* Why Us Section */}
        <section id="why-us" className="why-us">
          <div className="container">

            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">

                  {whyusData.map((curElem) => {
                    let { heading3, description } = curElem;
                    return (
                      <>
                        <h3>{heading3}</h3>
                        <p>{description}</p>
                      </>
                    );
                  })}
                  <div class="text-center">
                    <NavLink to="/" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></NavLink>
                  </div>
                </div>
              </div>
           
            </div>

          </div>
        </section>
        {/* Why Us Section */}

      </main>
    </>
  )
};

export default Home;
