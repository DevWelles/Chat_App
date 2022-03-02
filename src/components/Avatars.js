import React from "react";
import { avatars } from "../util/avatars";

const Avatars = ({ selectAvatar }) => {
  function renderAvatars(avatar, index) {
    return (
      <li className="reg-form__avatar" key={index}>
        <button className="login-avatars" onClick={selectAvatar} value={avatar}>
          {avatar}
        </button>
      </li>
    );
  }

  return (
    <ul className="reg-form__avatar-list">
      {avatars.map((avatar, index) => renderAvatars(avatar, index))}
    </ul>
  );
};

export default Avatars;
