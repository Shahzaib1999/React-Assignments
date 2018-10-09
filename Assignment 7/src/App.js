import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FbImageLibrary from 'react-fb-image-grid'
import RecipeReviewCard from './components/card'


class App extends Component {

  render() {

    const pictures = [
      'https://www.w3schools.com/w3css/img_lights.jpg',
      'https://images.wallpaperscraft.com/image/nissan_auto_black_street_87159_300x168.jpg',
      'https://i.pinimg.com/originals/45/74/c6/4574c68d814dc0d3a64611ee401ea7dc.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznJ7OW6c4KQGDxXhv_jbV9CFad5VcjBE2GhVmFVXPTPbscU7-',
      'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjkxNzZ9&s=376e2026519afa2d234a56cb25efa9c5&w=1000&q=80',
      'https://images.unsplash.com/photo-1481567758055-3e8a6e89ca58?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f30108ad27a5a9d7e4ee92d24412d01&w=1000&q=80',

    ]


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <hr></hr>
        <div className="facebookPostMain">

          <FbImageLibrary images={pictures} width={50}/>  
        </div>

        <RecipeReviewCard />




      </div>
    );
  }
}

export default App;