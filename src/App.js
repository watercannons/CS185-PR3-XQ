
import React from 'react'
import Body from './components/Body'
import TabList from './components/TabList'

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      currentSelectedTabID : 0
    }

    this.myAge = 10;

    this.switchTabs = this.switchTabs.bind(this)
  }

  switchTabs(newState){
    this.setState(
      state =>{
        return {currentSelectedTabID: newState}
      }
    )
  }


  render() {

    let pageStyle = {
      paddingTop : "15px",
      paddingLeft : "15px"
    }

    return (
    <div style = {pageStyle}>
      <TabList 
        changeTabs={this.switchTabs} 
        selectedTab={this.state.currentSelectedTabID}
      />
      <Body selectedTab={this.state.currentSelectedTabID}/>
    </div>
    )
  }
}



export default App;