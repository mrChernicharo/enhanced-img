import { useEffect, useRef, useState } from "react";
import { images } from "./lib";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Optimized images</h1>
      <div className="Grid">
        {images.map(({ img_url, mini_img_url }) => (
          <div key={Math.random()}>
            <LazyImage url={img_url} miniUrl={mini_img_url} />
          </div>
        ))}
      </div>
    </div>
  );
}

function LazyImage(props) {
  const { url, miniUrl } = props;
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  return (
    <div
      className={`ImgWrapper ${loaded ? "Loaded" : ""}`}
      style={{
        backgroundImage: `url(${miniUrl})`,
        width: 300,
        height: 200,
      }}
    >
      <img
        src={url}
        ref={imgRef}
        className={`Img ${loaded ? "Loaded" : ""}`}
        width={300}
        height={200}
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
