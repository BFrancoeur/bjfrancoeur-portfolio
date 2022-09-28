import styled from 'styled-components';

export const AboutMe = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto; 
    padding: 6.5rem 0;
    background-color: #010016;
`;

export const AboutMeLeft = styled.div`
    flex: 1 0 50%;
    padding-left: 10%;
`;

export const AboutMeTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
`;

export const AboutMeRole = styled.h3`
    color: #fff;
    font-size: 3rem;
    font-weight: 300;
    line-height: 2em;
    margin-bottom: 2rem;
`;

export const AboutMeDivider = styled.hr`
    width: 6rem;
    color: #fff;
`;

export const AboutMeRight = styled.div`
    flex: 1 0 50%;
    padding-right: 10%;
`;
