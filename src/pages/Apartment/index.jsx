import { useParams } from 'react-router-dom'
import logements from '../../assets/data/logements.json'
import styled from 'styled-components'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'

const ApartmentWrapper = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
`

const ApartmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
`

const ApartmentTitle = styled.h1`
  color: #FF6060;
  font-size: 36px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const ApartmentLocation = styled.p`
  color: #FF6060;
  font-size: 18px;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`

const Tag = styled.span`
  background-color: #FF6060;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`

const HostRatingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    margin-top: 15px;
  }
`

const HostWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const HostImage = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`

const HostName = styled.span`
  color: #FF6060;
  text-align: right;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const DetailsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export default function Apartment() {
  const { apartmentId } = useParams()
  const logement = logements.find((log) => log.id === apartmentId)

  if (!logement) return <div>Logement non trouvé.</div>

  return (
    <ApartmentWrapper>
      <Carousel pictures={logement.pictures} />

      <ApartmentHeader>
        <TitleSection>
          <ApartmentTitle>{logement.title}</ApartmentTitle>
          <ApartmentLocation>{logement.location}</ApartmentLocation>

          <TagContainer>
            {logement.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagContainer>
        </TitleSection>

        <HostRatingSection>
          <HostWrapper>
            <HostName>{logement.host.name}</HostName>
            <HostImage src={logement.host.picture} alt={logement.host.name} />
          </HostWrapper>

          <Rating rating={parseInt(logement.rating)} />
        </HostRatingSection>
      </ApartmentHeader>

      <DetailsSection>
        <Collapse data={{ Description: logement.description }} />
        <Collapse data={{ Équipements: logement.equipments.join(', ') }} />
      </DetailsSection>
    </ApartmentWrapper>
  )
}
