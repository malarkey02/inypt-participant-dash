
import Upload from "./components/Upload.js"
import Download from "./components/Download.js";
import Dashboard from "./components/Dashboard.js";
import Academy from "./components/Academy.js";
import Onboard from "./components/internal-comp/Onboard.js"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from "./components/login/Login";
import ForgotPass from "./components/login/ForgotPass.js";
import useToken from "./components/login/useToken";
import Register from "./components/login/Register"



function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return (
    <BrowserRouter>
      <Switch>
      <Route path="/register">
        <div className="center-align">
        <Register />
        </div>
      </Route>
        
      <Route path="/forgot-password">
       <ForgotPass setToken={setToken} />
      </Route>
      <Route path="/">
       <Login setToken={setToken} />
      </Route>

    
    </Switch>
  </BrowserRouter>
    );
  }

  return (
    
      <BrowserRouter>
        <Switch>

        <Route path="/super-admin-pass:smartpranav123">
            <Download />
          </Route>
          <Route path="/academy">
            <Academy />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>

          <Route path="/onboard">
            <Onboard />
          </Route>
          
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/">
            <Dashboard username={token} />
          </Route>

          
        </Switch>
      </BrowserRouter>
    
   

  )

}

export default App