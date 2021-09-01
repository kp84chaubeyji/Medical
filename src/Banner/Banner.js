import React from "react";
import Banneritem from "../Banner/Banneritem";
import Bannerdata from "../Banner/Bannerdata";


const Banner = () => {
   return (
      <>

         <Banneritem heading1={Bannerdata[0].heading1} heading2={Bannerdata[0].heading2} link={Bannerdata[0].link} />


      </>
   )
}

export default Banner;




