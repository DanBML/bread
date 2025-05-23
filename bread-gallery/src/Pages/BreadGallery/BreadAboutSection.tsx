import styled from "styled-components";
import avatarBaker from "../../assets/avatar.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
