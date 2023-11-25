import { useState, useEffect, useRef } from 'react'
import './App.css'
import axios from 'axios'
import { Buffer } from 'buffer';
import Navbar from './components/Navbar/Navbar';
import ComicStrip from "./components/ComicStrip/ComicStrip"
import ScrollButton from './components/ScrollButton/ScrollButton';
import html2canvas from 'html2canvas';

function App() {
  const [data, setData] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [imageBytesArray, setImageBytesArray] = useState([]);
  const [bubbleText, setBubbleText] = useState('');

  const API_URL = process.env.REACT_APP_API_URI;
  const headers = {
    "Accept": "image/png",
    "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
    "Content-Type": "application/json"
  };


  const fetchData = async (prompt) => {
    try {
      const response = await axios.post(API_URL, {
        "inputs": prompt,
      }, {
        headers: headers,
        responseType: 'arraybuffer', // Set the response type to arraybuffer
      });

      const imageBytes = Buffer.from(response.data, 'binary').toString('base64');
      const imgUrl = 'data:image/png;base64,' + imageBytes;
      // newImageBytesArray.push(imgUrl);
      setImageBytesArray(prevResults => [...prevResults, imgUrl]);
      
      localStorage.setItem('imageResults', JSON.stringify([...imageBytesArray, imgUrl]));
      // console.log(imgArr[0])
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false)
  };
  useEffect(() => {
    // Load data from localStorage on component mount
    const savedResults = localStorage.getItem('imageResults');
    if (savedResults) {
        setImageBytesArray(JSON.parse(savedResults));
    }
}, []);
  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim() !== '') {
      fetchData(prompt);

      setLoading(true)
    }
    setPrompt('')
  };
  const clearComic = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload()
  }
  const divRef = useRef(null);

  const handleScreenshotClick = () => {
    if (divRef.current) {
      html2canvas(divRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'comic-strip.png';
        link.click();
      });
    }
    
  };
  return (
    <div className="App">
      <Navbar />
      <section className='top-div'>
        
      <button className='shareBtn' onClick={handleScreenshotClick}>Share</button>
      <div className="heading">
      <h1>Create Captivating Comics with Ease</h1>
      <h5>Turn Your Words into Vibrant Visual Stories using AI !</h5>
      <ScrollButton />
    </div>
      <input className="c-checkbox" type="checkbox" id="checkbox" />
      <div className="c-formContainer">
        <form
          className={"c-form " + (data ? "result-img" : "")}
          onSubmit={handleSubmit}
        >
          <input
            className="c-form__input"
            type="text"
            placeholder="Text to image"
            value={prompt}
            onChange={handleInputChange}
          />
          <label className="c-form__buttonLabel" htmlFor="checkbox">
            <button className="c-form__button" type="submit">
              Generate
            </button>
          </label>
          <label
            className="c-form__toggle"
            htmlFor="checkbox"
            data-title="Generate Image"
          ></label>
        </form>
        
        </div>
        <button type='submit' className='delete-btn' onClick={clearComic}>Clear Comic</button>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="c-formContainer">
          {error ? <h2>{error}</h2> :
            <div>
              
            </div>
          }
        </div>
      )}
      </section>
      {/* <img src={data} /> */}
      <div className='head' style={{background: '#111'}}>
        <h2 className='heading'>Your Comic Strip</h2>
      </div>
      <div ref={divRef} id='strip'>
      <ComicStrip  url1={imageBytesArray[0]} 
      url2={imageBytesArray[1]} 
      url3={imageBytesArray[2]} 
      url4={imageBytesArray[3]} 
      url5={imageBytesArray[4]} 
      url6={imageBytesArray[5]}
      url7={imageBytesArray[6]}
      url8={imageBytesArray[7]}
      url9={imageBytesArray[8]}
       />
       </div>
    </div>
  );
}

export default App
