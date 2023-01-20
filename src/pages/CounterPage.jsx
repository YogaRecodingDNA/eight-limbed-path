import Button from '../components/Button';
import useUsefulHook from '../hooks/use-usefulHook';

const CounterPage = ({ initialCount }) => {

  const { count, handleClick } = useUsefulHook(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={handleClick}>
        Increment
      </Button>
    </div>
  )
}

export default CounterPage;