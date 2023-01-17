import { useState } from 'react';
import Dropdown from "./components/Dropdown";

const App = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  }

  const options = [
    { label: 'Yama', value: 'yama' },
    { label: 'Niyama', value: 'niyama' },
    { label: 'Asana', value: 'asana' },
    { label: 'Pranayama', value: 'pranayama' }
  ];

  return (
    <div className="flex">
      <Dropdown value={selection} onChange={handleSelect} options={options} />
      <Dropdown value={selection} onChange={handleSelect} options={options} />
    </div>
  );
}

export default App;