import React from 'react';
import './App.css';
import InputBar from './components/InputBar';
import DevCardList from './components/DevCardList';
import PopularRepo from './components/PopularRepo';
import About from './components/About';

class App extends React.Component{

  state = {
    title: 'No',
    jsonData: {}
  }


  setTitle = (data) => {

    //Transforming the data for the Title

    let newTitle = data.split('/'); //Extracting Repo Name
    newTitle = newTitle.map(text => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    })

    this.setState({
      title: `Thank You, "${newTitle[1]} by ${newTitle[0]}"`
    });
  }

  getJsonData = (data) => {

    this.setState({
      jsonData: data
    });
    
  }


  render(){
    return(
      <div>
        <InputBar getJsonData={this.getJsonData} setTitle={this.setTitle}></InputBar>
        <blockquote>{this.state.title} Contributors:</blockquote>
        <DevCardList jsonData={this.state.jsonData}></DevCardList>
        <blockquote>Popular Github Repo:</blockquote>
        <PopularRepo getJsonData={this.getJsonData} setTitle={this.setTitle}></PopularRepo>
        <About></About>
      </div>
    );
  }
}

export default App;
