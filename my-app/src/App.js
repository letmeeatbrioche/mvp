import './App.css';
import Frame from './components/Frame';
import bgMusic from './Frederic_Lardon_feat_Laura_Palme_-_01_-_Dans_la_dtente_au_magasin_de_sport.mp3';

function App() {
  const playMusic = () => {
    const music = new Audio(bgMusic);
    music.loop = true;
    music.play();
  }
  return (
    <div>
      <Frame />
      <button className="button-45" onClick={playMusic}>Play Music</button>
    </div>
  );
}

export default App;
