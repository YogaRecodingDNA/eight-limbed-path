import { useState, useEffect } from 'react';
/* Custom Hook Steps
1. Make a function called 'useCustomHook' in your component
2. Find all non-JSX expressions that refer to 1-2 related pieces of state
3. Cut them all out, paste them into 'useCustomHook'
4. Find all errors labeled 'not defined' in your component
5. In you hook, return an object that contains the variables the component needs
6. In the component, call your hook. Destructure the properties the component needs.
7. Find all errors labeled 'not defined' in the hook. Pass the missing variables
   as arguments to the hook.
8. Rename the hook to something more meaningful.
9. Rename returned properties to something more descriptive.
*/

const useUsefulHook = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  }

  return {
    count,
    handleClick // Use more descriptive name such as "increment"
  }
}

export default useUsefulHook;