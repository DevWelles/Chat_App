import React from "react";

const Messages = ({ currentMember, messages }) => {
  //console.log(messages);
  //console.log(currentMember);

  const renderMessage = (message) => {
    // console.log(currentMember.id);
    //console.log(message);

    let avatar;
    if (message.member.clientData.avatar.startsWith("#")) {
      avatar = (
        <span
          className="avatar"
          style={{ backgroundColor: message.member.clientData.avatar }}
        />
      );
    } else {
      avatar = <div className="avatar">{message.member.clientData.avatar}</div>;
    }
    const myMessage = currentMember.id === message.member.id;
    console.log(myMessage);
    const className = myMessage
      ? "Messages-message currentMember"
      : "Messages-message";

    return (
      <li className={className} key={message.id}>
        {avatar}
        <div className="Message-content">
          <div className="username">{message.member.clientData.username}</div>
          <div className="text">{message.text}</div>
        </div>
      </li>
    );
  };
  return (
    <ul className="Messages-list ">
      {messages.map((message) => renderMessage(message))}
    </ul>
  );
};

export default Messages;
