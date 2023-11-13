import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import SidebarChat from "./SidebarChat";
import db from "./firebase";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(()=>{
 const unsubscribe = db.collection("rooms").onSnapshot(snapshot => (
  setRooms(snapshot.docs.map(doc => 
    ({
      id: doc.id,
      data: doc.data(),

    })
    ))
)
);
return ()=> {
  unsubscribe()
};
  },[])
  return (
    <div className="flex-[0.35] flex flex-col">
      <div className="sidebarHeader flex justify-between p-5 border-r border-r-gray-300 items-center">
        <AccountCircleIcon />
        <div className="sidebarHeaderRight flex items-center min-w-[10vw] justify-between gap-2">
          <span className="p-1 rounded-full bg-white active:bg-[#ededed] shadow-shadowButton shadow-gray-950 duration-100">
            <DonutLargeIcon />
          </span>
          <span className="p-1 rounded-full bg-white active:bg-[#ededed] shadow-shadowButton shadow-gray-950 duration-100">
            <ChatIcon />
          </span>
          <span className="p-1 rounded-full bg-white active:bg-[#ededed] shadow-shadowButton shadow-gray-950 duration-100">
            <MoreVertIcon />
          </span>
        </div>
      </div>
      <div className="sidebarSearch flex items-center bg-[#f6f6f6] p-[10px]">
        <div className="container flex items-center bg-white w-full h-9 rounded-[20px] px-2 ">
          <span className="text-gray-400 p-[10px] ">
            <SearchIcon />
          </span>
          <input
            className="border-none outline-none ml-2 text-base grow px-1 "
            type="text"
            placeholder="Search or start new chat"
          />
        </div>
      </div>
      <div className="sidebarChats bg-white flex-1">
        <SidebarChat addNewChat />
        {
          rooms.map(room => (
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          ))
        }
      </div> 
    </div>
  );
};

export default Sidebar;
