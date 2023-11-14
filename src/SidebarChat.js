import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import db from "./firebase";
import { Link } from "react-router-dom";
const SidebarChat = ({ addNewChat, name,id }) => {
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName){
        db.collection('rooms').add({
          name: roomName,
        })
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
    <div className="sidebarChat flex p-5 cursor-pointer border-b border-b-[#f6f6f6] hover:bg-[#ebebeb] duration-100">
      <AccountCircleIcon />
      <div className="sidebarChatInfo ml-4">
        <h2 className="text-base mb-2 font-bold">{name}</h2>
        <p>Last message...</p>
      </div>
    </div>
    </Link>
  ) : (
    <div
      onClick={createChat}
      className="sidebarChat flex p-5 cursor-pointer border-b border-b-[#f6f6f6] hover:bg-[#ebebeb] duration-100">
      <h2 className="text-2xl mb-2 font-bold ">Add new Chat</h2>
    </div>
  );
};

export default SidebarChat;
