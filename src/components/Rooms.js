import React from "react";
import NewRoom from "./NewRoom";
import { changeRoom } from "../redux/actions";
import { connect } from "react-redux";

const Rooms = ({
  currentRoom,
  changeRoom,
  rooms,
  handleRoomChange,
  inputNewRoomValue,
  addNewRoom,
  updateNewRoomValue,
  toggleModal,
  className,
}) => {
  const handleChange = async (event) => {
    console.log(currentRoom);
    await changeRoom(event.target.value);
    handleRoomChange(currentRoom);
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

function mapStateToProps(state) {
  return {
    currentRoom: state.currentRoom,
  };
}

const mapDispatchToProps = {
  changeRoom,
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
