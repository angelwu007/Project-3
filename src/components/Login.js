import React, {Component} from 'react';
import UserService from '../service/UserService';

class Login extends Component {
  state = { usernameInput: '', passwordInput: '' };
  userService = new UserService();


handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
}

handleFormSubmit = (e) =>{
    e.preventDefault();

    this.userService.login(this.state.usernameInput, this.state.passwordInput)
    .then((userFromDB)=>{
      console.log('jujujujujuujujuj',userFromDB)
        this.setState({usernameInput: '', passwordInput: ''})
        this.props.logTheUserIntoAppComponent(userFromDB)
        if(userFromDB.message !== "Incorrect username"){
          console.log("the user is right ")
          this.props.history.push('/profile');
        }
        else{
          console.log("the user is wrong")
        }
         
        
        
    })
    
    .catch((err)=>{

    })
}

render(){
  return(
    <div className="log-in">
        <img className="toast-img" src="../brown.jpg"/>

        <div className="log-in-form">

        <form className="ui form" onSubmit={this.handleFormSubmit}>
        <div className="field">
          <label>Username</label>
          <input type="text" name="usernameInput" value={this.state.usernameInput} onChange={ e => this.handleChange(e)}/>
        </div>
        <div className="field"> 
          <label>Password</label>
          <input type="password" name="passwordInput" value={this.state.passwordInput} onChange={ e => this.handleChange(e)}/>
        </div>
    
        <div class="ui form success">
       
        <button class="positive ui button">Login</button>

        </div>

      </form>

      </div>

      <img src="../brown.jpg"/>
      <img src="tomato.jpeg"/>
      <img src="food.jpeg"/>
      <img src="food.jpeg"/>

</div>
  )
}
}

export default Login;