import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { Route, Switch, Router } from "react-router-dom";
function App() {
  return (
    <div className="m-0 p-0 box-border bg-[#dadbd3] h-screen grid place-items-center">
      <div className="flex bg-[#ededed] h-[90vh] w-[90vw] shadow-shadowBody -mt-[50px] ">
        <Router>
          <Switch>
            <Route path="/app">
              <Sidebar />
              <Chat />
            </Route>
            
            <Route path="/">
              <h1>Home Screen</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
