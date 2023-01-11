import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import calicocat from '../Spritesheets/calico_000.png';

const Cat3 = () => {
  return (
    <Spritesheet
      image={calicocat}
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

export default Cat3;