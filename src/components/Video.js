import React from 'react'
import a from '../media/cat1.mp4'
import b from '../media/cat2.mp4'
import c from '../media/cat3.mp4'
import d from '../media/catquestionmark.mp4'

class Video extends React.Component {

    constructor(props){
      super(props)

      this.state = {
          enlarge: null
      }

      this.handleImageClick = this.handleImageClick.bind(this)
      this.handleOverlayClick = this.handleOverlayClick.bind(this)

    }

    handleImageClick(event) {
        this.setState({enlarge: event.target.src})
    }

    handleOverlayClick(event) {
        this.setState({enlarge: null})
    }
  
  
    render() {

        let picdiv= {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "21%",
            maxHeight: "21%",
            margin : "15px 15px 15px 15px"
        }

        let imageStyle = {
            maxWidth: "100%",
            maxHeight: "100%",
            margin: "0"
        }

        let flexPics = {
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px",
            marginBottom: "10px"
        }

        let enlargedImageStyle = {
            maxWidth : "75%",
            maxHeight : "75%",
            opacity : "1",
            zIndex : "10000",
            margin : "auto",
            position : "fixed",
            top : "50vh",
            left : "50vw",
            transform : "translate( -50%, -50% )"

        }
        let overlayStyle = {
            position :"fixed",
            display : "flex",
            alignItems : "center",
            justifyContent : "center",
            top : "0",
            left : "0",
            width : "100%",
            height : "100%",
            opacity : "0"
        }

        let imagesArray = [a,b,c,d]
  
        let enlargedImage;
        let overlay;
        if(this.state.enlarge){
            enlargedImage = 
            <video
                src = {this.state.enlarge}
                style = {enlargedImageStyle}
                controls
            ></video>
            overlay = <div
                onClick = {this.handleOverlayClick}  
                style = {overlayStyle}
            ></div>
        }

        return (
        <div>
            {overlay}
            {enlargedImage}
            
            <div style={flexPics}>
            {
                imagesArray.map((image) => 
                    <div style={picdiv}>
                        <video
                            src={image}
                            style={imageStyle}
                            onClick={this.handleImageClick}
                            
                        ></video>
                    </div>
                )
            }
          </div>

        </div>
        )
    }
  }
  
  
  
  export default Video;