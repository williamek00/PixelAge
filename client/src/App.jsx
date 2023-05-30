import { useState, useRef, useEffect } from "react";
import "./App.scss";
import Lottie from "react-lottie";
import Image from "./assets/img/24.png";
import firstImage from "./assets/img/homepage/519x788.jpg";
import secondImage from "./assets/img/homepage/816x459.jpg";
import thirdImage from "./assets/img/homepage/708x531.jpg";
import fourthImage from "./assets/img/homepage/526x788.jpg";
import video from "./assets/videos/video.mp4";
import Star from "./assets/img/star.png";
import animationData from "./assets/videos/lottie-1366x350.json";
import { BiSquare } from "react-icons/bi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const words = document.querySelectorAll(".word60");
    const words70 = document.querySelectorAll(".word70");
    const words80 = document.querySelectorAll(".word80");
    const wordBuild1 = document.querySelectorAll(".wordBuild1");
    const wordBuild2 = document.querySelectorAll(".wordBuild2");
    const wordShape1 = document.querySelectorAll(".wordShaping1");
    const wordShape2 = document.querySelectorAll(".wordShaping2");
    const secondContainer = document.querySelector(".secondcontainer");
    const secondWordContainer = document.querySelector(".secondWordContainer");

    var screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    var screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    var screenSize = {
      width: screenWidth,
      height: screenHeight,
    };

    gsap.to(".starImage", { rotation: 360, repeat: -1 });
    gsap.to(".starImage", {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 1,
      stagger: 0.7,
    });

    if (screenSize.width > 768) {
      gsap.from(secondWordContainer, { opacity: 0, y: 100 });
      gsap.to(secondWordContainer, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".container",
          start: "center top",
          end: "+=200",
        },
      });
      gsap.to(secondWordContainer, {
        x: "-370",
        scrollTrigger: {
          trigger: secondContainer,
          start: "4800 bottom",
          end: "6000 80%",
          scrub: true,
          onEnter: () => {
            gsap.to(secondContainer, {
              backgroundColor: "#889fb5",
              duration: 1,
            });
          },
          onLeaveBack: () => {
            gsap.to(secondContainer, {
              backgroundColor: "initial",
              duration: 1,
            });
          },
          onComplete: () => {
            bottom.style.display = "block";
          },
        },
      });
      gsap.fromTo(
        ".tradeOurMileContainer",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: secondContainer,
            start: "90% center",
            end: "99% bottom",
            toggleActions: "play none pause reverse",
          },
        }
      );
      gsap.fromTo(
        ".thirdContainer",
        { scale: 0.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: secondContainer,
            start: "103% center",
            end: "110% 90%",
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        }
      );
    } else {
      gsap.from(secondWordContainer, { opacity: 0, y: 100 });
      gsap.to(secondWordContainer, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".container",
          start: "90% top",
          end: "+=200",
        },
      });
      gsap.to(secondWordContainer, {
        scrollTrigger: {
          trigger: secondContainer,
          start: "1000 bottom",
          end: "7000 80%",
          scrub: true,
          onEnter: () => {
            gsap.to(secondContainer, {
              backgroundColor: "#889fb5",
              duration: 1,
            });
          },
          onLeaveBack: () => {
            gsap.to(secondContainer, {
              backgroundColor: "initial",
              duration: 1,
            });
          },
          onComplete: () => {
            bottom.style.display = "block";
          },
        },
      });
      gsap.fromTo(
        ".tradeOurMileContainer",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: secondContainer,
            start: "1000 bottom",
            end: "6000 80%",
            toggleActions: "play none pause reverse",
          },
        }
      );
      gsap.fromTo(
        ".thirdContainer",
        { scale: 0.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: secondContainer,
            start: "2150 top",
            end: "3100 bottom",
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        }
      );
    }

    gsap.from(words, { y: 100 });
    gsap.to(words, {
      y: 0,
      delay: 0.4,
    });
    gsap.from(words, { opacity: 0 });
    gsap.to(words, {
      delay: 0.4,

      duration: 1,
      opacity: 1,
    });

    gsap.from(words70, { y: 100 });
    gsap.to(words70, {
      y: 0,
      delay: 0.5,
    });
    gsap.from(words70, { opacity: 0 });
    gsap.to(words70, {
      delay: 0.5,
      duration: 1,
      opacity: 1,
    });
    gsap.from(words80, { y: 100 });
    gsap.to(words80, {
      y: 0,
      delay: 0.6,
    });
    gsap.from(words80, { opacity: 0 });
    gsap.to(words80, {
      delay: 0.6,
      duration: 1,
      opacity: 1,
    });
    gsap.from(wordBuild1, { y: 100 });
    gsap.to(wordBuild1, {
      y: 0,
      delay: 0.7,
    });
    gsap.from(wordBuild1, { opacity: 0 });
    gsap.to(wordBuild1, {
      delay: 0.7,
      duration: 1,
      opacity: 1,
    });
    gsap.from(wordBuild2, { y: 100 });
    gsap.to(wordBuild2, {
      y: 0,
      delay: 0.8,
    });
    gsap.from(wordBuild2, { opacity: 0 });
    gsap.to(wordBuild2, {
      delay: 0.8,
      duration: 1,
      opacity: 1,
    });
    gsap.from(wordShape1, { y: 100 });
    gsap.to(wordShape1, {
      y: 0,
      delay: 0.9,
    });
    gsap.from(wordShape1, { opacity: 0 });
    gsap.to(wordShape1, {
      delay: 0.9,
      duration: 1,
      opacity: 1,
    });
    gsap.from(wordShape2, { y: 100 });
    gsap.to(wordShape2, {
      y: 0,
      delay: 1,
    });
    gsap.from(wordShape2, { opacity: 0 });
    gsap.to(wordShape2, {
      delay: 1,
      duration: 1,
      opacity: 1,
    });
  }, []);

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <div className="imgBackgroundContainer">
            <img className="imgBackground" src={Image} alt="" />
          </div>

          <div className="wordContainer">
            <h1 className="word">
              <div className="wordLine">
                <div className="word60">60&nbsp;</div>
                <div className="word70">YEARS&nbsp;</div>
                <div className="word80">OF</div>
              </div>
              <div className="wordLine">
                <div className="wordBuild1">BUILDING&nbsp;</div>
                <div className="wordBuild2">ICONS,</div>
              </div>
              <div className="wordLine">
                <div className="wordShaping1">SHAPING&nbsp;</div>
                <div className="wordShaping2">SKYLINES</div>
              </div>
            </h1>
          </div>

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
            <Lottie options={animationOptions} className="lottieAnimate" />
          </div>
        </div>
        <div className="secondcontainer">
          <div className="firstBoatImageContainer">
            <img className="firstBoatImage" src={firstImage} alt="" />
          </div>
          <div className="thirdBoatImageContainer">
            <img className="thirdBoatImage" src={thirdImage} alt="" />
          </div>

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
            <div className="tradeOurMileContainer">
              <h1 className="iconTrade">
                <BiSquare />
              </h1>
              <h1 className="tradeOurMileFont"> Trace Our Milestones</h1>
            </div>
          </div>
          <div className="secondBoatImageContainer">
            <img className="secondBoatImage" src={secondImage} alt="" />
          </div>
          <div className="fourthBoatImageContainer">
            <img className="fourthBoatImage" src={fourthImage} alt="" />
          </div>

          <div className="bottom">
            <p className="font">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              est erat, pharetra sit amet placerat sit amet, interdum in ipsum.
              Vestibulum lacus sapien, fringilla at risus nec, faucibus sodales
              neque. Sed risus augue, faucibus eget massa sit amet, luctus
              suscipit ligula. Phasellus massa massa, rutrum id est vel, cursus
              facilisis felis. Donec varius tempus ex sed laoreet. Quisque sit
              amet rhoncus urna, at varius quam. Pellentesque id euismod purus.
              Mauris rhoncus ornare nisi, eget sagittis orci viverra ut. Donec
              quis porta ipsum, ac ultricies augue. Vivamus ac faucibus arcu.
              Duis iaculis convallis orci faucibus finibus. Nullam vulputate
              ornare risus nec finibus.
              <br />
              <br />
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
              iaculis lacus id ultrices euismod. Nam feugiat luctus tortor eu
              tempus. Vivamus in blandit urna. Ut et ante a massa feugiat
              maximus. Aliquam elementum ultrices lacus, in iaculis arcu sodales
              et. Ut molestie rhoncus mattis. Aenean dui purus, eleifend a
              ultrices et, tristique a est. Sed egestas, ex nec faucibus auctor,
              augue ipsum ultrices justo, at rutrum augue mauris eu velit.
            </p>
          </div>
        </div>
        <div className="thirdContainerWrapper">
          <div className="thirdContainer">
            <video classname="video" src={video} autoPlay={true} />
            <div className="overlay"></div>
          </div>

          <div className="fontCelebrateContainer">
            <h1 className="fontCelebrate">
              <span className="celebrateFont">Celebrate&nbsp;</span>
              <span className="withFont">With&nbsp;</span>
              <span className="usFont">Us</span>
            </h1>
            <div className="watchOurCelebrationContainer">
              <h1 className="icon">
                <BiSquare />{" "}
              </h1>
              <h1 className="watchOurCelebrationFont">
                {" "}
                Watch Our Celebration
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
