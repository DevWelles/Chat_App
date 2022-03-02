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
} from "./actions";

const initialState = {
  inputLoginValue: "",
  messages: [],
  currentMessageValue: "",
  member: {
    //ovo je trenutni memeber i različit je od objekata memmebrs u arras onine users koje dobijemo od this.drone
    username: "",
    avatar: randomColor(),
  },
  onlineUsers: [],
  rooms: ["observable-room1", "observable-room2", "observable-room3"],
  currentRoom: "",
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
      //mislim da bi triba odi cili state resetirati jer sad mi povuče state sa ...state i zato mi bude isto u svim sobama to ću morat popravit i proučit
      // i iz nekog razloga kad prominit sobu mi ne radti Onclick na send button tj submit formu za slanje nove por
      return {
        ...state,
        currentRoom: action.payload,
        messages: [],
        currentMessageValue: "",
      };
    }
    case ADD_NEW_ROOM: {
      return { ...state, rooms: [...state.rooms, action.payload] };
    }
    case UPDATE_ONLINE_USERS:
      return { ...state, onlineUsers: action.payload };
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
        currentMessageValue: "", //isto kao kod logina vraćam vrijednost inputa u stanju na ""
      };
    case UPDATE_MESSAGE_VALUE: {
      return { ...state, currentMessageValue: action.payload };
    }
    case ADD_NEW_USER:
      return { ...state, onlineUsers: [...state.onlineUsers, action.payload] };
    case SET_AVATAR:
      return { ...state, member: { ...state.member, avatar: action.payload } };
    default:
      return state;
  }
}
