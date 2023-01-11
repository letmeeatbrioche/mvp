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
      fps={3}
      autoplay={true}
      loop={true}
      direction={'forward'}
      startAt={21}
      endAt={22}
    />
  )
}

export default Cat3;