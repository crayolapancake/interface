import React, { Component } from 'react';
import OptionsBehaviour from '../components/Options/OptionsBehaviour';
import ContainerStyle from './ContainerStyle';
import NavBar from '../components/NavBar';
import logo from '../images/logo.png';
import LogoStyling from '../components/LogoStyling';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // whateverArray: [],
    };
  // bindings here
  }

  // should render other components; options
  // each option should render a different view, depending on what's being

  render() {
    return (
      <div className="container">
        <ContainerStyle className="container-style">
          <NavBar>
            {/* put image styling in it's own file */}

            <LogoStyling classame="logo-styling">
              <img
                src={logo}
                alt="Voxsio Logo"
                height="40px"
                width="140px"
              />
            </LogoStyling>
            Voxsio Chat Interface

          </NavBar>

          <OptionsBehaviour className="options-behaviour">
            OptionsBehaviour
          </OptionsBehaviour>
        </ContainerStyle>
      </div>
    );
  }
}

export default Container;
