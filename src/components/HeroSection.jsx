import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTerminal } from "react-icons/fa";
import { BsTerminal } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import Content1 from "./HeroSectionComponent/Content1";
import Content2 from "./HeroSectionComponent/Content2";
import Content3 from "./HeroSectionComponent/Content3";
import Content4 from './HeroSectionComponent/Content4';

function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <div className="text-secondary px-4 text-center" style={{ minHeight: '90vh' }}>
        <div className="py-5 border rounded bg-black">
          <h1 className="display-5 fw-bold text-white">
            <span className="typing-animation"> <BsTerminal /> Team Code Elite <FaTerminal /></span> </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-2 text-light">
              Code Elite is a dynamic team specializing in IoT projects, dynamic websites, innovative apps, and engaging tech content. Our expertise spans across various technology domains, ensuring we deliver top-notch solutions tailored to client needs. We pride ourselves on staying ahead of the curve with the latest industry trends. Join us on our journey to revolutionize the tech world.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-outline-danger btn-lg px-4 me-sm-3 fw-bold"><FiYoutube /> YouTube</button>
              <button type="button" className="btn btn-outline-light btn-lg px-4"><FiGithub /> GitHub</button>
            </div>
            <br />
            <div className="container px-5">
              <img src="src/assets/HeroTheme.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="600" height="300" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <hr className="text-light border border-3" />
        <Content1 />
      </div>
      <hr className="text-light border" />
      <div data-aos="fade-left">
        <Content2 />
      </div>
      <hr className="text-light border" />
      <div data-aos="fade-right">
        <Content3 />
      </div>
      <hr className="text-light border" />
      <div data-aos="fade-down">
        <Content4 />
      </div>
      <hr className="text-light border" />
    </>
  );
}

export default HeroSection;
