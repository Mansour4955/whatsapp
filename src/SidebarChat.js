import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SidebarChat = ({ addNewChat }) => {
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName){
        
    }
  };
  return !addNewChat ? (
    <div className="sidebarChat flex p-5 cursor-pointer border-b border-b-[#f6f6f6] hover:bg-[#ebebeb] duration-100">
      <AccountCircleIcon />
      <div className="sidebarChatInfo ml-4">
        <h2 className="text-base mb-2 font-bold">Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div
      onClick={createChat}
      className="sidebarChat flex p-5 cursor-pointer border-b border-b-[#f6f6f6] hover:bg-[#ebebeb] duration-100">
      <h2 className="text-2xl mb-2 font-bold ">Add new Chat</h2>
    </div>
  );
};

export default SidebarChat;
