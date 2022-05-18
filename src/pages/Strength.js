import React, { Component } from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import './strength.css';
import image from '../images/password.jpeg' 

class Strength extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
    }
  }

  render() {
    const { password } = this.state;
    return (
       <div className='Smain' style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', height: '625px', width: '1100px', backgroundColor: 'rgba(0,0,0,0.5'}}>
         <div className="meter">
            <h2>Type your password here to check the strength <br /></h2>
            <input style={{width: '50%'}} placeholder='type your password here' className='passw' autoComplete="off" type="password" onChange={e => this.setState({ password: e.target.value })} />
            <PasswordStrengthMeter password={password} />
         </div>
       </div>
    );
  }
}

export default Strength;