import React from 'react';
import styled from 'styled-components';

import dividerIcon from './images/pattern-divider-desktop.svg';
import diceIcon from './images/icon-dice.svg';

function App() {
  const Card = styled.div`
    background-color: hsl(217, 19%, 24%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
    text-align: center;
    padding: 0 2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    min-height: 35vh;
    width: clamp(5rem, 40vw, 24rem);

    img {
      max-width: 100%;
      display: block;
    }
  `;

  const Dice = styled.div`
    transform: translateY(1.75rem);
    background-color: hsl(150, 100%, 66%);
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .2s ease;
    :hover {
      box-shadow: 1px 0px 19px 4px hsl(150, 100%, 66%),
        inset 0px 0px 10px rgba(255, 255, 255, 0.5);
    }
  `;

  const AdviceTitle = styled.h1`
    color: hsl(150, 100%, 66%);
    font-size: 1rem;
    margin-top: 2rem;
  `;

  const AdviceText = styled.p`
    font-size: 2rem;
    color: hsl(193, 38%, 86%);
  `;
  return (
    <Card>
      <AdviceTitle>Advice #{/* Advice ID goes here */}</AdviceTitle>
      <AdviceText>Advice Text {/* Advice text goes here */}</AdviceText>
      <div>
        <img src={dividerIcon} alt="" />
      </div>
      <Dice>
        <img src={diceIcon} alt="" />
      </Dice>
    </Card>
  );
}

export default App;
