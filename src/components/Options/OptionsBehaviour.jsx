import React, { Component } from 'react';
import OptionContainerStyle from './OptionContainerStyle';
import Option from './Option'

class OptionsBehaviour extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
    //binding
  }

  onOptionClick(){
    console.log("clicked!")
  }
  render() {


    return (
      <OptionContainerStyle>OCS
        <Option>
          <button>Change Text (Say)</button>
          <button>Change Questions & Answers (Ask)</button>
          <button>Change Tags</button>
          <button>Change Styling</button> <button>Search?</button>
        </Option>
        {/* <Ask></Ask>
        <Say></Say>
        <Tags></Tags>
        <Search></Search> */}
      </OptionContainerStyle>
    )
  }
}

export default OptionsBehaviour;
