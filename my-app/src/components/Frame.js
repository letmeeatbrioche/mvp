import React, { useRef, useEffect, useState } from 'react';
import Cat1 from './Cat1';
import Cat2 from './Cat2';
import Cat3 from './Cat3';
import Cat4 from './Cat4';
import Cat5 from './Cat5';
import trill from '../cat-purr-twit4.wav';
import meow1 from '../fiji-meow-02.wav';
import meow2 from '../cat-1-meow.mp3'

const Frame = () => {
  // const [titleVisibility, setTitleVisibilty] = useState('show-title');

  const makeMeow1 = (event) => {
    const catMeow1 = new Audio(meow1);
    catMeow1.play();
  }
  const makeMeow2 = (event) => {
    const catMeow2 = new Audio(meow2);
    catMeow2.play();
  }
  const makeTrill = (event) => {
    const catTrill = new Audio(trill);
    catTrill.play();
  }
  const catSprite1 = useRef(null);
  const catSprite2 = useRef(null);
  const catSprite3 = useRef(null);
  const catSprite4 = useRef(null);
  const catSprite5 = useRef(null);
  const titleCard = useRef(null);

  const moveCat = (cat) => {
    cat.current.style.position = 'absolute';
    cat.current.style.top = Math.floor(Math.random()*(80 - 40) + 40)+'%';
    cat.current.style.left = Math.floor(Math.random()*55+10)+'%';
  }
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     moveCat(catSprite1);
  //     moveCat(catSprite2);
  //     moveCat(catSprite3);
  //     moveCat(catSprite4);
  //     moveCat(catSprite5);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const playGame = () => {
    titleCard.current.style.display = 'none';
  }

  return (
    <div className="App">
      <div className="title" ref={titleCard}>
        <h1>Kitty Committy</h1>
        <h2 onClick={playGame}>Play</h2>
      </div>
      <div className="frame">
        <div className="rrs-container" ref={catSprite1} onClick={makeMeow1}>
          <Cat1 />
        </div>
        <div className="rrs-container" ref={catSprite2} onClick={makeMeow2}>
          <Cat2 />
        </div>
        <div className="rrs-container" ref={catSprite3} onClick={makeTrill}>
          <Cat3 />
        </div>
        <div className="rrs-container" ref={catSprite4} onClick={makeTrill}>
          <Cat4 />
        </div>
        <div className="rrs-container" ref={catSprite5} onClick={makeMeow1}>
          <Cat5 />
        </div>
      </div>
      {/* <button onClick={moveCat}>Move Creme Cat</button> */}
    </div>
  )
}

export default Frame;