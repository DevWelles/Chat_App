import React from "react";

const Rooms = ({ rooms, changeRoom }) => {
  const handleChange = (event) => {
    changeRoom(event.target.value);
    //console.log(roomName);
  };
  return (
    <div className="onlineUsers">
      <h3>Rooms:</h3>
      <ul className="roomsList">
        {rooms.map((room) => (
          <button
            className="button-rooms"
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
