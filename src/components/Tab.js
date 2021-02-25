import React from 'react'

class Tab extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            hovered: false
        }

        this.handleEnter = this.handleEnter.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
        this.handlePress = this.handlePress.bind(this)
    }

    handleEnter(){
        //console.log("entered")
        this.setState({ hovered : true})
    }

    handleLeave(){
        this.setState({ hovered : false})
    }

    handlePress(){
        this.props.onPressed(this.props.id)
    }

    render(){
        let styleSettings = {
            display: "inline",
            backgroundColor: "cadetblue",
            textAlign: "center" ,
            paddingTop: "14px",
            paddingBottom: "14px",
            paddingLeft: "30px",
            paddingRight: "30px",
            float: "left",
            textDecoration: "none"
        }

        let click = this.props.id === this.props.selectedID
        let hover = this.state.hovered

        if(click){
            styleSettings.backgroundColor = "purple"
        }
        else if(hover){
            styleSettings.backgroundColor = "rebeccapurple"
        }    

        return(
            <div style = {styleSettings} 
                onMouseEnter = {this.handleEnter} 
                onMouseLeave = {this.handleLeave} 
                onClick = {this.handlePress}>
                {this.props.name}
            </div>
        )
    }
}

export default Tab;

//<p style =  {styleSettings} >{this.props.name} {this.props.id} {this.props.amISelected ? "T" : "F"}</p>