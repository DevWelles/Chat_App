import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateMember,
  addNewRoom,
  updateNewRoomValue,
  updateOnlineUsers,
  addNewMessage,
  updateMessageValue,
  addNewUser,
  resetState,
  toggleModal,
} from "../redux/actions";
import Rooms from "../components/Rooms";
import LogOut from "../components/LogOut";
import OnlineUsers from "../components/OnlineUsers";
import Messages from "../components/Messages";
import Input from "../components/Input";
import { Container, Row, Col } from "react-bootstrap";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.drone = new window.Scaledrone("QPsUDZLWlNYqr5RE", {
      data: this.props.member,
    });
    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = this.props.member;
      member.id = this.drone.clientId;
      this.props.updateMember(member);
    });
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.onSendMessage = this.onSendMessage.bind(this);
    this.logOut = this.logOut.bind(this);
    this.subsrcibeRoom = this.subsrcibeRoom.bind(this);
  }

  subsrcibeRoom() {
    this.room = this.drone.subscribe(this.props.currentRoom);

    this.room.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
    });

    this.room.on("members", (m) => {
      const members = m;
      this.props.updateOnlineUsers(members);
    });

    this.room.on("member_join", (member) => {
      this.props.addNewUser(member);
    });

    this.room.on("member_leave", ({ id }) => {
      let newOnlineUsers = this.props.onlineUsers;
      const index = newOnlineUsers.findIndex((member) => member.id === id);
      newOnlineUsers.splice(index, 1);
      this.props.updateOnlineUsers(newOnlineUsers);
    });

    this.room.on("message", (message) => {
      const { data, member, timestamp, id } = message;
      let time = timestamp * 1000;
      var date = new Date(timestamp * 1000);
      var hours = date.getHours();
      var minutes = date.getMinutes();
      time = `${hours}:${minutes}`;
      const newMessage = {
        member,
        text: data,
        timestamp: time,
        id: id,
      };
      this.props.addNewMessage(newMessage);
    });
  }

  componentDidMount() {
    this.subsrcibeRoom();
  }

  onSendMessage(message) {
    console.log(this.props.currentRoom);
    console.log(message);
    this.drone.publish({
      room: this.props.currentRoom,
      message: message,
    });
  }

  handleRoomChange() {
    this.room.unsubscribe();
    this.room = this.drone.subscribe(this.props.currentRoom);
    this.subsrcibeRoom();
  }

  logOut() {
    this.drone.close();
    this.props.resetState();
  }

  render() {
    return (
      <Container fluid className="chat-bg">
        <Row className=" row-chat row-breakpoint">
          <Col>
            <OnlineUsers onlineUsers={this.props.onlineUsers} />
          </Col>
          <Col
            md={6}
            className="d-flex flex-column align-items-center chat-col-breakpoint "
          >
            <div className="d-flex flex-column align-items-center ">
              <h3>
                Welcome <strong>{this.props.member.username}</strong>
              </h3>
              <h5>You are currently in room:</h5>
              <h5>{this.props.currentRoom}</h5>
            </div>

            <Messages
              currentMember={this.props.member}
              messages={this.props.messages}
            />
            <Input
              onSendMessage={this.onSendMessage}
              updateMessageValue={this.props.updateMessageValue}
              currentMessageValue={this.props.currentMessageValue}
            />
          </Col>
          <Col className="d-flex flex-column align-items-center ">
            <Rooms
              rooms={this.props.rooms}
              handleRoomChange={this.handleRoomChange}
              inputNewRoomValue={this.props.inputNewRoomValue}
              addNewRoom={this.props.addNewRoom}
              updateNewRoomValue={this.props.updateNewRoomValue}
              toggleModal={this.props.toggleModal}
              className={this.props.className}
            />
            <LogOut logOut={this.logOut} />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    member: state.member,
    rooms: state.rooms,
    currentRoom: state.currentRoom,
    inputNewRoomValue: state.inputNewRoomValue,
    onlineUsers: state.onlineUsers,
    messages: state.messages,
    currentMessageValue: state.currentMessageValue,
    className: state.className,
  };
}

const mapDispatchToProps = {
  updateMember,
  addNewRoom,
  updateNewRoomValue,
  updateOnlineUsers,
  addNewMessage,
  updateMessageValue,
  addNewUser,
  resetState,
  toggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
