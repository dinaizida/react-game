//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CityCard from "./components/CityCard";
import Footer from "./components/Footer";
import city from "./city.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    city,
    clickedCity: [],
    score: 0,
    topScore: 0,
    info: 'Click on an image to begin!',
  };

//when you click on a card ... the City is taken out of the array
  imageClick = event => {
    const currentCity = event.target.alt;
    const CityAlreadyClicked = this.state.clickedCity.indexOf(currentCity) > -1 ;
    this.setState({ info: 'Choose your next city!' });
    
//if you click on a City that has already been selected, the game is reset and cards reordered
    if (CityAlreadyClicked) {
      this.setState({
        city: this.state.city.sort(() => Math.random() - 0.5),
        clickedCity: [],
        score: 0,
        
      });
        
        this.setState({ info: 'You lost. Play again!' });

//if you click on an available City, your score is increased and cards reordered
    } else {
      this.setState(
        {
          city: this.state.city.sort(() => Math.random() - 0.5),
          clickedCity: this.state.clickedCity.concat(
            currentCity
          ),
          score: this.state.score + 1,
          topScore: this.state.topScore + 1
        },
//if you get all 12 City correct, game over          
        () => {
          if (this.state.score === 12) {
            this.setState({ info: 'You Won!' });
            this.setState({
              city: this.state.city.sort(() => Math.random() - 0.5),
              clickedCity: [],
              score: 0,
              
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, Header, Citycard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.info}
        />
        <Header />
        <div className="col m10 s12 wrapper">
          {this.state.city.map(city => (
            <CityCard
              imageClick={this.imageClick}
              id={city.id}
              key={city.id}
              image={city.image}
              name={city.name}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;