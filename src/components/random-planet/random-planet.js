import React, { Component } from "react";
import "./random-planet.css";

class RandomPlanet extends Component {
  state = {
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  }

  render() {
    const {name, population, rotationPeriod, diameter} = this.state;

    return (
      <div className="random-planet jumbotron rounded card mb-3">
        <div>
          <img src={`https://starwars-visualguide.com/assets/img/planets/${3}.jpg`}
               className="planet-image"
               alt="" />
        </div>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
