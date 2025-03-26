import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import styled from 'styled-components'
import { colors } from '../utils/style/colors'
import { fonts } from '../utils/style/fonts'

const HeaderWrapper = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    color: ${colors.primary};
    font-family: ${fonts.text};
    
    @media (max-width: 600px) {
        margin-bottom: 0px;
    }
`

const HomeLogo = styled.img`
    width: 210px;
    height: auto;

    @media only screen and (max-width: 600px) {
        width: 145px;
    }
`

const HeaderNav = styled.nav`
    ul {
        display: flex;
        list-style: none;
    }
    ul > * {
        margin-left: 50px;
    }
    ul > *:first-child {
        margin-left: 0;
    }
`

const HeaderLink = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
    font-size: 24px;
    font-weight: 500;
    
    &:hover {
        text-decoration: underline;
    }

    @media only screen and (max-width: 600px) {
        font-size: 16px;
    }
`


export default function Header() {
    return (
        <HeaderWrapper>
            <Link to="/">
                <HomeLogo src={logo} alt="logo" />
            </Link>
            <HeaderNav>
                <ul>
                    <HeaderLink to="/"> Accueil </HeaderLink>
                    <HeaderLink to="/about"> A Propos </HeaderLink>
                </ul>
            </HeaderNav>
        </HeaderWrapper>
  )
}