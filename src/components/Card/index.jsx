import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CardWrapper = styled.li`
  position: relative;
  width: 100%;
  height: 340px;
  border-radius: 10px;
  overflow: hidden;
  list-style: none;
  cursor: pointer;

  background-size: cover;
  background-position: center;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  }
`

const CardTitle = styled.h2`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  z-index: 1;
`

export default function Card({ id, image, title }) {
    const navigate = useNavigate();
  return (
      <CardWrapper
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => navigate(`/apartment/${id}`)}>
      <Link to={`/apartment/${id}`}>
        <CardTitle>{title}</CardTitle>
      </Link>
    </CardWrapper>
  )
}
