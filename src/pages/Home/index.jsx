import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import styled from 'styled-components';

const HomeWrapper = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 110px;
`

export default function HomePage() {
  return (
    <HomeWrapper>
      <Banner />
      <Gallery />
    </HomeWrapper>
  );
};
