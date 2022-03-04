import React from "react";

const NewRoom = ({
  inputNewRoomValue,
  addNewRoom,
  updateNewRoomValue,
  toggleModal,
  className,
}) => {
  const handleChange = (event) => {
    const userName = event.target.value;
    updateNewRoomValue(userName);
  };

  const handleSubmit = (event) => {
    const currentClassName = "closeModal";
    event.preventDefault();
    addNewRoom();
    toggleModal(currentClassName);
  };

  const showModal = () => {
    const currentClassName = "myModal";
    toggleModal(currentClassName);
  };
  const modal = (
    <div className={className}>
      <div className="myModal-content">
        <form className="row justify-content-center" onSubmit={handleSubmit}>
          <h2 className="mb-4 text-center">Enter room name:</h2>

          <div className="row mb-4 text-center">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Room name"
              value={inputNewRoomValue}
              onChange={handleChange}
              autoFocus={true}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block ">
            Create new room
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <button onClick={showModal} className="newRoomBtn">
        Create New Room
      </button>
      {modal}
    </div>
  );
};

export default NewRoom;
