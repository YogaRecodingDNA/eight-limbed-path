import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';

const Dropdown = ({ value, onChange, options }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divRef.current) { // Return if no reference
        return;
      }
      // If click is outside of component then close dropdown menu
      if (!divRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    // Listen for any click outside of component
    document.addEventListener('click', handler, true);

    return () => { // Cleanup \ Remove listener
      document.removeEventListener('click', handler);
      
    };
  }, []); // Cleanup function called automatically when component is removed from screen
  
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
  const handleOptionClick = (option) => {
    setIsMenuOpen(false);
    onChange(option);
  }

  const renderedOptions = options.map( option => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divRef} className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isMenuOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  )
}

export default Dropdown;

// -------- Event Handlers ------------
// Clicks Drop Down (event)(1)
// Clicks option (event)(2)

// ----------- State ------------
// Menu option opens and closes (state)(1)

// Item can be selected (state)(2)