import logements from '../../assets/data/logements.json'
import Card from '../Card'
import styled from 'styled-components'

const GallerySection = styled.section`
  background-color: #F6F6F6;
  border-radius: 25px;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 50px;
  margin-bottom: 50px;
`

export default function Gallery() {
  return (
    <GallerySection>
      {logements.map(logement => (
        <Card
          key={logement.id}
          id={logement.id}
          image={logement.cover}
          title={logement.title}
        />
      ))}
    </GallerySection>
  )
}
