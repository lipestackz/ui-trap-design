import "./App.css";
import { useState } from "react";

export default function App() {
  const [progress, setProgress] = useState(30);

  return (
    <div className="app">
      <div className="degrade"></div>


      <div className="header">
        <span className="back">←</span>
        <span className="title">ISSO É TRAP VOL.2</span>
      </div>


      <div className="album">
        <img
          src="https://akamai.sscdn.co/uploadfile/letras/albuns/d/d/c/b/4805511776354759.jpg"
          alt="album"
        />
      </div>
    

      <div className="info">
        <div>
          <h2>BUG NA MATRIX</h2>
          <p>Brandão85</p>
        </div>
        <span className="Curtir">♡</span>
      </div>


      <div className="progresso">
        <span className="time">3:19</span>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
        />
        <span className="time">3:54</span>
      </div>


      <div className="controles">

        <button>⏮</button>

        <button className="play">⏸</button>

        <button>⏭</button>
    
      </div>
    </div>
  );
}
