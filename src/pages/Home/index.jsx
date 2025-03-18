import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import styled from 'styled-components'
import homeBanner from '../../assets/images/home-banner.png'

const HomeWrapper = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
`

export default function HomePage() {
  return (
    <HomeWrapper>
      <Banner source={homeBanner}>
        Chez vous, partout et ailleurs
      </Banner>
      <Gallery />
    </HomeWrapper>
  )
}
