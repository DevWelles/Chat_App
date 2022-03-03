import React from "react";
//import { Row, Col, Card } from "react-bootstrap";

const OnlineUsers = ({ onlineUsers }) => {
  //console.log(onlineUsers);

  const renderUsers = (user) => {
    let avatar;
    if (user.clientData.avatar.startsWith("#")) {
      avatar = (
        <span
          className="avatar"
          style={{ backgroundColor: user.clientData.avatar }}
        />
      );
    } else {
      avatar = <div className="avatar">{user.clientData.avatar}</div>;
    }

    return (
      <li key={user.id} className="d-flex align-items-center py-2 ">
        {avatar}
        <div className="username">{user.clientData.username}</div>
      </li>
    );
  };

  return (
    <div className="onlineUsers">
      <h3>Online Users:</h3>
      <ul className="p-0">{onlineUsers.map((user) => renderUsers(user))}</ul>
    </div>
  );
};

export default OnlineUsers;
