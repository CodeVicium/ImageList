import React from 'react';

class imageCard extends React.Component{
    constructor(props){
        super(props);
        this.state={spans:0}
        this.imageRef = React.createRef();
        
    }


    componentDidMount(){
       this.imageRef.current.addEventListener('load',this.setSpans)
    }


    setSpans=()=>{
        const heigth = this.imageRef.current.clientHeight;
        const spans=Math.ceil(heigth/5);
        this.setState({spans});
    }
render(){
    const {description,urls}=this.props.image;
    return(
        <div style={{ gridRowEnd : `span ${this.state.spans}`}} className="">
            <img ref={this.imageRef} alt={description} 
            src={urls.regular} 
            className=""></img>
        </div>

    )
}
}
export default imageCard;