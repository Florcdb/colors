
import React, { useRef, useEffect } from 'react';

function BoxColor({ color, inputValue }) {
  const boxRef = useRef(null);

useEffect(() => {

  if (inputValue.toLowerCase() === color) {
    boxRef.current.style.backgroundColor = color;
    boxRef.current.textContent = `Yes, I am a ${color} color`;
  } else {
    boxRef.current.style.backgroundColor = 'transparent';
    boxRef.current.textContent = `No, I am not a ${inputValue} color`;
  }
}, [inputValue, color]);


  return (
    <>
 <div ref={boxRef} className="box" />
    </> 
  )
}
export default BoxColor;  
