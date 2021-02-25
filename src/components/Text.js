import React from 'react'

class Text extends React.Component {

    constructor(props){
      super(props)

      this.state = {
          radioSelected : ""
      }

      this.onUpdate = this.onUpdate.bind(this)
    }
  
    onUpdate(event){
        this.setState({radioSelected : event.target.value})
    }
  
    render() {
  
        let f1 = "a"
        let f2 = "o"
        let f3 = "w"

        let fruit1 = "apple"
        let fruit2 = "orange"
        let fruit3 = "watermelon"

      return (
      <div>
          <form>
            <h2></h2>
            <label>First name: </label><br/>
            <input type="text" id="fname" name="fname"/><br/><br/>
            <label>Last name: </label><br/>
            <input type="text" id="lname" name="lname"/><br/><br/>
            <h3></h3>

            <b>Fruit</b><br/>
            <input type = "radio" 
                value = {f1} 
                checked = {this.state.radioSelected === f1}
                name = "fruit"
                onChange = {this.onUpdate} />
            {fruit1}<br/>

            <input type = "radio" 
                value = {f2} 
                checked = {this.state.radioSelected === f2}
                name = "fruit"
                onChange = {this.onUpdate} />
            {fruit2}<br/>

            <input type = "radio" 
                value = {f3} 
                checked = {this.state.radioSelected === f3}
                name = "fruit"
                onChange = {this.onUpdate} />
            {fruit3}<br/>

            <br/><br/>
            
            <input type = "submit" value = "Submit"/>

          </form>
      </div>
      )
    }
  }
  
  
  
  export default Text;