import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import Cat1 from './Cat1';
import Cat2 from './Cat2';
import Cat3 from './Cat3';
import Cat4 from './Cat4';
import Cat5 from './Cat5';
import trill from '../cat-purr-twit4.wav';
import meow1 from '../fiji-meow-02.wav';
import meow2 from '../cat-1-meow.mp3';
import meow3 from '../kitten22meow.wav';
import meow4 from '../meow-6.wav';
import bgMusic from '../half quieter - Frederic_Lardon_feat_Laura_Palme_-_01_-_Dans_la_dtente_au_magasin_de_sport (mp3cut.net).mp3';

const Frame = () => {
  const [cat1Name, setCat1Name] = useState('');
  const [cat1NameSubmitted, setCat1NameSubmitted] = useState(false);
  const [changeCat1Name, setChangeCat1Name] = useState(false);

  const [cat2Name, setCat2Name] = useState('');
  const [cat2NameSubmitted, setCat2NameSubmitted] = useState(false);
  const [changeCat2Name, setChangeCat2Name] = useState(false);

  const [cat3Name, setCat3Name] = useState('');
  const [cat3NameSubmitted, setCat3NameSubmitted] = useState(false);
  const [changeCat3Name, setChangeCat3Name] = useState(false);

  const [cat4Name, setCat4Name] = useState('');
  const [cat4NameSubmitted, setCat4NameSubmitted] = useState(false);
  const [changeCat4Name, setChangeCat4Name] = useState(false);

  const [cat5Name, setCat5Name] = useState('');
  const [cat5NameSubmitted, setCat5NameSubmitted] = useState(false);
  const [changeCat5Name, setChangeCat5Name] = useState(false);

  const playMusic = () => {
    const music = new Audio(bgMusic);
    music.loop = true;
    // music.play();
  }

  const callCat1 = (event) => {
    const catMeow1 = new Audio(meow1);
    catMeow1.play();
  }

  const callCat2 = (event) => {
    const catMeow2 = new Audio(meow2);
    catMeow2.play();
  }

  const callCat3 = (event) => {
    const catTrill = new Audio(trill);
    catTrill.play();
  }

  const callCat4 = (event) => {
    const catMeow3 = new Audio(meow3);
    catMeow3.play();
  }

  const callCat5 = (event) => {
    const catMeow4 = new Audio(meow4);
    catMeow4.play();
  }

  const catSprite1 = useRef(null);
  const catSprite2 = useRef(null);
  const catSprite3 = useRef(null);
  const catSprite4 = useRef(null);
  const catSprite5 = useRef(null);
  const titleCard = useRef(null);

  // const walkForward = (cat) => {
  //   cat.current.style.position = 'absolute';
  //   cat.current.style.transition = 'transform 4000ms';
  //   cat.current.style.transformBox =	'content-box';
  //   cat.current.style.transform = 'translate(0, 180%)';
  //   // cat.current.style.transform = 'translateY(125px)';
  // }

  const positionCat = (cat) => {
    cat.current.style.position = 'absolute';
    cat.current.style.top = Math.floor(Math.random()*(80 - 40) + 40)+'%';
    cat.current.style.left = Math.floor(Math.random()*55+10)+'%';
  }

  useEffect(() => {
      positionCat(catSprite1);
      positionCat(catSprite2);
      positionCat(catSprite3);
      positionCat(catSprite4);
      positionCat(catSprite5);
  }, []);

  const playGame = () => {
    titleCard.current.style.display = 'none';
    playMusic();
  }

  const handleCat1DoubleClick = () => {
    setChangeCat1Name(true);
  }

  const modifyCat1Name = (event) => {  ///////////FIX
    event.preventDefault();
    setCat1NameSubmitted(true);
    setChangeCat1Name(false);
    postCats(cat1Name);
  }

  const handleCat1InputChange = (event) => {
    setCat1Name(event.target.value);
  }

  /////

  const handleCat2DoubleClick = () => {
    setChangeCat2Name(true);
  }

  const modifyCat2Name = (event) => {  ///////////FIX
    event.preventDefault();
    setCat2NameSubmitted(true);
    setChangeCat2Name(false);
    postCats(cat2Name);
  }

  const handleCat2InputChange = (event) => {
    setCat2Name(event.target.value);
  }

  /////

  const handleCat3DoubleClick = () => {
    setChangeCat3Name(true);
  }

  const modifyCat3Name = (event) => {  ///////////FIX
    event.preventDefault();
    setCat3NameSubmitted(true);
    setChangeCat3Name(false);
    postCats(cat3Name);
  }

  const handleCat3InputChange = (event) => {
    setCat3Name(event.target.value);
  }

  /////

  const handleCat4DoubleClick = () => {
    setChangeCat4Name(true);
  }

  const modifyCat4Name = (event) => {  ///////////FIX
    event.preventDefault();
    setCat4NameSubmitted(true);
    setChangeCat4Name(false);
    postCats(cat4Name);
  }

  const handleCat4InputChange = (event) => {
    setCat4Name(event.target.value);
  }

  /////

  const handleCat5DoubleClick = () => {
    setChangeCat5Name(true);
  }

  const modifyCat5Name = (event) => {  ///////////FIX
    event.preventDefault();
    setCat5NameSubmitted(true);
    setChangeCat5Name(false);
    postCats(cat5Name);
  }

  const handleCat5InputChange = (event) => {
    setCat5Name(event.target.value);
  }

  const postCats = (catName) => {
    axios.post('http://localhost:3001/cats', {name: catName})
    .then(() => console.log(`Successfully added cat name as "${catName}"`))
    .catch((err) => console.log(`Error adding cat name to database ==>`, err))
  }

  return (
    <div className="App">
      <div className="title" ref={titleCard}>
        <h1>Kitty Committy</h1>
        <h2 onClick={playGame}>Join</h2>
      </div>
      <div className="frame">
        <div className="rrs-container" ref={catSprite1} onClick={callCat1} onDoubleClick={handleCat1DoubleClick}>
          <Cat1 />

          {changeCat1Name === true ? <form onSubmit={modifyCat1Name}>
            <input type="text" value={cat1Name} onChange={handleCat1InputChange}></input>
          </form> : null}

          {cat1NameSubmitted === true ? <p>{cat1Name}</p> : null}

        </div>

        <div className="rrs-container" ref={catSprite2} onClick={callCat2} onDoubleClick={handleCat2DoubleClick}>
          <Cat2 />

          {changeCat2Name === true ? <form onSubmit={modifyCat2Name}>
            <input type="text" value={cat2Name} onChange={handleCat2InputChange}></input>
          </form> : null}

          {cat2NameSubmitted === true ? <p>{cat2Name}</p> : null}
        </div>

        <div className="rrs-container" ref={catSprite3} onClick={callCat3} onDoubleClick={handleCat3DoubleClick}>
          <Cat3 />

          {changeCat3Name === true ? <form onSubmit={modifyCat3Name}>
            <input type="text" value={cat3Name} onChange={handleCat3InputChange}></input>
          </form> : null}

          {cat3NameSubmitted === true ? <p>{cat3Name}</p> : null}
        </div>

        <div className="rrs-container" ref={catSprite4} onClick={callCat4} onDoubleClick={handleCat4DoubleClick}>
          <Cat4 />

          {changeCat4Name === true ? <form onSubmit={modifyCat4Name}>
            <input type="text" value={cat4Name} onChange={handleCat4InputChange}></input>
          </form> : null}

          {cat4NameSubmitted === true ? <p>{cat4Name}</p> : null}
        </div>

        <div className="rrs-container" ref={catSprite5} onClick={callCat5} onDoubleClick={handleCat5DoubleClick}>
          <Cat5 />

          {changeCat5Name === true ? <form onSubmit={modifyCat5Name}>
            <input type="text" value={cat5Name} onChange={handleCat5InputChange}></input>
          </form> : null}

          {cat5NameSubmitted === true ? <p>{cat5Name}</p> : null}
        </div>

      </div>
    </div>
  )
}

export default Frame;