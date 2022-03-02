import React from "react";
import { Button } from "react-bootstrap";

const Rooms = ({ rooms, changeRoom }) => {
  const handleChange = (event) => {
    const roomName = event.target.value;
    changeRoom(roomName);
    //console.log(roomName);
  };
  return (
    <div className="d-flex flex-column align-items-center onlineUsers">
      <h3>Rooms:</h3>
      <ul className="d-flex flex-column align-items-center">
        {rooms.map((room) => (
          <Button
            className="btn btn-dark btn-lg btn-block m-1"
            key={Math.random() * 10000}
            value={room}
            onClick={handleChange}
          >
            {room}
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
