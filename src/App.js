import React, { useState, useEffect, useCallback } from 'react';
import {
  Card,
  Dice,
  AdviceTitle,
  AdviceText,
  LoadingSpinner,
  Divider,
} from './AppStyles';

import diceIcon from './images/icon-dice.svg';

const baseUrl = 'https://api.adviceslip.com/advice';

function App() {
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const setData = (data) => {
    setAdvice(data);
    setIsLoading(false);
  };

  const grabErrors = (err) => {
    setError(err);
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const data = await fetch(baseUrl);
    console.log(data);
    if (!data.ok) {
      return;
    }
    const json = await data.json();
    console.log(json);
    setData(json);
  }, []);

  useEffect(() => {
    fetchData().catch((error) => {
      grabErrors(error);
    });
  }, [fetchData]);

  let content =
    isLoading || !advice ? (
      <>
        <AdviceTitle>Advice #???</AdviceTitle>
        <LoadingSpinner />
      </>
    ) : (
      <>
        <AdviceTitle>Advice #{advice.slip.id}</AdviceTitle>
        <AdviceText>{advice.slip.advice}</AdviceText>
      </>
    );

  return (
    <Card>
      {error && <div>Error: {error.message} </div>}
      <>
        {content}
        <Divider />
        <Dice onClick={fetchData}>
          <img src={diceIcon} alt="" />
        </Dice>
      </>
    </Card>
  );
}

export default App;
