import React from 'react';
import Cat1 from './Cat1';
import Cat2 from './Cat2';
import Cat3 from './Cat3';
import Cat4 from './Cat4';
import Cat5 from './Cat5';
import trill from '../262309__steffcaffrey__cat-purr-twit4.wav';

const Frame = () => {
  const audio = new Audio(trill);
  const makeSound = (event) => {
    audio.play();
  }
  return (
    <div className="App">
      <div className="frame" onClick={makeSound}>
        <div className="rrs-container">
          <Cat1 />
        </div>
        <div className="rrs-container">
          <Cat2 />
        </div>
        <div className="rrs-container">
          <Cat3 />
        </div>
        <div className="rrs-container">
          <Cat4 />
        </div>
        <div className="rrs-container">
          <Cat5 />
        </div>
      </div>
    </div>
  )
}

export default Frame;