import React from "react";

const Input = ({ onSendMessage, updateMessageValue, currentMessageValue }) => {
  const onChange = (event) => {
    updateMessageValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onSendMessage(currentMessageValue);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        className="input-msg"
        onChange={onChange}
        value={currentMessageValue}
        type="text"
        placeholder="Enter your message and press ENTER"
        autoFocus={true}
      />
      <button className="btn-message" type="submit">
        Send
      </button>
    </form>
  );
};

export default Input;
