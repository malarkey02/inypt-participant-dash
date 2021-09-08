import React from "react";
const download = require("downloadjs");

function Download(){

    /* 
        1. Have a button that says download files
        2. Render the download all zip button only after the res message from the server is successful
        3. handle the onclick events appropriately
    */ 
    const PORT = process.env.PORT || 8081;


    async function createAllZip(){
            
            return fetch(`http://localhost:${PORT}/createzip`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                },
              })
                .then(data => data.json())
               
    }





const handleDownload = async () => {
  const res = await fetch(`http://localhost:${PORT}/downloadzip`);
  const blob = await res.blob();
  download(blob, "test");
}

   

    const onAllClick = async () => {
        // e.preventDefault();
        const responseToken = await createAllZip();
        console.log(responseToken);
        
      }

    

    return (
        <div className="download-page-wrapper">
            
            <div className="download-text-wrapper">
                <h2>
                    Super Admin Dashboard
                </h2>
                <p>
                    Welcome to the dashboard. This will later be developed such that you can view presentations before downloading them. 
                    For this moment, we will use the download all feature. For the current load and workflow, only one of the super admins -
                    Shashi, Harsh, or Pranav - need to download all, and store this into a secure cloud (gdrive) folder. 
                    We'll scale functionality as we scale in growth. <b>Simply click the button below to find the zip download link</b>
                </p>
                
                <button className="download-all-btn" onClick={onAllClick}>Download All</button>
                <button className="zip-download" onClick={handleDownload}>Get Zip</button>


            </div>

        </div>
    )

    
}

export default Download