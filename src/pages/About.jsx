import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import aboutData from '../assets/data/about.json'
import styled from 'styled-components'
import bannerImage from '../assets/images/about-banner.png'

const AboutWrapper = styled.main`
    padding: 0 100px;
    @media (max-width: 768px) {
        padding: 20px;
    }
`

const CollapseContainer = styled.div`
  max-width: 1024px;  // Limiter la largeur des collapses
  margin: 0 auto;  // Centrer les collapses
`

export default function AboutPage() {
  return (
    <AboutWrapper>
          <Banner source={bannerImage} />
          <CollapseContainer>
            <Collapse data={aboutData} />
          </CollapseContainer>
    </AboutWrapper>
  )
}
