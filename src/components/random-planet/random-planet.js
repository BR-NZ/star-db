import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./random-planet.css";

class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false
  }
  swapiService = new SwapiService();
  constructor() {
    super();
    this.updatePlanet();
    const planetInterval = setInterval(() => this.updatePlanet(),  3500);
  }
  onPlanetLoaded = (planet) => {
    this.setState({
      planet: planet,
      loading: false
    });
  }
  onError = (err) => {
    this.setState({
      loading: false,
      error: true
    });
  }
  updatePlanet() {
    // const id = Math.floor(Math.random() * 25) + 2;
    const id = 12000;
    this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
  }
  render() {
    const {planet, loading, error} = this.state;
    const hasData = !(loading || error);
    const spinner = (loading && !error) ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    const errorMessage= error ? <ErrorIndicator /> : null;

    return (
      <div className="random-planet jumbotron rounded card mb-3">
        {spinner}
        {content}
        {errorMessage}
      </div>
    );
  }
}

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
      <React.Fragment>
        <div>
          <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
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
      </React.Fragment>
  );
}

export default RandomPlanet;
