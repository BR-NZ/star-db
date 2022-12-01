import React from "react";
import Header from "../header";
import ItemList from "../item-list";
import RandomPlanet from "../random-planet";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";
import './app.css';

class App extends React.Component {
	state = {
		showRandomPlanet: true,
		selectedPerson: 0,
		hasError: false
	}

	componentDidCatch(error, errorInfo) {
		this.setState({hasError: true})
	}

	toggleRandomPlanet = () => {
		this.setState(state => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			}
		})
	}
	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		})
	}

	render() {
		if (this.state.hasError) return <ErrorIndicator />;

		const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

		return (
			<div className="stardb-app">
				<Header />
				{planet}
				<div className="row mb2 button-row">
					<button className="toggle-planet btn btn-warning btn-lg"
					        onClick={this.toggleRandomPlanet}>
						Toggle random planet
					</button>
					<ErrorButton />
				</div>
				<div className="row mb-2">
					<div className="col-md-6 my-3">
						<ItemList onItemSelected={this.onPersonSelected} />
					</div>
					<div className="col-md-6 my-3">
						<PersonDetails personId={this.state.selectedPerson} />
					</div>
				</div>
			</div>
		);
	}
};

export default App;
