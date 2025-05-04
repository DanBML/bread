import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import "./App.css";
import BreadGallery from "./BreadGallery";
import { Navigate, Route, Routes } from "react-router-dom";
import { BreadAboutSection, CodingAboutSection } from "./AboutSection";
import { useTopic } from "./hooks";
import { FaLinkedin } from "react-icons/fa";

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
    <CodingText />
  </div>
);

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
  font-family: sans-serif;
  border-top: 1px solid white;
`;

const Title = styled.h2`
  margin-top: 0;
  font-family: sans-serif;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  text-align: justify;
`;

const CodingText = () => {
  return (
    <Section>
      <Title>Why I Think GAIL’s and I Are a Good Fit</Title>

      <Paragraph>
        🥖 I’ve spent the last 5 years working at the leading company in
        European energy trading technology: a fast-paced, high-stakes
        environment where I built and maintained complex systems used by over
        85% of on-screen energy traders across the continent.
      </Paragraph>

      <Paragraph>
        🥖 Right now, I’m looking to pivot away from that world into something
        that feels more ethical, grounded, and genuinely motivating. GAIL’s
        ticks those boxes ✅. As a hobbyist baker, the idea of contributing to
        the success of neighbourhood bakeries through thoughtful tech is
        honestly exciting.
      </Paragraph>

      <Paragraph>
        🥖 On the technical side, I bring 5+ years of full-stack experience
        building scalable enterprise apps with
        <strong> React + TypeScript</strong>, including fast, accessible UIs and
        solid automated testing using
        <strong> Jest</strong> and <strong> Cypress</strong>. I’ve deployed
        production-ready systems using both
        <strong> Azure</strong> and <strong> AWS</strong> (Lambda, Pipelines,
        API Gateway), and I’m very experienced with <strong> .NET, C#</strong>,
        and <strong> SQL</strong>.
      </Paragraph>

      <Paragraph>
        🥖 I also just really enjoy working in a team, sharing ideas, solving
        problems together, and helping others grow. I’ve mentored colleagues
        (two of whom were promoted), and creating that kind of supportive,
        collaborative atmosphere is something I care a lot about.
      </Paragraph>

      <Paragraph>
        🥖 Please feel free to have a look at{" "}
        <a
          href="/assets/daniel-lord-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          my CV
        </a>{" "}
        or <LinkedInLink />
        for more info.
      </Paragraph>
    </Section>
  );
};

const LinkedInLink = () => (
  <a
    href="https://www.linkedin.com/in/daniel-lord-597535197"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin size={40} style={{ marginRight: "0.5rem" }} />
  </a>
);

export default App;
