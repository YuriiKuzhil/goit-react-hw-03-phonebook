import { Text, Wrapper, Label } from './ThemeSwitch.styled';
import React, { Component } from 'react';
import Switch from 'react-switch';
import { FaMoon, FaSun } from 'react-icons/fa';

class ThemeSwitch extends Component {
  state = { checked: false };

  handleChange = checked => {
    this.setState({ checked });

    this.props.onChange(this.state.checked);
  };

  render() {
    return (
      <Label>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          height={30}
          width={65}
          offColor="#c05805"
          onColor="#cdbea7"
          uncheckedIcon={<Text>DAY MODE</Text>}
          checkedIcon={<Text>NIGHT MODE</Text>}
          uncheckedHandleIcon={
            <Wrapper>
              <FaSun />
            </Wrapper>
          }
          checkedHandleIcon={
            <Wrapper>
              <FaMoon />
            </Wrapper>
          }
        />
      </Label>
    );
  }
}
export default ThemeSwitch;
