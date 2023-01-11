import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import orangtabbycat from '../Spritesheets/orange_tabby_000.png';

const Cat5 = () => {
  return (
    <Spritesheet
      image={orangtabbycat}
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

export default Cat5;