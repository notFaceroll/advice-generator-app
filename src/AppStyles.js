import styled from 'styled-components';
import dividerIconDesktop from './Assets/pattern-divider-desktop.svg';
import dividerIconMobile from './Assets/pattern-divider-mobile.svg';

export const Card = styled.main`
  background-color: hsl(217, 19%, 24%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  border-radius: 15px;
  text-align: center;
  padding: 3rem 2rem 4rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-height: 25vh;
  width: clamp(5rem, 40vw, 24rem);
  position: relative;

  @media screen and (max-width: 600px)
  { 
    width: clamp(5rem, 80vw, 15rem);
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export const AdviceTitle = styled.h1`
  color: hsl(150, 100%, 66%);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: 800;
`;

export const AdviceText = styled.p`
  color: hsl(193, 38%, 86%);
  font-size: clamp(1.5rem, 6.5vw, 2rem);
  margin: 0 1rem;
`;


export const Divider = styled.div`
  background-image: url(${dividerIconDesktop});
  background-size: cover;
  background-position: center;
  height: 15px;
  width: 100%;
  
  @media screen and (max-width: 600px) {
    background-image: url(${dividerIconMobile});
  }
`

export const Dice = styled.button`
  position: absolute;
  bottom: -6.5%;
  background-color: hsl(150, 100%, 66%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  height: 3.5rem;
  width: 3.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  :hover {
    box-shadow: 1px 0px 19px 4px hsl(150, 100%, 66%),
      inset 0px 0px 10px rgba(255, 255, 255, 0.5);
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  :after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid hsl(150, 100%, 66%);
    border-color: hsl(193, 38%, 86%) transparent hsl(193, 38%, 86%) transparent;
    animation: spinner 1.2s linear infinite;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
