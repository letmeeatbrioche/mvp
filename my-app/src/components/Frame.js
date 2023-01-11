import React, { useRef } from 'react';
import Cat1 from './Cat1';
import Cat2 from './Cat2';
import Cat3 from './Cat3';
import Cat4 from './Cat4';
import Cat5 from './Cat5';
// import trill from '../cat-purr-twit4.wav';
import meow from '../fiji-meow-02.wav';

const Frame = () => {
  // const catTrill = new Audio(trill);
  const catMeow = new Audio(meow);
  const makeSound = (event) => {
    // catTrill.play();
    catMeow.play();
  }
  const catSprite1 = useRef(null);
  const moveCat = () => {
    catSprite1.current.style.position = 'absolute';
    catSprite1.current.style.top = Math.floor(Math.random()*(80 - 40) + 40)+'%';
    catSprite1.current.style.left = Math.floor(Math.random()*55+10)+'%';
  }
  // setTimeout((catSprite1) => {moveCat(catSprite1)}, 1000);

  return (
    <div className="App">
      <div className="frame">
        <div className="rrs-container" ref={catSprite1} onClick={makeSound}>
          <Cat1 />
        </div>
        <div className="rrs-container" onClick={makeSound}>
          <Cat2 />
        </div>
        <div className="rrs-container" onClick={makeSound}>
          <Cat3 />
        </div>
        <div className="rrs-container" onClick={makeSound}>
          <Cat4 />
        </div>
        <div className="rrs-container" onClick={makeSound}>
          <Cat5 />
        </div>
      </div>
      <button onClick={moveCat}>Move Creme Cat</button>
    </div>
  )
}

export default Frame;