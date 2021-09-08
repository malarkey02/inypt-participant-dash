
import Upload from "./Upload.js"
import Download from "./Download.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {

  

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>

        

        <Route path="/download">
            <Download />
          </Route>
          <Route path="/">
            <Upload />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
   

  )

}

export default App