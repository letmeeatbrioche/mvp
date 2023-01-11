import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import blackcat from '../Spritesheets/black_000.png';

const Cat4 = () => {
  return (
    <Spritesheet
      image={blackcat}
      widthFrame={32}
      heightFrame={32}
      steps={79}
      fps={5}
      autoplay={true}
      loop={true}
      direction={'forward'}
      startAt={56}
      endAt={63}
    />
  )
}

export default Cat4;