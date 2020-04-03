import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      charsLeft: props.maxChars,
    };
  }

  handleMessageChange = e => {
    this.setState({
      message: e.target.value,
      charsLeft: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleMessageChange} type="text" name="message" id="message" value={this.state.message}/>
        <strong>{this.state.charsLeft}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
