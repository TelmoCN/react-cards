import React from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

class App extends React.Component {
  state = {
    counter: 0,
    names: ["Rob", "Ned", "John"],
    showCard: true
  }


  btnFunc = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeNames = () => {
    this.setState({
      names: ["Joey", "Rachel", "Gunther"]
    })
  }

  hideCards = () => {
    this.setState({
      showCard: false
    })
  }

  render() {
    return(
      <div>
        <Navbar
          link1="Home"
          link2="About"
          link3="Contact"
          pages={3}
        />
        <Card   
          name={this.state.names[0]} 
          city="Salford"
          avatar="madking"
          visible={this.state.showCard}
        />
        <Card 
          name={this.state.names[1]} 
          city="Belfast"
          avatar="BobMarley"
          visible={this.state.showCard}
        />
        <Card 
          name={this.state.names[2]} 
          city="Baghdad"
          avatar="diamond"
          visible={this.state.showCard}
        />
        <h1>My current counter is {this.state.counter}</h1>
        <div>
          <a onClick={this.btnFunc} className="myBtn" href="#">Click Me</a>
        </div>
        <div>
          <a onClick={this.changeNames} className="myBtn" href="#">Change Names</a>
        </div>
        <div>
          <a onClick={this.hideCards} className="myBtn" href="#">Hide Card</a>
        </div>

      </div>
    );
  }
}

export default App;
