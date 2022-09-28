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
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+50,000000+72,010016+100&0.8+0,1+100 */
background: -moz-linear-gradient(top,  rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.94) 72%, rgba(1,0,22,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.9) 50%,rgba(0,0,0,0.94) 72%,rgba(1,0,22,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.9) 50%,rgba(0,0,0,0.94) 72%,rgba(1,0,22,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc000000', endColorstr='#010016',GradientType=0 ); /* IE6-9 */


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