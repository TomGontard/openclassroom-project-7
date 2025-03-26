import { useState } from 'react'
import arrowSvg from '../assets/images/up-arrow.svg'
import styled from 'styled-components';

export const CollapseWrapper = styled.div`
  width: 100%;
`

export const CollapseItem = styled.div`
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
`

export const CollapseTitle = styled.button`
  background-color: #FF6060;
  color: white;
  font-size: 24px;
  font-weight: 500;
  padding: 10px 20px;
  width: 100%;
  text-align: left;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`

export const ArrowIcon = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.3s;
  transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
`

export const CollapseContent = styled.div`
  background-color: #F6F6F6;
  color: #FF6060;
  padding: 20px;
  font-size: 24px;
  line-height: 1.4;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`

export default function Collapse({ data }) {
  const [activeIndexes, setActiveIndexes] = useState([])

  const handleToggle = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter(i => i !== index))
    } else {
      setActiveIndexes([...activeIndexes, index])
    }
  }

  return (
    <CollapseWrapper>
      {Object.entries(data).map(([title, content], index) => {
        const isOpen = activeIndexes.includes(index)

        return (
          <CollapseItem key={title}>
            <CollapseTitle onClick={() => handleToggle(index)}>
              {title}
              <ArrowIcon
                src={arrowSvg}
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                alt="Flèche"
              />
            </CollapseTitle>
            {isOpen && (
              <CollapseContent>
                {content}
              </CollapseContent>
            )}
          </CollapseItem>
        )
      })}
    </CollapseWrapper>
  )
}
