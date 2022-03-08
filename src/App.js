import {
  Card,
  Dice,
  AdviceTitle,
  AdviceText,
  LoadingSpinner,
  Divider,
} from './AppStyles';
import useFetch from './Hooks/useFetch';
import diceIcon from './Assets/icon-dice.svg';


function App() {
  
  const { advice, isLoading, error, fetchData } = useFetch();

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
