//imports dependencies and files
import React, { Component } from "react";
import Main from './components/Main';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CityCard from "./components/CityCard";
import Footer from "./components/Footer";
import city from "./city.json";
import "./App.css";

//set state 
class App extends Component {
  state = {
    city,
    clickedCity: [], // temp array for clicked cities
    score: 0,
    topScore: 0,
    info: 'Click on an image to begin!',
    shake: '',
  };
// shake functions
  startShake = () => {
    setTimeout( () =>  this.setState({shake: "shake"}), 5 )
    this.stopShake()
  }
  stopShake = () => {
    this.setState({shake: " "})
  }
//click event
  imageClick = event => {
    const currentCity = event.target.src;
    this.setState({ info: 'Choose your next city!' });
//check for duplicate city name -if you click on a City that has already been selected, the game is reset and cards reordered
    if (this.state.clickedCity.indexOf(currentCity) > -1) {
      this.startShake()
      this.setState({
        city: this.state.city.sort(() => Math.random() - 0.5),  // sorting array in random order
        clickedCity: [],
        score: 0,
        info: 'You lost. Play again!'

      });
//if you click on an available City, your score is increased and cards reordered
    } else {
      this.setState(
        {
          city: this.state.city.sort(() => Math.random() - 0.5),  
          clickedCity: this.state.clickedCity.concat(currentCity),
          score: this.state.score + 1,
          topScore: this.state.topScore + 1
        },
//if you get all 12 City correct, game over          
        () => {
          if (this.state.score === 12) {
            this.setState({
              city: this.state.city.sort(() => Math.random() - 0.5), 
              clickedCity: [], 
              score: 0,
              info: 'You Won!'
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, Header, Citycard, footer 
  render() {
    return (
      <div >
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.info}
        />
        <Header />
        <Main shake={this.state.shake}>
          {this.state.city.map(city => (
            <CityCard
              imageClick={this.imageClick}
              id={city.id}
              key={city.id}
              image={city.image}
              name={city.name}
            />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}
export default App;