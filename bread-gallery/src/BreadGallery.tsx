import { useEffect, useState } from "react";
import { BreadItem } from "./types";
import styled from "styled-components";

const BreadGallery = () => {
  const [breads, setBreads] = useState<BreadItem[]>([]);

  useEffect(() => {
    fetch("https://bread-u1af.onrender.com/api/bread")
      .then((res) => res.json())
      .then((data: BreadItem[]) => setBreads(data));
  }, []);

  return (
    <GalleryContainer>
      {breads.map((bread, i) => (
        <GalleryItem key={i}>
          <ImageWrapper>
            <GalleryImage
              src={`https://bread-u1af.onrender.com/images/${bread.filename}`}
              alt={bread.description}
              loading="lazy"
            />
            <Overlay>
              <OverlayText>{bread.description}</OverlayText>
            </Overlay>
          </ImageWrapper>
        </GalleryItem>
      ))}
    </GalleryContainer>
  );
};

export default BreadGallery;

const GalleryContainer = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 1rem; /* Optional gutter */
  column-gap: 1rem;

  column-count: 1;

  @media (min-width: 640px) {
    column-count: 2;
  }
  @media (min-width: 960px) {
    column-count: 3;
  }
  @media (min-width: 1280px) {
    column-count: 4;
  }
`;

const GalleryItem = styled.div`
  break-inside: avoid;
  margin-bottom: 1rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 0 4px #d9a5a1; /* Dusty Rose border */
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover div {
    opacity: 1;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  display: block;
  transition: transform 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(138, 75, 42, 0.7); /* Burnt Umber overlay */
  color: #fffaf0; /* Ivory text */
  opacity: 0;
  padding: 0.5rem;
  transition: opacity 0.3s ease;
`;

const OverlayText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;
