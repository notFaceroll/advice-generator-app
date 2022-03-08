import { useState, useEffect, useCallback } from 'react';

const baseUrl = 'https://api.adviceslip.com/advice';

const useFetch = () => {
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
    if (!data.ok) {
      return;
    }
    const json = await data.json();
    setData(json);
  }, []);

  useEffect(() => {
    fetchData().catch((error) => {
      grabErrors(error);
    });
  }, [fetchData]);

  return { advice, isLoading, error, fetchData };
};

export default useFetch;