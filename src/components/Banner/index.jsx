import styled from 'styled-components';
import homeBanner from '../../assets/images/home-banner.png';

const BannerWrapper = styled.div`
    width: 100%;
    height: 223px;
    border-radius: 25px;
    background-image: url(${homeBanner});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin-bottom: 35px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
    }

    @media (max-width: 768px) {
        height: 120px;
    }
`;

const BannerTitle = styled.h1`
    position: relative;
    z-index: 1;
    color: #fff;
    font-size: 48px;
    font-weight: 500;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    text-align: center;

    @media (max-width: 600px) {
        font-size: 24px;
        padding: 0 10px;
    }
`;

export default function Banner() {
    return (
        <BannerWrapper>
            <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
        </BannerWrapper>
    );
}
