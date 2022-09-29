import styled from 'styled-components';

export const AboutMe = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto; 
    padding: 6.5rem 0;
    color: 3fff4e5;
    background-color: #010016;
`;

export const AboutMeLeft = styled.div`
    flex: 1 0 50%;
    padding-left: 10%;
`;

export const AboutMeTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff4e5;
`;



export const AboutMeRole = styled.h3`
    color: #fff4e5;
    font-size: 3rem;
    font-weight: 300;
    line-height: 2em;
    margin-bottom: 2rem;
`;

export const AboutMeOldRole = styled.span`
    color: #E02A00;
`;

export const AboutMeNewRole = styled.span`
    color: #61B0E0;
    font-weight: 500;
`;

export const AboutMeDivider = styled.hr`
    width: 6rem;
    color: #fff4e5;
`;

export const AboutMeRight = styled.div`
    flex: 1 0 50%;
    padding-right: 10%;
`;

export const AboutMeParagraph = styled.p`
    color: #fff4e5;
    font-size: 1.25rem;
    line-height: 1.6em;
    margin-bottom: 1.875rem;
`;

export const AboutMeEm = styled.em`
    color: #61B0E0;
`;

export const AboutMeParaLead = styled.b`
    color: #FAA500;
`;
