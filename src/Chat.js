import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";
import db from "./firebase";
import { useSelector } from "react-redux";
import firebase from "firebase/compat/app";

const Chat = () => {
  const user = useSelector((state) => state.message.user.user);
  const { roomId } = useParams();
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);
  return (
    <div className="chat flex-[0.65] flex flex-col ">
      <div className="chatHeader py-3 px-5 flex items-center border-b border-b-gray-300">
        <AccountCircleIcon />
        <div className="chatHeaderInfo flex-1 pl-5">
          <h3 className="font-medium mb-[3px] text-lg">{roomName}</h3>
          <p className="text-[gray] ">
            Last seen{" "}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
        </div>
        <div className="chatHeaderRight flex justify-between min-w-[100px]">
          <span className="p-[2px] rounded-full active:bg-gray-300  duration-100">
            <SearchIcon />
          </span>
          <span className="p-[2px] rounded-full active:bg-gray-300  duration-100">
            <AttachFileIcon />
          </span>
          <span className="p-[2px] rounded-full active:bg-gray-300  duration-100">
            <MoreVertIcon />
          </span>
        </div>
      </div>

      <div className="chatBody flex-1 bg-whatsappImg bg-repeat bg-center p-8 overflow-y-scroll">
        {messages.map((message) => (
          <p
            className={`text-base relative p-[10px] bg-[#ffffff] rounded-[10px] w-fit mb-5 ${
              message.name === user.displayName && "chatReciever"
                ? "ml-auto !bg-[#dcf8c6]"
                : ""
            }`}>
            <span className="chatName absolute -top-4 text-xs font-extrabold">
              {message.name}
            </span>
            {message.message}
            <span className="chatTimesTamp text-[10px] ml-[10px]">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>

      <div className="chatFooter flex justify-between items-center h-16 border-t border-t-gray-300 ">
        <span className="p-[10px] text-[gray]">
          <InsertEmoticonIcon />
        </span>
        <form className="flex-1 flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="grow rounded-[30px] outline-none border-none p-[10px]"
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            <span className="p-[10px] text-[blue] ">
              <SendIcon />
            </span>
          </button>
        </form>
        <span className="p-[10px] text-[gray]">
          <MicIcon />
        </span>
      </div>
    </div>
  );
};

export default Chat;
