import { useState, useRef, useEffect } from "react";
import "./App.scss";
import Lottie from "react-lottie";
import Image from "./assets/img/24.png";
import firstImage from "./assets/img/homepage/519x788.jpg";
import secondImage from "./assets/img/homepage/816x459.jpg";
import thirdImage from "./assets/img/homepage/708x531.jpg";
import Star from "./assets/img/star.png";
import animationData from "./assets/videos/lottie-1366x350.json";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const movingBoxRef = useRef(null);
  const descriptionBoxRef = useRef(null);
  const wordRef = useRef(null);

  useEffect(() => {
    const movingBox = movingBoxRef.current;
    const descriptionBox = descriptionBoxRef.current;
    const wordEase = wordRef.current;
    const starts = document.querySelectorAll(".starContainer");

    gsap.to(".starImage", { rotation: 360, repeat: -1 });
    gsap.to(".starImage", {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 1,
      stagger: 0.7,
    });

    gsap.from(".secondWordContainer", { opacity: 0, duration: 1, delay: 0.5 });

    gsap.to(".secondWordContainer", {
      opacity: 10,
      duration: 5,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".secondWordContainer",
        start: "top center",
      },
    });

    //images
    // gsap.to('.firstBoatImageContainer',{opacity:1,scrollTrigger:{start:'top 80%',trigger:'.firstBoatImageContainer'}})
    // gsap.fromTo('.firstBoatImageContainer',{y:100})
    const tl = gsap.timeline({
      y: "-100vh",
      scrollTrigger: {
        trigger: ".secondWordContainer",
        start: "200 100%",
        end: "top 10%",
        pinSpacing: false,
        scrub: true,
        markers: true,
      },
    });

    tl.fromTo(
      ".firstBoatImageContainer",
      { y: "100vh" },
      { y: "-100vh", duration: 1 }
    );

    tl.fromTo(
      ".secondBoatImageContainer",
      { y: "100vh" },
      { y: "-100vh", duration: 1 }
    );

    
    // gsap.to('.word', {
    //   y:100,
    //   duration: 1,
    //   delay: 0.2,
    //   stagger: 0.2,
    //   ease:'linear'
    // });

    // gsap.fromTo(
    //   '.firstBoatImageContainer',
    //   { y: '-100%' }, // Move the image from below the viewport
    //   {
    //     y: '100%', // Move the image up to the desired position after the viewport
    //     scrollTrigger: {
    //       trigger: '.firstBoatImageContainer',
    //       markers:true,
    //       start: 'top bottom', // Start the animation when the top of the container reaches the bottom of the viewport
    //       end: 'bottom top', // End the animation when the bottom of the container reaches the top of the viewport
    //       scrub: true, // Smoothly animate the image based on the scroll position
    //     },
    //   }
    // );

    //     gsap.to('.word', { ease: "power1.inOut", delay: 1, y: 100 });
    // gsap.to('.wordBuild', { ease: "power1.inOut", delay: 2, y: 100 });
    // gsap.to('.wordShaping', { ease: "power1.inOut", delay: 3, y: 100 });

    // gsap.to(".word .word60", { ease: "power1.inOut", delay: 1, y: 100 });
    // gsap.to(".word .wordBuild", { ease: "power1.inOut", delay: 2, y: 100 });
    // gsap.to(".word .wordShaping", { ease: "power1.inOut", delay: 3, y: 100 });

    // let tl = gsap.timeline({ease:'linear'})
    // tl
    //   .to('.word60',{delay:1})
    //   .to('wordBuild',{delay:2})
    //   .to('wordBuild',{delay:3})

    // gsap.from('.word', { duration: 2.5, ease: "power4.in", y: 0 });
    // gsap.to('.word', { duration: 2.5, ease: "power4.in", y: -200 });
    //   gsap.fromTo(
    //     ".word",
    //     { opacity: 0 },
    //     { opacity: 1, y: "0%", duration: 1, ease: "power2.out" }
    //   );
  }, []);

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <>
      <div className="container">
        <div className="imgBackgroundContainer">
          <img className="imgBackground" src={Image} alt="" />
        </div>

        <div className="wordContainer">
          <h1 className="word">
            <span className="word60">60 </span>
            <span className="word60">YEARS </span>
            <span className="word60">OF</span>
            <br />
            <span className="wordBuild">BUILDING </span>
            <span className="wordBuild">ICONS,</span>
            <br />
            <span className="wordShaping">SHAPING </span>
            <span className="wordShaping">SKYLINES</span>
          </h1>
        </div>
        {/* <div class="wordContainer">
          <h1 className="word60">60&nbsp;</h1>
          <h1 className="word60">YEARS&nbsp;</h1>
          <h1 className="word60">OF</h1>
        </div>
        <div class="wordContainer">
          <h1 className="wordBuild">BUILDING&nbsp;</h1>
          <h1 className="wordBuild">ICONS,</h1>
        </div>
        <div class="wordContainer">
          <h1 className="wordShaping">SHAPING&nbsp;</h1>
          <h1 className="wordShaping">SKYLINES</h1>
        </div> */}

        <div className="starContainer">
          <img className="starImage" src={Star} alt="" />
        </div>
        <div className="starContainer1">
          <img className="starImage" src={Star} alt="" />
        </div>
        <div className="starContainer2">
          <img className="starImage" src={Star} alt="" />
        </div>
        <div className="starContainer3">
          <img className="starImage" src={Star} alt="" />
        </div>
        <div className="starContainer4">
          <img className="starImage" src={Star} alt="" />
        </div>
        <div className="starContainer5">
          <img className="starImage" src={Star} alt="" />
        </div>
        <div className="starContainer6">
          <img className="starImage" src={Star} alt="" />
        </div>
        <div className="starContainer7">
          <img className="starImage" src={Star} alt="" />
        </div>
        <div className="lottieAnimationContainer">
          <Lottie options={animationOptions} />
        </div>
      </div>

      <div className="secondContainer">
        <div className="firstBoatImageContainer">
          <img className="firstBoatImage" src={firstImage} alt="" />
        </div>
        <div className="thirdBoatImageContainer">
          <img className="thirdBoatImage" src={thirdImage} alt="" />
        </div>
        {/* <div className="secondBoatImageContainer">
          <img className="firstBoatImage" src={secondImage} alt="" />
        </div> */}
        <div className="secondWordContainer">
          <div className="leftedWord">
            <h1>Honoring Our</h1>
          </div>
          <div className="rightedWord">
            <h1>Heritage,</h1>
          </div>
          <div className="leftedWord">
            <h1>Shaping Our</h1>
          </div>
          <div className="rightedWord">
            <h1>Legacy</h1>
          </div>
        </div>
         <div className="secondBoatImageContainer">
          <img className="secondBoatImage" src={secondImage} alt="" />
        </div>
      </div>
      <div className="thirdContainer" ></div>
    </>
  );
}

export default App;
