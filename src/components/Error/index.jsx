import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../utils/style/colors';
import { fonts } from '../../utils/style/fonts';

const ErrorWrapper = styled.div`
  color: ${colors.primary};
  font-family: ${fonts.text};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ErrorTitle = styled.h1`
  margin: 0;
  font-size: 288px;
  font-weight: 700;

  @media only screen and (max-width: 600px) {
      font-size: 96px;
  }
`

const ErrorSubtitle = styled.h2`
  margin-top: 60px;
  font-size: 36px;  
  font-weight: 500;

  @media only screen and (max-width: 600px) {
      font-size: 18px;
      margin-top: 10px;
  }
`

const ErrorLink = styled(Link)`
  margin-top: 100px;
  margin-bottom: 50px;
  font-size: 24px;
  color: ${colors.primary};

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`


export default function Error() {
    return (
        <ErrorWrapper>
            <ErrorTitle>404</ErrorTitle>
            <ErrorSubtitle>Oups! La page que vous demandez n'existe pas.</ErrorSubtitle>
            <ErrorLink visited={true} to="/">Retourner sur la page d’accueil</ErrorLink>
        </ErrorWrapper>
    );
};