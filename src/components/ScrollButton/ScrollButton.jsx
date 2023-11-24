import React from 'react';
import './ScrollButton.css'
const ScrollButton = () => {
  const scrollByAmount = 550; // Set the amount by which you want to scroll

  const handleScrollClick = () => {
    window.scrollBy({
      top: scrollByAmount,
      behavior: 'smooth', // Optional: adds smooth scrolling effect
    });
  };

  return (
    <button onClick={handleScrollClick} className='scrollBtn'>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
    </button>
  );
};

export default ScrollButton;
