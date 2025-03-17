import styled from 'styled-components'

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
    background-color: rgba(0,0,0,0.3);
    border-radius: 25px;
  }

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`

const BannerTitle = styled.h1`
  position: relative;
  color: white;
  font-size: 36px;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 0 10px;
  }
`

export default function Banner({ source, children }) {
  return (
    <BannerWrapper style={{ backgroundImage: `url(${source})` }}>
      {children && <BannerTitle>{children}</BannerTitle>}
    </BannerWrapper>
  )
}
