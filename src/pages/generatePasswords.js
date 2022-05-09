// JS Imports
import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { ToastContainer, toast } from "react-toastify";
import { Slider } from "primereact/slider";
import { InputSwitch } from "primereact/inputswitch";

import Password from "../pages/Password"; // Password generator logic

// CSS Libraries
// import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "react-toastify/dist/ReactToastify.min.css";

// Custom CSS
import "./generatePasswords.scss";

export default class generatePasswords extends React.Component {
  state = {
    options: {
      length: 10,
      upper: true,
      lower: true,
      nums: true,
      special: true
    },
    password: ""
  };

  copyToClip = () => {
    navigator.clipboard.writeText(this.state.password);
    toast.success("Password copied to clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  handleGenerate = async () => {
    const { upper, lower, nums, special } = this.state.options;
    const pwLength = this.state.options.length;
    const password = new Password(pwLength, upper, lower, special, nums);
    this.setState({ password: password.value });
    this.copyToClip();
  };

  handleChangeLength = event => {
    const options = {
      ...this.state.options
    };
    options.length = event.value;
    this.setState({ options });
  };

  handleToggle = event => {
    const options = { ...this.state.options };
    const control = event.target.id;
    options[control] = event.target.value;
    this.setState({ options });
  };

  disableButton = () => {
    const { upper, lower, special, nums } = this.state.options;
    return !upper && !lower && !special & !nums;
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>Secure Password Generator</h1>
          <InputText value={this.state.password} className="password-area" />
          <p>Password Length: {this.state.options.length}</p>
          <Slider
            value={this.state.options.length}
            onChange={this.handleChangeLength}
            className="length-slider"
            min={8}
            max={25}
            step={1}
          />
          <div className="char-options">
            <InputSwitch
              checked={this.state.options.upper}
              id="upper"
              onChange={this.handleToggle}
            />
            <span className="checbox-label">Uppercase</span>
            <InputSwitch
              checked={this.state.options.lower}
              id="lower"
              onChange={this.handleToggle}
            />
            <span className="checbox-label">Lowercase</span>
            <InputSwitch
              checked={this.state.options.nums}
              id="nums"
              onChange={this.handleToggle}
            />
            <span className="checbox-label">Numbers</span>
            <InputSwitch
              checked={this.state.options.special}
              id="special"
              onChange={this.handleToggle}
            />
            <span className="checbox-label">Special</span>
          </div>
          <Button
            className="password-button"
            disabled={this.disableButton()}
            label="Generate Password"
            tooltip="Make a new password"
            data-control="special"
            onClick={this.handleGenerate}
          />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </>
    );
  }
}