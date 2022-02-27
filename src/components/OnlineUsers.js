import React from "react";

const OnlineUsers = ({ onlineUsers }) => {
  //console.log(onlineUsers);
  return (
    <div>
      <h2>OnlineUsers:</h2>
      <ul className="onlineUsersBox">
        {onlineUsers.map((user) => (
          <li key={user.id}>{user.clientData.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default OnlineUsers;
