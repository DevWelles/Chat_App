export const UPDATE_USERNAME = "UPDATE_USERNAME"; //updateam u stanju inputLoginValue na ono sto user tipka u inputLogina
export const LOGIN = "LOGIN";
export const UPDATE_MEMBER = "UPDATE_MEMBER";
export const CHANGE_ROOM = "CHANGE_ROOM";
export const ADD_NEW_ROOM = "ADD_NEW_ROOM";
export const UPDATE_ONLINE_USERS = "UPDATE_ONLINE_USERS";
export const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
export const UPDATE_MESSAGE_VALUE = "UPDATE_MESSAGE_VALUE"; //updateam u stanju currentmessage na ono sto user tipka u input za slanje nove por
export const ADD_NEW_USER = "ADD_NEW_USER";
export const SET_AVATAR = "SET_AVATAR";
export const RESET_STATE = "RESET_STATE";
export const UPDATE_NEW_ROOM_VALUE = "UPDATE_NEW_ROOM_VALUE"; //updateam u stanju inputNewRoomValue na ono sto user tipka u input za ime nove sobe
export const SET_CLASSNAME = "SET_CLASSNAME";

export const updateUsername = (inputLoginValue) => {
  return { type: UPDATE_USERNAME, payload: inputLoginValue };
};
export const login = () => {
  return { type: LOGIN };
};
export const updateMember = (member) => {
  return { type: UPDATE_MEMBER, payload: member };
};
export const changeRoom = (room) => {
  return { type: CHANGE_ROOM, payload: room };
};
export const addNewRoom = () => {
  return { type: ADD_NEW_ROOM };
};
export const updateNewRoomValue = (newRoomName) => {
  return { type: UPDATE_NEW_ROOM_VALUE, payload: newRoomName };
};
export const updateOnlineUsers = (onlineUsers) => {
  return { type: UPDATE_ONLINE_USERS, payload: onlineUsers };
};
export const addNewMessage = (newMessage) => {
  return { type: ADD_NEW_MESSAGE, payload: newMessage };
};
export const updateMessageValue = (inputMessageValue) => {
  return { type: UPDATE_MESSAGE_VALUE, payload: inputMessageValue };
};
export const addNewUser = (newUser) => {
  return { type: ADD_NEW_USER, payload: newUser };
};
export const setAvatar = (avatar) => {
  return { type: SET_AVATAR, payload: avatar };
};
export const resetState = () => {
  return { type: RESET_STATE };
};
export const toggleModal = (classname) => {
  return { type: SET_CLASSNAME, payload: classname };
};
