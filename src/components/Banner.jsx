import styled from 'styled-components'
import { fonts } from '../utils/style/fonts'

const BannerWrapper = styled.div`
  width: 100%;
  height: 223px;
  border-radius: 25px;
  background-image: url(${(props) => props.source});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 50px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 25px;
  }

  @media (max-width: 768px) {
    height: 120px;
    margin-bottom: 20px;
  }
`

const BannerTitle = styled.h1`
  position: relative;
  color: white;
  font-family: ${fonts.text};
  font-size: 48px;
  font-weight: 500;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0 10px;
    text-align: left;
  }
`

export default function Banner({ source, children }) {
  return (
    <BannerWrapper source={source}>
      {children && <BannerTitle>{children}</BannerTitle>}
    </BannerWrapper>
  )
}
