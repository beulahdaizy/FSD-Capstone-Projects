import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  // Function to format timestamp into a readable format
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000); // Convert Firestore timestamp to JavaScript Date object
    return date.toLocaleString(); // Format date into a readable format
  };

  // Conditionally apply CSS class based on the message sender
  const senderClass = message.senderId === currentUser.uid ? "owner" : "other";

  return (
    <div ref={ref} className={`message ${senderClass}`}>
      <div className={`messageInfo ${senderClass}`}>
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{formatTimestamp(message.date)}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};
export default Message;
