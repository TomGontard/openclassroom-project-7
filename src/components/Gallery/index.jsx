import logements from '../../assets/data/logements.json'
import Card from '../Card'
import styled from 'styled-components'

const GallerySection = styled.section`
    background-color: #F6F6F6;
    border-radius: 25px;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 40px;
    background: #F6F6F6;
    border-radius: 25px;


    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 10px;
        gap: 15px;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        padding: 0;
        background-color: transparent;
    }
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
