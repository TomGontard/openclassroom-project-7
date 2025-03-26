import styled from "styled-components"
import { Link } from "react-router-dom"
import { fonts } from "../utils/style/fonts"
import { ReactComponent as Logo } from "../assets/images/logo.svg"

const FooterWrapper = styled.footer`
    background-color: #000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 25px;
    margin-top: 20px;
    height: 200px;
    color: white;
    font-family: ${fonts.text};
`
const FooterImage = styled(Logo)`
    width: 120px;
    height: auto;
    margin: 20px 0px 20px 0px;

    path {
        fill: white;
    }
`

const FooterParagraph = styled.p`
    font-size: 24px;
    margin: 20px 0px 10px 0px;

    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`

export default function Footer() {
    return (
        <FooterWrapper>
            <Link to="/">
                <FooterImage src={Logo} alt="Kasa Logo" />
            </Link>
            <FooterParagraph>
                &copy; 2020 Kasa. All rights reserved
            </FooterParagraph>
        </FooterWrapper>
    );
}