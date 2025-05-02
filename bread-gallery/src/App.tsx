import styled, { createGlobalStyle } from "styled-components";
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

    @media (max-width: 500px) {
      font-size: 1.2rem;
      }
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

        <AboutSection />

        <BreadGallery />
      </div>
    </>
  );
}

export default App;

const AboutSection = () => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="Cartoon baker avatar" />
      <Text>
        <h2>About Me</h2>
        <p>
          Hi, I'm Dan. Sometimes I bake bread... and sometimes I take pictures
          of my bread... and sometimes, I make a website to show off my
          pictures. This is one of those times.
        </p>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Avatar = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;
`;

const Text = styled.div`
  max-width: 600px;

  h2 {
    margin-bottom: 0.5rem;
    font-family: "Press Start 2P", monospace;
    font-size: 1.25rem;
  }

  p {
    font-family: "VT323", monospace;
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: justify;
  }
`;
