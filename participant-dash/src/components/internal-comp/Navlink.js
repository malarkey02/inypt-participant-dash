import "../../styles/onboard-nav-links.css";
// import {useState} from "react";
import tinyPlayButton from "../../image-assets/PlayButtonTiny.svg"

function NavigateLink(props) {

  // const[visited, setVisited] = useState(false);

  return (
    <div className="link-container">
      
      <div className="column-wrap">
       {/* <span className="checkbox"> <input type="checkbox" name="" id="" /> </span> */}
       <span className="span-for-desc">
            <a className="desc" href={props.src} target="onboarding-video">
            {props.description}
            </a>
        </span>
        
          
        
      </div>
      <div className="duration">
            <img src={tinyPlayButton} alt='' />
            {props.duration}
          </div>
    </div>
  );
}

export default NavigateLink;