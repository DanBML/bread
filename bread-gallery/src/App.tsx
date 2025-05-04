import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./App.css";
import BreadGallery from "./BreadGallery";
import { Navigate, Route, Routes } from "react-router-dom";
import { BreadAboutSection, CodingAboutSection } from "./AboutSection";
import { useTopic } from "./hooks";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'VT323', monospace;
  }

  h1, h2 {
    font-family: 'Press Start 2P', monospace;
    color: ${(props) => props.theme.accent};
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
  const topic = useTopic();
  const isCodingPage = topic === "coding";

  const theme = isCodingPage
    ? {
        background: "#184766",
        text: "#f5f7fa",
        accent: "#4FDBCA",
      }
    : {
        background: "#dac4a7",
        text: "#2f2f2f",
        accent: "#8a4b2a",
      };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate to="/bread-gallery" replace />} />
        <Route path="/bread-gallery" element={<BreadPage />} />
        <Route path="/coding" element={<CodingPage />} />
      </Routes>
    </ThemeProvider>
  );
}

const BreadPage = () => (
  <div>
    <h1>🥖 Bread Gallery 🍞</h1>
    <BreadAboutSection />
    <BreadGallery />
  </div>
);

const CodingPage = () => (
  <div>
    <h1>💻 {"Snack -> Stack"} 💻</h1>
    <CodingAboutSection />
  </div>
);

export default App;
