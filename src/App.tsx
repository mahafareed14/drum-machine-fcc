import { useState } from 'react';
import './App.css';
import { drumsounds } from './assets/drumsounds';
import Drum from './components/Drum';

function App() {
  const [text, setText] = useState('');

  const setClipName = (audioName: string) => {
    setText(audioName);
  }

  const playAudio = (event: React.KeyboardEvent<HTMLDivElement>): void =>  {
    const clip= drumsounds.find((audio) => audio.key === event.key.toUpperCase());
    if(!clip) return;
    (document.getElementById(clip.key) as HTMLAudioElement)?.play()
            .catch(console.error);
    setClipName(clip.name);
  }

  return (
    <div className="container" id="drum-machine" onKeyDown={playAudio}>
      <h1> Drum Machine</h1>
      <div className="whole-drum">
        { drumsounds.map((clip) =>
        (<Drum audioClip={clip} setClipName={setClipName} key={clip.key}></Drum>
        )) }
      </div>
      <div id="display" hidden={text==''}>
        <h3 style={{padding: '10px'}}>{text}</h3>
      </div>
    </div>
  )
}

export default App
