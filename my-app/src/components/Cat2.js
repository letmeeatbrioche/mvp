import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import pinkcat from '../Spritesheets/pink_000.png';

const Cat2 = () => {
  return (
    <Spritesheet
      image={pinkcat}
      widthFrame={32}
      heightFrame={32}
      steps={79}
      fps={5}
      autoplay={true}
      loop={true}
      direction={'forward'}
      startAt={13}
      endAt={16}
    />
  )
}

export default Cat2;