//import React from "react";
import { MdStar } from "react-icons/md";
const Hero = () => {
  return (
    <section>
      <div>
        <h1>
          Digital Shopping Hub Junction
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem reiciendis ex ab tempore est quia soluta nihil
            excepturi quasi. Dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem reiciendis ex ab tempore est quia soluta nihil
            excepturi quasi. Dolor.
          </p>
        </h1>
      </div>
      <div>
        <MdStar/>
        <MdStar/>
        <MdStar/>
        <MdStar/>
      </div>
      <div className='bold-16 sm:bold-20'>16K <span className='regular-16 sm:regular-20'> Excellent Reviews</span></div>
    </section>
  );
};

export default Hero;
