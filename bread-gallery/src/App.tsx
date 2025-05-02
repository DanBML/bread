import { createGlobalStyle } from "styled-components";
import "./App.css";
import BreadGallery from "./BreadGallery";
import avatar from "./assets/avatar.webp";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    background-color: #dac4a7;
    color: #2f2f2f;
    font-family: 'VT323', monospace;
  }

  h1, h2 {
    font-family: 'Press Start 2P', monospace;
    color: #8a4b2a;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>🥖 Bread Gallery 🍞</h1>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "2rem",
            gap: "1rem",
            maxWidth: "800px",
            margin: "0 auto",
            padding: "2rem",
          }}
        >
          <img
            src={avatar}
            alt="Pixel baker avatar"
            style={{
              width: "100px",
              height: "100px",
              imageRendering: "pixelated",
              borderRadius: "8px",
            }}
          />
          <div>
            <p>
              Hi, I'm Dan. Sometimes I bake bread... and sometimes I take
              pictures of my bread... and sometimes, I make a website to show
              off my pictures. This is one of those times.
            </p>
          </div>
        </section>

        <BreadGallery />
      </div>
    </>
  );
}

export default App;
