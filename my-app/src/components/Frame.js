import React, { useRef, useEffect } from 'react';
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
  const catSprite2 = useRef(null);
  const catSprite3 = useRef(null);
  const catSprite4 = useRef(null);
  const catSprite5 = useRef(null);

  const moveCat = (cat) => {
    cat.current.style.position = 'absolute';
    cat.current.style.top = Math.floor(Math.random()*(80 - 40) + 40)+'%';
    cat.current.style.left = Math.floor(Math.random()*55+10)+'%';
  }
  useEffect(() => {
    const interval = setInterval(() => {
      moveCat(catSprite1);
      moveCat(catSprite2);
      moveCat(catSprite3);
      moveCat(catSprite4);
      moveCat(catSprite5);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="frame">
        <div className="rrs-container" ref={catSprite1} onClick={makeSound}>
          <Cat1 />
        </div>
        <div className="rrs-container" ref={catSprite2} onClick={makeSound}>
          <Cat2 />
        </div>
        <div className="rrs-container" ref={catSprite3} onClick={makeSound}>
          <Cat3 />
        </div>
        <div className="rrs-container" ref={catSprite4} onClick={makeSound}>
          <Cat4 />
        </div>
        <div className="rrs-container" ref={catSprite5} onClick={makeSound}>
          <Cat5 />
        </div>
      </div>
      <button onClick={moveCat}>Move Creme Cat</button>
    </div>
  )
}

export default Frame;