import React, { Component } from "react";
function countWords(input) {
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      return 0;
    }
    const words = trimmedInput.split(/\s+/);
    return words.length;
  }
  
class A3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inputValue: "",
        wordCount: 0,
    };
  }
  
  handleChange = (event) => {
    const inputValue = event.target.value;
    this.setState({
      inputValue: inputValue,
      wordCount: countWords(inputValue)
    });
  };

  render() {
    const containerStyle = {
      width: "50%",
      margin: "auto",
      textAlign: "center",
    };

    const inputStyle = {
      width: "50%",
      padding: "10px",
      fontSize: "18px",
      height: "200px"
    };
    const wordCountStyle = {
        paddingLeft: "220px",
        paddingTop: "10px",
        textAlign: "left", 
      };
    return (
      <div style={containerStyle}>
        <h1>Responsive Paragraph Word Counter</h1>
         
        <textarea
          onChange={this.handleChange}
          placeholder="Input paragraph"
          style={inputStyle}
        />
        <div style={wordCountStyle}>
        Word count: {this.state.wordCount}
        </div>
       
      </div>
    );
  }
}

export default A3;
