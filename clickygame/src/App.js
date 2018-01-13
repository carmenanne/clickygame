import React, { Component } from 'react';
import HuskyCard from "./components/HuskyCard";
import Scoreboard from "./components/Scoreboard";
import Wrapper from "./components/Wrapper";
import huskies from "./huskies.json";

import './App.css';

class App extends Component {
  state = {
    huskies
  };
  shuffleDogs = id => {
    console.log("hello it's working")
    const huskies = this.state.huskies.filter(huskies => huskies.id !== id);
    console.log(id)

    this.setState({huskies})
    
  }

  render() {
    return (
      <Wrapper>
        <Scoreboard />
        {this.state.huskies.map(huskies => (
            <HuskyCard
              shuffleDogs={this.shuffleDogs}
              id={huskies.id}
              image={huskies.image}
            />
          ) )}
      </Wrapper>
    );
  }
}

export default App;
