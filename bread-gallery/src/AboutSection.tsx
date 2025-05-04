import styled from "styled-components";
import "./App.css";
import avatarBaker from "./assets/avatar.webp";
import avatarCoder from "./assets/avatar-coding.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

export const BreadAboutSection = () => {
  const [wiggling, setWiggling] = useState(false);

  useEffect(() => {
    if (wiggling) {
      const timer = setTimeout(() => {
        setWiggling(false);
      }, 2000);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setWiggling(true);
    }, 5000);

    return () => clearTimeout(timer);
  });

  const AvatarComponent = wiggling ? AvatarWithWiggle : Avatar;

  return (
    <Wrapper>
      <Link to="/coding">
        <AvatarComponent src={avatarBaker} alt={"Cartoon baker avatar"} />
      </Link>
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

const AvatarWithWiggle = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;

  animation: wiggle 2s ease-in-out;
  transform-origin: center;

  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(5deg);
    }
    30% {
      transform: rotate(-5deg);
    }
    45% {
      transform: rotate(4deg);
    }
    60% {
      transform: rotate(-4deg);
    }
    75% {
      transform: rotate(2deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
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
