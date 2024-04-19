import React, { useState } from 'react';
import BoxColor from './BoxColor';
import '../App.css';

function MyForm() {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  return (
    <> 
    <input type="text"
    value={inputValue}
    onChange={handleChange}
    placeholder="Choose a color..."
  />
  <div className="container">
    {colors.map((color, index) => (
      <BoxColor key={index} color={color} inputValue={inputValue} />
    ))}
  </div>
  </>
  );
}

export default MyForm;