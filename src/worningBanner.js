import React from 'react';


class WarningBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: true,
      numbers: [1, 2, 3, 4, 5, 6]
    }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }))
  }

  render() {
    return (
      <div>
        <WarnBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
        <NumberList numbers={this.state.numbers} />
      </div>
    );
  }
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  )
}

function ListItem(props) {
  return (
    <li>{props.value}</li>
  )
}

function WarnBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div>
      Warning!
    </div>
  )
}

export default WarningBanner;
