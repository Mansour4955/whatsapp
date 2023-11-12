import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
function App() {
  return (
    <div className="m-0 p-0 box-border bg-[#dadbd3] h-screen grid place-items-center">
      <div className="flex bg-[#ededed] h-[90vh] w-[90vw] shadow-shadowBody -mt-[50px] ">
        {/* Sidebar */}
        <Sidebar />
        {/* Chat */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
