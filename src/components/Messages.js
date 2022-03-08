import React, { Component } from "react";

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.messagesEndRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  renderMessage(message) {
    let avatar;
    if (message.member.clientData.avatar.startsWith("#")) {
      avatar = (
        <span
          className="avatar"
          style={{ backgroundColor: message.member.clientData.avatar }}
        />
      );
    } else {
      avatar = <div className="avatar">{message.member.clientData.avatar}</div>;
    }
    const myMessage = this.props.currentMember.id === message.member.id;

    const className = myMessage
      ? "Messages-message currentMember"
      : "Messages-message";

    return (
      <li className={className} key={message.id}>
        {avatar}
        <div className="Message-content">
          <span className="username">{message.member.clientData.username}</span>
          <div className="text">
            <div className="time">{message.timestamp}</div>
            {message.text}
          </div>
        </div>
      </li>
    );
  }

  render() {
    return (
      <ul className="Messages-list ">
        {this.props.messages.map((message) => this.renderMessage(message))}
        <div ref={this.messagesEndRef} />
      </ul>
    );
  }
}
