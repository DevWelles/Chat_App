import React from "react";

const Logut = ({ logOut }) => {
  return (
    <div>
      <button className="button-logout" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export default Logut;
