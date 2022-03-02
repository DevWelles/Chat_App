import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateMember,
  changeRoom,
  addNewRoom,
  updateOnlineUsers,
  addNewMessage,
  updateMessageValue,
  addNewUser,
} from "../redux/actions";
import Rooms from "../components/Rooms";

import OnlineUsers from "../components/OnlineUsers";
import Messages from "../components/Messages";
import Input from "../components/Input";
import { Container, Row, Col } from "react-bootstrap";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.drone = new window.Scaledrone("QPsUDZLWlNYqr5RE", {
      // Will be sent out as clientData via events
      data: this.props.member, //ako cu koristit redux
    });
    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      console.log("Successfully connected to Scaledrone");
      const member = this.props.member;
      member.id = this.drone.clientId; //tu memberu samo seta prop id iz drone.clientId
      this.props.updateMember(member); //za redux
    });

    this.room = this.drone.subscribe(this.props.rooms[0]); //po defaultu neka bude prva soba iz stanja
    //console.log(this.room);
    this.props.changeRoom(this.room.name); //akcijska funkcija da povežem sa stanjem currentRoom

    this.room.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      console.log("Successfully joined room"); //samo console logam da provjerim jesam li u sobi
    });

    this.room.on("members", (m) => {
      const members = m;
      console.log(members);
      this.props.updateOnlineUsers(members); //u state onlineUSers guramo sve members objekte i taj svaki member ce biti drugaciji od state
    });

    //User joined the room
    this.room.on("member_join", (member) => {
      console.log(member);
      this.props.addNewUser(member); //dodajemo jednog novo membera
    });

    // User left the room
    this.room.on("member_leave", ({ id }) => {
      let newOnlineUsers = this.props.onlineUsers;
      const index = newOnlineUsers.findIndex((member) => member.id === id);
      newOnlineUsers.splice(index, 1);
      this.props.updateOnlineUsers(newOnlineUsers); //setam u storeu da novo stanje
    });

    //adding new messages to messages state with action function this.props.addNewMessage(newMessage);
    this.room.on("message", (message) => {
      const { data, member, timestamp, id } = message;
      console.log(`timestamp is ${timestamp}`);
      let time = timestamp * 1000;
      var date = new Date(timestamp * 1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      time = `${hours} : ${minutes.substring(-2)} : ${seconds.substring(-2)}`;
      const newMessage = {
        member,
        text: data,
        timestamp: time,
        id: id,
      };
      this.props.addNewMessage(newMessage);
    });

    this.changeRoom = this.changeRoom.bind(this);
    this.onSendMessage = this.onSendMessage.bind(this);
  }

  onSendMessage(message) {
    console.log(this.drone);
    this.drone.publish({
      room: this.props.currentRoom, //send messages in current room
      message: message,
    });
    console.log("jesam li tu");
  }

  changeRoom(room) {
    this.room = this.drone.subscribe(room);
    this.props.changeRoom(this.room.name); //akcijska funkcija da povežem sa stanjem currentRoom
    console.log(this.room);
  }
  // addNewRoom(room) { //ovo cu ostavit za kraj jer mogu i direktno povezati komponentu AddNewRoom sa reduxom  i tribam napravit u njoj formu sa inputom itd
  //   this.props.addNewRoom(room);
  // }
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
              <h3>Welcome {this.props.member.username}</h3>
              <h5>You are currently in room:</h5>
              <h5>{this.props.currentRoom}</h5>
            </div>

            <Messages
              currentMember={this.props.member}
              messages={this.props.messages}
            />
            <Input
              onSendMessage={this.onSendMessage} //metoda za publishati por u this.drone koji pritom pozove listener this.room.on("message", (message) =>{....}
              //a u tom listeneru se poziva  this.props.addNewMessage(newMessage) koja ce updeatati samo stanje u reduxu tako da ovu metodu poizvamo na onSubmit da pokrene tu lančanu reakciju 1. this.drone.publish 2. this.room.on(message...) 3. update redux state sa this.props.addNewMessage(newMessage)
              updateMessageValue={this.props.updateMessageValue} //metoda za updateati trenutni input value od tipkanja noce por jer mora biti kontolirana forma u reactu
              currentMessageValue={this.props.currentMessageValue}
            />
          </Col>
          <Col className="d-flex flex-column align-items-center ">
            <Rooms rooms={this.props.rooms} changeRoom={this.changeRoom} />
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
    onlineUsers: state.onlineUsers,
    messages: state.messages,
    currentMessageValue: state.currentMessageValue,
  };
}

const mapDispatchToProps = {
  updateMember,
  changeRoom,
  addNewRoom,
  updateOnlineUsers,
  addNewMessage,
  updateMessageValue,
  addNewUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
