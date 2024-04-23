import React, { useState } from 'react';
import '../stylesheets/Dropdown.css';

function Dropdown({ onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['Silver', 'Black', 'Iron', 'Pink'];

  const selectOption = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown-container">
      <select onChange={(e) => selectOption(e.target.value)} value={selectedOption}>
        <option value="">Seleccionar Tema</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;