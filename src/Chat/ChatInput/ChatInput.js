import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  setMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  sendMessage = () => {
    this.props.updateMessage(this.state.message);
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.setMessage} value={this.state.message} />
        <button type="button" onClick={this.sendMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
