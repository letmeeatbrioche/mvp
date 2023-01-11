import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import cremecat from '../Spritesheets/creme_000.png';

const Cat1 = () => {
  return (
    <Spritesheet
      image={cremecat}
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

export default Cat1;