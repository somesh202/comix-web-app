import './ComicStrip.css'
import SpeechBubble from '../SpeechBubble/SpeechBubble';
function ComicStrip(props) {


return (
<article class="comic">
<hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    width: '100%',
    position: 'relative',
    borderColor : '#000000'
}}/>
  <div className="panel">
  <SpeechBubble text={props.content1} position={props.pos1}/>
    <img src={props.url1} alt=''/>
  </div>
  <div className='vertical-line'></div>
  <div className="panel">
  <SpeechBubble text={props.content2} position={props.pos2}/>
    <img src={props.url2} alt=''/>
  </div>
  <div className='vertical-line1'></div>
  <div className="panel">
  <SpeechBubble text={props.content3} position={props.pos3}/>
    <img src={props.url3} alt=''/>

  </div>
  <hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    width: '100%',
    position: 'relative',
    borderColor : '#000000'
}}/>
  <div className="panel">   <SpeechBubble text={props.content4} position={props.pos4}/><img src={props.url4} alt=''/>
 
  </div>
  
  <div className="panel"><SpeechBubble text={props.content5} position={props.pos5}/><img src={props.url5} alt=''/></div>
  <div className="panel"><SpeechBubble text={props.content6} position={props.pos6}/><img src={props.url6} alt=''/></div>
  <hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    width: '100%',
    position: 'relative',
    borderColor : '#000000'
}}/>
  <div className="panel"><SpeechBubble text={props.content7} position={props.pos7}/><img src={props.url7} alt=''/></div>
  <div className="panel"><SpeechBubble text={props.content8} position={props.pos8}/><img src={props.url8} alt=''/></div>
  <div className="panel">
  <SpeechBubble text={props.content9} position={props.pos9}/>
    <img src={props.url9} alt=''/>
  </div>
  <div className="panel">
  <SpeechBubble text={props.content10} position={props.pos10}/>
    <p class="text bottom-right">THE END</p>
    <img src={props.url10} alt=''/>
  </div>
</article>
);
}

export default ComicStrip;