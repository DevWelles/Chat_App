import { randomColor } from "../util/helpers";
import {
  UPDATE_USERNAME,
  LOGIN,
  UPDATE_MEMBER,
  CHANGE_ROOM,
  ADD_NEW_ROOM,
  UPDATE_ONLINE_USERS,
  ADD_NEW_MESSAGE,
  UPDATE_MESSAGE_VALUE,
  ADD_NEW_USER,
  SET_AVATAR,
  RESET_STATE,
  UPDATE_NEW_ROOM_VALUE,
  SET_CLASSNAME,
} from "./actions";

const initialState = {
  inputLoginValue: "",
  messages: [],
  currentMessageValue: "",
  member: {
    username: "",
    avatar: randomColor(),
  },
  onlineUsers: [],
  rooms: ["observable-room1", "observable-room2", "observable-room3"],
  inputNewRoomValue: "",
  currentRoom: "observable-room1",
  className: "closeModal",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME: {
      return { ...state, inputLoginValue: action.payload };
    }
    case LOGIN: {
      return {
        ...state,
        member: {
          username: state.inputLoginValue,
          avatar: state.member.avatar,
        },
        inputLoginValue: "",
      };
    }
    case UPDATE_MEMBER: {
      return {
        ...state,
        member: action.payload,
      };
    }
    case CHANGE_ROOM: {
      return {
        ...state,
        currentRoom: action.payload,
        messages: [],
        currentMessageValue: "",
        onlineUsers: [],
      };
    }
    case ADD_NEW_ROOM: {
      let roomName = "observable-" + state.inputNewRoomValue;
      roomName = roomName.replaceAll(" ", "_");
      return {
        ...state,
        rooms: [...state.rooms, roomName],
        inputNewRoomValue: "",
      };
    }
    case UPDATE_NEW_ROOM_VALUE: {
      return { ...state, inputNewRoomValue: action.payload };
    }
    case UPDATE_ONLINE_USERS:
      return { ...state, onlineUsers: action.payload };
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
        currentMessageValue: "",
      };
    case UPDATE_MESSAGE_VALUE: {
      return { ...state, currentMessageValue: action.payload };
    }
    case ADD_NEW_USER:
      return { ...state, onlineUsers: [...state.onlineUsers, action.payload] };
    case SET_AVATAR:
      return { ...state, member: { ...state.member, avatar: action.payload } };
    case RESET_STATE:
      return {
        ...state,
        inputLoginValue: "",
        messages: [],
        currentMessageValue: "",
        member: {
          username: "",
          avatar: randomColor(),
        },
        onlineUsers: [],
        rooms: ["observable-room1", "observable-room2", "observable-room3"],
        currentRoom: "",
      };
    case SET_CLASSNAME:
      return {
        ...state,
        className: action.payload,
      };
    default:
      return state;
  }
}
