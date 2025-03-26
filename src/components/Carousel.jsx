import { useState } from 'react';
import styled from 'styled-components';
import leftArrow from '../assets/images/left-arrow.svg';
import rightArrow from '../assets/images/right-arrow.svg';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 415px;
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 768px) {
    height: 255px;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Arrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
  padding: 10px;
  width: 96px;
  height: 120px;

  ${(props) => (props.direction === 'left' ? 'left: 10px;' : 'right: 10px;')};

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 60px;
  }
`;

const SlideCounter = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1rem;
`;

export default function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <CarouselContainer>
      <CarouselImage
        src={pictures[currentIndex]}
        alt={`slide ${currentIndex + 1}`}
      />

      {pictures.length > 1 && (
        <>
          <Arrow
            direction="left"
            src={leftArrow}
            alt="Précédent"
            onClick={prevSlide}
          />
          <Arrow
            direction="right"
            src={rightArrow}
            alt="Suivant"
            onClick={nextSlide}
          />
          <SlideCounter>
            {currentIndex + 1}/{pictures.length}
          </SlideCounter>
        </>
      )}
    </CarouselContainer>
  );
}
