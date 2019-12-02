import React from 'react';
import './App.css';
import LoginControl from './loginControl'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      messages: ['React', 'Re:React', 'Re:Re']
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  deleteRow(e, id) {
    console.log(e);
  }

  render(h) {
    return (
      <div className="App">
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={this.deleteRow.bind(this, 5)}>Delete Row</button>
        <Mailbox unreadMessages={this.state.messages} />
        <LoginControl />
      </div>
    );
  }
}
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }{
        false, true
      }
    </div>
  )
}
export default App;
