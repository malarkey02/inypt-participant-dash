import "../../styles/onboarding.css";
import NavigateLink from "./Navlink";
import { useHistory } from 'react-router-dom';


function Onboard() {
  //embed link from props?
  // again, you handle db side so this upto you

 
  //Function for when video ends

  // const[lessonURL, setLessonURL] = useState('https://www.youtube.com/embed/oHdliuRaP04?rel=0;&autoplay=1')

  const history = useHistory();
  
  const pathname = window.location.pathname;
  const lessonNum = pathname.substring((pathname.lastIndexOf('n')+1), pathname.length);

  let lessonURL = "https://www.youtube.com/embed/4xcVwTahfuI?rel=0;&autoplay=1"
  
  switch(lessonNum){
    case '1': 
    lessonURL = 'https://www.youtube.com/embed/4xcVwTahfuI?rel=0;&autoplay=1'
    break;

    case '2': 
    lessonURL = 'https://www.youtube.com/embed/-U4kbNHzoz8?rel=0;&autoplay=1'
    break;

    case '3': 
    lessonURL = 'https://www.youtube.com/embed/eWYiTwlQ2rM?rel=0;&autoplay=1'
    break;

    case '4': 
    lessonURL = 'https://www.youtube.com/embed/K4Myp4ZOhjk?rel=0;&autoplay=1'
    break;

    default: 
    lessonURL = 'https://www.youtube.com/embed/4xcVwTahfuI?rel=0;&autoplay=1'
  }





  document.body.style='padding: 5%'
  return (
    
    <div className="video-container">
      <div className="academy-navbar-onboard">
                <h2 className="navbar-logo-onboard">
                  Introduction  <span className="logo-boldening">  Module </span>
                  
                </h2>
                <span className="navbar-back" onClick={()=>{history.push('/academy')}}>  	&lt; Back to Academy</span>
                
            </div>
      <div className="video-embed">
        <iframe
          name="onboarding-video"
          id="onboarding-video"
          // width="560"
          // height="315"
          src={lessonURL}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="nav-pane">
        {/* show list of links... here*/}
        <NavigateLink
          description="The World of IYPT"
          duration="3 mins"
          src="https://www.youtube.com/embed/4xcVwTahfuI?rel=0;&autoplay=1"
        />

        <NavigateLink
          description="Physics Fight - Formats"
          duration="3 mins"
          src="https://www.youtube.com/embed/-U4kbNHzoz8?rel=0;&autoplay=1"
        />

        <NavigateLink
          description="Presenting a solution - Reporting"
          duration="4 mins"
          src="https://www.youtube.com/embed/eWYiTwlQ2rM?rel=0;&autoplay=1"
        />

        <NavigateLink
          description="Critiquing a solution - Opposition"
          duration="5 mins"
          src="https://www.youtube.com/embed/K4Myp4ZOhjk?rel=0;&autoplay=1"
        />
        {/* "description" and "duration" values from YT api i think */}
      </div>
    </div>
  );
}

export default Onboard;

