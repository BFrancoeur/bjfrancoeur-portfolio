import styled from 'styled-components';
import image from '../../assets/images/hero-bg-1.jpg';

export const HeroSection = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 52rem;
    background-image: url(${image});
    object-fit: cover;
    z-index: 0;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 52rem;
    background-color: rgba(0,0,0,0.8);
    z-index: 10;
`;

export const CtaContent = styled.div`
    position: relative;
    top: 50vh;
    transform: translateY(-75%);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items center;
    z-index: 999;
`;

export const PrimaryCtaMsg = styled.h1`
    font-size: 6rem;
    font-weight: 700;
    line-height: 1.4em;
    color: #fff;
    text-align: center;
`;

export const SupportingCtaMsg = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    line-height: 3em;
    color: #e0e0e0;
    text-align: center;
`;

export const PrimaryCtaButton = styled.button`
    color: #212121;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1em;
    padding: 1rem 2.4rem;
    background-color: #FAA500;
    transition: all .2s;

    &:hover {
        color: #fff;
        background-color: #193bff;
    }
`;