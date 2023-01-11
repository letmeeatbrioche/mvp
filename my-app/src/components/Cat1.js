import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import cremecat from '../Spritesheets/creme_000.png';

const Cat1 = ({ catFrames }) => {
  return (
    <Spritesheet
      image={cremecat}
      widthFrame={32}
      heightFrame={32}
      steps={79}
      fps={3}
      autoplay={true}
      loop={true}
      direction={'forward'}
      startAt={0}
      endAt={2}
    />
  )
}

export default Cat1;