import React from 'react';
import { NavLink } from 'react-router-dom';

const Banneritem = (banner) => {
 
  return (
    <>

      <section className="d-flex align-items-center" id="hero">
        <div className="container">
          <h1>{banner.heading1}</h1>
          <h2>{banner.heading2}</h2>
          <NavLink to="/" className="btn-get-started scrollto">{banner.link}</NavLink>
        </div>
      </section>

    </>
  )
}
export default Banneritem;