import { useEffect, useRef, useState } from "react";
import { images } from "./lib";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Optimized images</h1>
      <div className="Grid">
        {images.map(({ img_url, mini_img_url }, i) => (
          <div key={Math.random()}>
            <LazyImage
              url={img_url}
              miniUrl={mini_img_url}
              width={275}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function LazyImage(props) {
  const { url, miniUrl, width, height } = props;
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  return (
    <div
      className={`ImgWrapper ${loaded ? "Loaded" : ""}`}
      style={{
        backgroundImage: `url(${miniUrl})`,
        width,
        height,
      }}
    >
      <img
        src={url}
        ref={imgRef}
        className={`Img ${loaded ? "Loaded" : ""}`}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onLoad={(e) => {
          setLoaded(true);
        }}
      />
    </div>
  );
}

export default App;
