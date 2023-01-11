import React, { useRef, useEffect, useState } from 'react';
import Cat1 from './Cat1';
import Cat2 from './Cat2';
import Cat3 from './Cat3';
import Cat4 from './Cat4';
import Cat5 from './Cat5';
import trill from '../cat-purr-twit4.wav';
import meow1 from '../fiji-meow-02.wav';
import meow2 from '../cat-1-meow.mp3';
import meow3 from '../kitten22meow.wav';
import meow4 from '../meow-6.wav';

const Frame = () => {

  const callCat1 = (event) => {
    const catMeow1 = new Audio(meow1);
    catMeow1.play();
  }

  const callCat2 = (event) => {
    const catMeow2 = new Audio(meow2);
    catMeow2.play();
  }

  const callCat3 = (event) => {
    const catTrill = new Audio(trill);
    catTrill.play();
  }

  const callCat4 = (event) => {
    const catMeow3 = new Audio(meow3);
    catMeow3.play();
  }

  const callCat5 = (event) => {
    const catMeow4 = new Audio(meow4);
    catMeow4.play();
  }

  const catSprite1 = useRef(null);
  const catSprite2 = useRef(null);
  const catSprite3 = useRef(null);
  const catSprite4 = useRef(null);
  const catSprite5 = useRef(null);
  const titleCard = useRef(null);

  // const walkForward = (cat) => {
  //   cat.current.style.position = 'absolute';
  //   cat.current.style.transition = 'transform 4000ms';
  //   cat.current.style.transformBox =	'content-box';
  //   cat.current.style.transform = 'translate(0, 180%)';
  //   // cat.current.style.transform = 'translateY(125px)';
  // }

  const positionCat = (cat) => {
    cat.current.style.position = 'absolute';
    cat.current.style.top = Math.floor(Math.random()*(80 - 40) + 40)+'%';
    cat.current.style.left = Math.floor(Math.random()*55+10)+'%';
  }

  useEffect(() => {
      positionCat(catSprite1);
      positionCat(catSprite2);
      positionCat(catSprite3);
      positionCat(catSprite4);
      positionCat(catSprite5);
  }, []);

  const playGame = () => {
    titleCard.current.style.display = 'none';
  }

  return (
    <div className="App">
      <div className="title" ref={titleCard}>
        <h1>Kitty Committy</h1>
        <h2 onClick={playGame}>Join</h2>
      </div>
      <div className="frame">
        <div className="rrs-container cat1" ref={catSprite1} onClick={callCat1}>
          <Cat1 />
        </div>
        <div className="rrs-container" ref={catSprite2} onClick={callCat2}>
          <Cat2 />
        </div>
        <div className="rrs-container" ref={catSprite3} onClick={callCat3}>
          <Cat3 />
        </div>
        <div className="rrs-container" ref={catSprite4} onClick={callCat4}>
          <Cat4 />
        </div>
        <div className="rrs-container" ref={catSprite5} onClick={callCat5}>
          <Cat5 />
        </div>
      </div>
    </div>
  )
}

export default Frame;