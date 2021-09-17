import "../../styles/onboard-nav-links.css";
import {useState} from "react";

function NavigateLink(props) {

  const[visited, setVisited] = useState(false);

  return (
    <div className="link-container">
      
      <div className="column-wrap">
       {/* <span className="checkbox"> <input type="checkbox" name="" id="" /> </span> */}
       <span className="span-for-desc">
            <a className="desc" onClick={()=>{setVisited(true)}} href={props.src} target="onboarding-video">
            {props.description}
            </a>
        </span>
        
          
        
      </div>
      <div className="duration">
            <img src="" />
            {props.duration}
          </div>
    </div>
  );
}

export default NavigateLink;