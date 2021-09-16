import "../styles/academy.css"
import iconVideo from "../image-assets/PlayButton.svg"

function Academy(){
    document.body.style = 'background: #d9d9d9; padding: 10% 20%;';

    return (
        <div>
            <div className="academy-navbar">
                <h2 className="navbar-logo">
                    InYPT <span className="logo-boldening"> Academy </span>
                </h2>
            </div>

            <div className="onboarding-modules-text">
                <h1 className="modules-text-heading">Onboarding Modules </h1>
                <p className="modules-text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet,
                    ipsum ac ultrices tempus, urna enim mattis est, vitae suscipit mauris sapien et tortor. </p>

            </div>  

            <div className="module-div introduction-module">
                <h2 className="module-div-heading">Introduction to IYPT</h2>
                {/* each row will have 2 columns worth of lessons */}
                <div className="lesson-row"> 
                    <div className="first-column column-lesson"> <span className="lesson-icon-span"> <img src={iconVideo} alt=''></img> </span> <span className="lesson-name"> The World of IYPT</span> </div>
                    <div className="second-column column-lesson"> <span className="lesson-icon-span"> <img src={iconVideo} alt=''></img> </span> <span className="lesson-name">Donec a est non arcu </span> </div>
                </div>

                <div className="lesson-row"> 
                    <div className="first-column column-lesson"> <span className="lesson-icon-span"> <img src={iconVideo} alt=''></img> </span> <span className="lesson-name">Pellentesque gravida </span> </div>
                    <div className="second-column column-lesson"> <span className="lesson-icon-span"> <img src={iconVideo} alt=''></img> </span> <span className="lesson-name">Arividerchi </span> </div>
                </div>
            </div>

            <div className="module-div introduction-module">
                <h2 className="module-div-heading">Introduction to IYPT</h2>
                {/* each row will have 2 columns worth of lessons */}
                <div className="lesson-row"> 
                    <div className="first-column column-lesson"> <span className="lesson-icon-span"> <img src={iconVideo} alt=''></img> </span> <span className="lesson-name"> The World of IYPT</span> </div>
                    <div className="second-column column-lesson"> <span className="lesson-icon-span"> <img src={iconVideo} alt=''></img> </span> <span className="lesson-name">Donec a est non arcu </span> </div>
                </div>

                <div className="lesson-row"> 
                    <div className="first-column column-lesson"> <span className="lesson-icon-span"> <img src={iconVideo} alt=''></img> </span> <span className="lesson-name">Pellentesque gravida </span> </div>
                    <div className="second-column column-lesson"> <span className="lesson-icon-span"> <img src={iconVideo} alt=''></img> </span> <span className="lesson-name">Arividerchi </span> </div>
                </div>
            </div>

        </div>
    )
}

export default Academy;