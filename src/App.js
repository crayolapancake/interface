import React, { Component } from 'react';
import Container from './containers/Container.jsx';
// import Tree from './components/Tree';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
    //bindings
  }

  // console.log(answer);
  //lifecycle
  componentWillMount() {
    console.log('WILL mount')
    // const button = document.querySelector('button');
    //   console.log("Button:", button);
    }

  componentDidMount() {
   console.log('DID MOUNT!');
   // var button = document.querySelector('button');
   // console.log("Button:", button);
  }

  render() {
    return (
      <div>
        <Container />
        {/* <Tree /> */}
      </div>
   )
  }
}

export default App;
