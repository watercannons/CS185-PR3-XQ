import React from 'react'
import Text from './Text'
import Image from './Image'
import Video from './Video'
import Email from './Email'
import Table from './Table'

class Body extends React.Component {

  constructor(props){
    super(props)
  }


  render() {

    let selected;
    if(this.props.selectedTab == 0){
        selected = <Text></Text>
    }
    else if(this.props.selectedTab == 1){
        selected = <Image></Image>
    }
    else if(this.props.selectedTab == 2){
        selected = <Video></Video>
    }
    else if(this.props.selectedTab == 3){
        selected = <Table></Table>
    }
    else if(this.props.selectedTab == 4){
        selected = <Email></Email>
    }
    else{
        selected = <p>Component error</p>
    }
    

    return (
    <div>
        {selected}

    </div>
    )
  }
}

export default Body;