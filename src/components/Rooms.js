import React from "react";
import NewRoom from "./NewRoom";

const Rooms = ({
  rooms,
  changeRoom,
  inputNewRoomValue,
  addNewRoom,
  updateNewRoomValue,
  toggleModal,
  className,
}) => {
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
      <NewRoom
        inputNewRoomValue={inputNewRoomValue}
        addNewRoom={addNewRoom}
        updateNewRoomValue={updateNewRoomValue}
        toggleModal={toggleModal}
        className={className}
      />
    </div>
  );
};

export default Rooms;
