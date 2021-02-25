import React from 'react'

class Email extends React.Component {

    constructor(props){
      super(props)

      this.state = {
          emailWellFormed: null
      }

      this.submitClicked = this.submitClicked.bind(this)
    }
  
    submitClicked(){
        let input = document.getElementById("emailAddrBox").value.toString();
        let validFormat = true;

        if(input.indexOf('@') < 0)
            validFormat = false;
        else if(input.length < 4)
            validFormat = false;
        else if(input.substring(input.length-4) != ".edu" && input.substring(input.length-4) != ".com")
            validFormat = false;
        
        if(validFormat){
            document.getElementById("displayValidationMessage").innerHTML = "Email successfully recorded";
        }
        else{
            document.getElementById("displayValidationMessage").innerHTML = "Invalid email address";
        }
        
        document.getElementById("displayValidationMessage").style.opacity = 1;
    }
  
    render() {
        let displayValidationMessage = {
            opacity: "0"
        }
        if(this.state.emailWellFormed){
            displayValidationMessage.opacity = "1"
        }
  
      return (
      <div>

        <h2></h2>
        <label>Enter Email Address:</label><br/>
        <input type="text" id="emailAddrBox" name="addrBox"/><br/>
        <p id="displayValidationMessage" 
            style = {displayValidationMessage}>
                {this.state.emailWellFormed ? this.state.emailWellFormed : ""}
            </p>
        <h2></h2>
        <button onClick={this.submitClicked} id="clickValidate">Validate Email</button>
  
      </div>
      )
    }
  }
  
  
  
  export default Email;