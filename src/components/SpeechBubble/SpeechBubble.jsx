// SpeechBubble.js
import React, {useState} from 'react';
import './SpeechBubble.css';


const SpeechBubble = ({ text, position }) => {
    
const [content, setContent] = useState('');
const handleInput = (e) => {
    // Update the content when the user types
    
    setContent(e.target.innerText);
    localStorage.setItem('bubbleText', JSON.stringify(content));
  };
  return (
    <div className={`speech ${position}`} id='editable-div' 
    contentEditable={true}
    onInput={handleInput}
    placeholder="Start typing..." spellCheck='false'>
    {content}
    </div>
  );
};

export default SpeechBubble;
