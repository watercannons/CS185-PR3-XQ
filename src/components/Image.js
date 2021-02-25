import React from 'react';

import a from '../media/a.jpg'
import b from '../media/b.jpg'
import c from '../media/c.jpg'
import d from '../media/d.jpg'
import e from '../media/e.jpg'
import f from '../media/f.jpg'
import g from '../media/g.jpg'
import h from '../media/h.jpg'
import i from '../media/i.jpg'
import j from '../media/j.jpg'
import k from '../media/k.jpg'
import l from '../media/l.jpg'
import m from '../media/m.jpg'
import n from '../media/n.jpg'
import o from '../media/o.jpg'
import p from '../media/p.jpg'
import q from '../media/q.jpg'
import r from '../media/r.jpg'
import s from '../media/s.jpg'
import t from '../media/t.jpg'
import u from '../media/u.jpg'
import v from '../media/v.jpg'
import w from '../media/w.jpg'
import x from '../media/x.jpg'
import y from '../media/y.jpg'
import z from '../media/z.jpg'



class Image extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            scroll: 0,
            enlarge: null
        }

        this.handleScroll = this.handleScroll.bind(this)
        this.backToTop = this.backToTop.bind(this)
        this.handleImageClick = this.handleImageClick.bind(this)
        this.handleOverlayClick = this.handleOverlayClick.bind(this)
    }



    handleImageClick(event) {
        this.setState({enlarge: event.target.src})
    }

    handleOverlayClick(event) {
        this.setState({enlarge: null})
    }
    
    handleScroll(event) {
        let scrollPos = window.scrollY
        this.setState({
            scroll: scrollPos
        });
    }

    backToTop() {
        window.scroll(0,0)
        this.setState({scroll: 0})
        
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


  render() {

    let scrollToTopStyle = {
        display:"none",
        position:"fixed",
        bottom: "10px",
        right: "10px",
        backgroundColor: "rebeccapurple",
        color: "seashell",
        cursor: "pointer",
        fontSize: "20px"
    }

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

    let enlargedImage;
    let overlay;
    if(this.state.enlarge){
        enlargedImage = 
        <img
            src = {this.state.enlarge}
            style = {enlargedImageStyle}
        ></img>
        overlay = <div
            onClick = {this.handleOverlayClick}  
            style = {overlayStyle}
        ></div>
    }

    if(this.state.scroll / document.body.offsetHeight > 0.25) scrollToTopStyle.display = "block"
    
    let imagesArray = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]

    return (
      <div >

          {overlay}
          {enlargedImage}

          <button
            style={scrollToTopStyle}
            onClick={this.backToTop}>
                Back To Top</button>

          <div style={flexPics}>
            {
                imagesArray.map((image) => 
                    <div style={picdiv}>
                        <img
                            src={image}
                            style={imageStyle}
                            onClick={this.handleImageClick}
                            
                        ></img>
                    </div>
                )
            }
          </div>
           
           
      </div>
    );
  }
}

export default Image;