
import Upload from "./components/Upload.js"
import Download from "./components/Download.js";
import Dashboard from "./components/Dashboard.js";
import Academy from "./components/Academy.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {

  

  return (
    
      <BrowserRouter>
        <Switch>

        <Route path="/download">
            <Download />
          </Route>
          <Route path="/academy">
            <Academy />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          
          <Route path="/">
            <Dashboard />
          </Route>

          
        </Switch>
      </BrowserRouter>
    
   

  )

}

export default App