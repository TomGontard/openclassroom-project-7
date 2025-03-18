import styled from 'styled-components'
import enabledStar from '../../assets/images/star-enabled.svg'
import disabledStar from '../../assets/images/star-disabled.svg'

const Star = styled.img`
  width: 36px;
  height: 36px;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`

const RatingWrapper = styled.div`
  display: flex;
  gap: 5px;
`

export default function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <RatingWrapper>
      {stars.map((starNumber) => (
        <Star
          key={starNumber}
          src={starNumber <= rating ? enabledStar : disabledStar}
          alt={starNumber <= rating ? 'filled star' : 'empty star'}
        />
      ))}
    </RatingWrapper>
  )
}
