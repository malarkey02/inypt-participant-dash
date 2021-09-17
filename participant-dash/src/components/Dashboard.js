import "../styles/dashboard.css"
import iconAcademy from "../image-assets/Learning.svg"
import iconUpload from "../image-assets/Upload.svg"
import iconDocument from "../image-assets/Document.svg"
import { useHistory } from 'react-router-dom';

function Dashboard(){
    //single line js code to change the BG when rendering a react component
    document.body.style = 'background: #d9d9d9; padding: 2.5% 15%;';
    const history = useHistory();

    return(
        
        <div className="dashboard-cards-wrapper" >
            <h2 className="greeting"> 
            Welcome, <strong> Daniel </strong>
            </h2>


            {/* Academy Card */}

                

                
                    <div className="dashboard-card academy-card" onClick={()=>{history.push('/academy')}}>
                        <h2 className="academy-card-title dashboard-card-title" >
                            InYPT Academy
                        </h2>
                        <div className="academy-icon">
                            <img src ={iconAcademy} alt=''>

                            </img>
                        </div>
                        <p className="dashboard-card-subtitle" >
                            UNLOCK THE TOUR
                        </p>

                        <p className="card-para" >
                            IYPT is not alike a traditional science competition or tournament - it's a whole new concept. 
                            We've created a learning module to help you get acquainted with the competition. 
                        </p>
                    </div>
                    {/* end of academy card */}

                    <div className="dashboard-card upload-card"  onClick={()=>{history.push('/upload')}}>
                        <div className="upload-icon">
                            <img src ={iconUpload} alt=''>

                            </img>
                        </div>
                        <h2 className="upload-card-title dashboard-card-title" >
                            File Upload
                        </h2>
                        <p className="card-para" >
                        We trust that you've worked hard for your submission. We'd love to see your work!
                        </p>
                    </div>
                
                

            <div className="dashboard-card resources-card">
                <h2 className="resources-card-title dashboard-card-title" >
                    IYPT Problems
                </h2> 
                <p className="dashboard-card-subtitle" >
                    UNLOCK THE TOUR
                </p>  
                <div className="resources-icon">
                    <img src ={iconDocument} alt=''>
                    </img>
                    <p className="readme-text">read.me</p>
                </div>
                
                <p className="card-para resources-para" >
                The team at InYPT has curated a resource that helps you with the problem statements.
                </p>


            </div>

            <div className="dashboard-card flash-card">
                <h2 className="flash-card-title dashboard-card-title" >
                    Flash Cards
                </h2> 
               
                
                <p className="card-para flash-para" >
                The team at InYPT has curated a resource that helps you with the problem statements.
                </p>


            </div>

        </div>

    )
}

export default Dashboard;