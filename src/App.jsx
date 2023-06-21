import { useEffect, useRef, useState } from "react";
import { images } from "./lib";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Optimized images</h1>
      <div className="Hero">
        <LazyImage
          url={images[7].img_url}
          miniUrl={images[7].mini_img_url}
          width={1600}
          height={540}
        />
      </div>

      <div className="SubHeading">
        <div>
          Check the blurred background and pulsing effect over images that
          haven't been fully loaded yet
        </div>
        <div>You probably won't see much if you're on a good wifi network</div>
        <div>
          To simulate a slow network, open your dev tools, go to the network
          tab, and throttle it a bit
        </div>
      </div>

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

      <div className="Hero">
        <LazyImage
          url={images[3].img_url}
          miniUrl={images[3].mini_img_url}
          width={1200}
          height={600}
        />
      </div>

      <div className="Hero">
        <LazyImage
          url={images[21].img_url}
          miniUrl={images[21].mini_img_url}
          width={1200}
          height={600}
        />
      </div>

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

      <footer>Built with love ❤️</footer>
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
