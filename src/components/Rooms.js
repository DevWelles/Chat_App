import React from "react";

const Rooms = ({ rooms, changeRoom }) => {
  const handleChange = (event) => {
    const roomName = event.target.value;
    changeRoom(roomName);
    //console.log(roomName);
  };
  return (
    <div>
      <h2>Rooms:</h2>
      <ul className="onlineUsersBox">
        {rooms.map((room) => (
          <button
            className="user"
            key={Math.random() * 10000}
            value={room}
            onClick={handleChange}
          >
            {room}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
