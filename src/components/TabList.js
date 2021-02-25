import React from 'react'
import Tab from './Tab'

class TabList extends React.Component {

  constructor(props){
    super(props)



    this.tabs = [
        {name : "Text", id: 0},
        {name : "Images", id: 1},
        {name : "Video", id: 2},
        {name : "Table", id: 3},
        {name : "Email", id: 4},
        
    ]
  }


  render() {

    let styleSettings = {
        listStyleType: "none",
        margin: "0",
        padding: "0",
        width: "100%",
        overflow: "hidden"
    }   


    return (
    <div style = {styleSettings}>
        {
            this.tabs.map(
                (tab) =>
                <Tab
                    name = {tab.name}
                    id = {tab.id}
                    selectedID = {this.props.selectedTab}
                    onPressed = {this.props.changeTabs}
                ></Tab>
            )
        }

    </div>
    )
  }
}



export default TabList;