import { AudioObj } from "../assets/type";

interface DrumProps{
    audioClip: AudioObj,
    setClipName(arg: string) : void;
}

const Drum = ({audioClip, setClipName} : DrumProps) => {

    function playAudio(audioClip: AudioObj) {
        setClipName(audioClip.name);
        (document.getElementById(audioClip.key) as HTMLAudioElement)?.play()
            .catch(console.error);
    }

    return (
        <button className="drum-pad" id={`drum-${audioClip.key}`} 
        key={audioClip.key}
        onClick={() => playAudio(audioClip)}>
            {audioClip.key} 
           <audio className="clip" id={audioClip.key} src={audioClip.url}>
           </audio>
        </button>);
}

export default Drum;