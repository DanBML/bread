import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import avatarCoder from "../../assets/avatar-coding.webp";

export const CodingAboutSection = () => {
  return (
    <Wrapper>
      <Link to="/bread-gallery">
        <Avatar src={avatarCoder} alt={"Cartoon coder avatar"} />
      </Link>
      <Text>
        <h2>About Me</h2>
        <p>
          .... I also like to code. In fact, I made this SPA using React and
          Typescript with a small Python backend. Both deployed using Render.
        </p>
        <p>
          {" "}
          Here's the repo: <GithubRepoLink />
        </p>
        <p>... serious font incoming ...</p>
      </Text>
    </Wrapper>
  );
};

const GithubRepoLink = () => (
  <a
    href="https://github.com/DanBML/bread"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub size={40} style={{ marginRight: "0.5rem" }} />
  </a>
);

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
