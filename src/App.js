import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="m-0 p-0 box-border bg-[#dadbd3] h-screen grid place-items-center">
      <div className="flex bg-[#ededed] h-[90vh] w-[90vw] shadow-shadowBody -mt-[50px] ">
        <Sidebar />
        {/* <Router> */}
          <Routes>
            <Route path="/" element={<Chat />}></Route>

            <Route
              path="*"
              element={
                <h1 className="font-bold text-3xl text-red-400 mx-auto mt-10">
                  Page Not Found
                </h1>
              }></Route>

            <Route path="/rooms/:roomId" element={<Chat />}></Route>
          </Routes>
        {/* </Router> */}
      </div>
    </div>
  );
};

export default App;
