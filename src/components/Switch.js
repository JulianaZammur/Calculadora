import React, { useState } from 'react';
import "../stylesheets/Switch.css"

function Switch({ onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(prevState => !prevState);
    onChange(!isChecked);
  };

  return (
    <div className="toggle-switch" onClick={handleToggle}>
      <div className={`switch ${isChecked ? 'on' : 'off'}`}></div>
        Modo Cientifico
    </div>
  );
}

export default Switch;