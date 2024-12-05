import background from "./assets/background.jpg";
import photo from "./assets/photo.jpg";
import "./app.css";
import { Frontpage, BackPage } from "./components/Frontpage/FrontPage";
import {
  SecondBackPage,
  SecondFrontPage,
} from "./components/SecondPage/SecondPage";
import React, { useState, useRef } from "react";
import {
  ThirdFrontPage,
  ThirdBackPage,
} from "./components/ThirdPage/ThirdPage";
import {
  FourthPageFront,
  FourthPageBack,
} from "./components/FourthPage/FourthPage";
import FifthPage from "./components/FifthPage/FifthPage";

function App() {
  const [index, setIndex] = useState(4);
  const [pageNo, setPageNo] = useState(0);
  const [play1, setPlay1] = useState(false);
  const [play2, setPlay2] = useState(false);

  const book = useRef();
  const paper1 = useRef();
  const paper2 = useRef();
  const front2 = useRef();
  const paper3 = useRef();
  const front3 = useRef();
  const paper4 = useRef();
  const front4 = useRef();
  const paper5 = useRef();

  const openBook = () => {
    setPageNo(pageNo + 1);
    book.current.style.transform = "translateX(50%)";
  };

  const closeBook = (isAtBegning) => {
    if (isAtBegning) {
      setPageNo(0);
      book.current.style.transform = "translateX(0%)";
    } else {
      book.current.style.transform = "translateX(100%)";
    }
  };

  const handleNext = () => {
    switch (pageNo) {
      case 0:
        openBook();
        paper1.current.classList.add("flipped");
        paper1.current.style.zIndex = 0;
        setTimeout(() => {
          setPlay1(true);
        }, 1000);
        break;
      case 1:
        paper2.current.classList.add("flipped");
        paper2.current.style.zIndex = 1;
        front2.current.style.zIndex = -1;
        setPlay1(false);
        setTimeout(() => {
          setPlay2(true);
        }, 1000);
        break;
      case 2:
        paper3.current.classList.add("flipped");
        paper3.current.style.zIndex = 2;
        front3.current.style.zIndex = -1;
        setPlay2(false);
        break;
      case 3:
        paper4.current.classList.add("flipped");
        paper4.current.style.zIndex = 3;
        front4.current.style.zIndex = -1;
        break;
      case 4:
        paper5.current.classList.add("flipped");
        paper5.current.style.zIndex = 4;
        closeBook(false);
        break;
      default:
        throw new Error("unknown state");
    }
    setPageNo(pageNo + 1);
  };

  const handleBack = () => {
    switch (pageNo) {
      case 1:
        closeBook(true);
        paper1.current.classList.remove("flipped");
        paper1.current.style.zIndex = 10;
        setPlay1(false);
        break;
      case 2:
        paper2.current.classList.remove("flipped");
        paper2.current.style.zIndex = 9;
        front2.current.style.zIndex = 9;
        setPlay2(false);
        setTimeout(() => {
          setPlay1(true);
        }, 1000);
        break;
      case 3:
        paper3.current.classList.remove("flipped");
        paper3.current.style.zIndex = 8;
        front3.current.style.zIndex = 8;
        setTimeout(() => {
          setPlay2(true);
        }, 1000);
        break;
      case 4:
        paper4.current.classList.remove("flipped");
        setTimeout(() => {
          paper4.current.style.zIndex = 7;
          front4.current.style.zIndex = 7;
        }, 200);
        break;
      case 5:
        openBook();
        paper5.current.classList.remove("flipped");
        paper5.current.style.zIndex = 6;
        break;
      default:
        throw new Error("unknown state");
    }
    setPageNo(pageNo - 1);
  };

  const handleData = (index) => {
    setIndex(index);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div id="book" className="book" ref={book}>
        {/* <!-- Paper 1 --> */}
        <div id="p1" class="paper" ref={paper1}>
          <div class="front">
            <div id="f1" class="front-content-main">
              <Frontpage handleNext={handleNext} />
            </div>
          </div>
          <div class="back">
            <div id="b1" class="back-content-main">
              <BackPage
                handleBack={handleBack}
                handleNext={handleNext}
                play={play1}
              />
            </div>
          </div>
        </div>
        {/* <!-- Paper 2 --> */}
        <div id="p2" class="paper" ref={paper2}>
          <div class="front" ref={front2}>
            <div id="f2" class="front-content-main">
              <SecondFrontPage play={play1} />
            </div>
          </div>
          <div class="back">
            <div id="b2" class="back-content-main">
              <SecondBackPage handleBack={handleBack} handleNext={handleNext} />
            </div>
          </div>
        </div>
        {/* <!-- Paper 3 --> */}
        <div id="p3" class="paper" ref={paper3}>
          <div class="front" ref={front3}>
            <div id="f3" class="front-content-main">
              <ThirdFrontPage play={play2} />
            </div>
          </div>
          <div class="back">
            <div id="b3" class="back-content-main">
              <ThirdBackPage
                index={index}
                handleBack={handleBack}
                handleNext={handleNext}
              />
            </div>
          </div>
        </div>
        {/* <!-- Paper 4 --> */}
        <div id="p4" class="paper" ref={paper4}>
          <div class="front" ref={front4}>
            <div id="f4" class="front-content-main">
              <FourthPageFront handleData={handleData} />
            </div>
          </div>
          <div class="back">
            <div id="b4" class="back-content-main">
              <FourthPageBack handleBack={handleBack} handleNext={handleNext} />
            </div>
          </div>
        </div>
        {/* <!-- Paper 5 --> */}
        <div id="p5" class="paper" ref={paper5}>
          <div class="front">
            <div id="f5" class="front-content-main">
              <FifthPage />
            </div>
          </div>
          <div class="back">
            <div id="b5" className="photo-box">
              <img
                src={photo}
                alt="my-img"
                className="photo"
                onClick={handleBack}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
