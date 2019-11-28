
import './imageList.css';
import React from 'react';
import ImageCard from './imageCard'


const ImageList = (props)=>{
    const images= props.images.map((image)=>{
    return(
        <ImageCard image={image} key={image.id} className=""></ImageCard>
    )      
    });
return (<div className="image-list">{images}</div>)
}
export default ImageList;