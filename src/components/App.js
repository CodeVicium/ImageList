import React from "react";
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash'
import ImagesList from './imagesList'

const url_variable = "/search/photos";

class App extends React.Component{
  state = {images:[]};
  

  onSearchSubmit= async term=>{
  const response= await unsplash.get( url_variable,{ 
    params:{query:term},
    });
    this.setState({images:response.data.results})
  }
  render(){
    return(
      
      <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found:{this.state.images.length} Imagenes
        <ImagesList images={this.state.images}></ImagesList>
      </div>


    )
  }
}


export default App;
