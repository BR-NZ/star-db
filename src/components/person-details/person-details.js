import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import "./person-details.css";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";

class PersonDetails extends Component {
	swapiService = new SwapiService();
	state = {
		person: null,
		loading: true,
		error: false
	}
	componentDidMount() {
		this.updatePerson();
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		// Проверка прошлого свойства на отличие от нового
		// Избавляет от бесконечного цикла, выводит из рекурсии
		if (this.props.personId !== prevProps.personId) {
			this.setState({
				loading: true
			})
			this.updatePerson();
		}
	}

	updatePerson() {
		const {personId} = this.props;
		if (!personId) return;
		this.swapiService.getPerson(personId)
			.then(this.onPersonLoaded)
			.catch(this.onError);
	}
	onPersonLoaded = (person) => {
		this.setState({
			person: person,
			loading: false
		})
	}
	onError = (err) => {
		this.setState({
			loading: false,
			error: true
		})
	}

	render() {
		const {person, loading, error} = this.state;
		const spinner = (loading && !error) ? <Spinner /> : null;
		let content = !(loading || error) ? <PersonView person={person} /> : null;
		const errorMessage = error ? <ErrorIndicator /> : null;

		if (!person) return <span>Select a person from a list</span>;

		return (
			<div className="person-details card">
				{spinner}
				{content}
				{errorMessage}
			</div>
		);
	}
}

const PersonView = ({person}) => {
	const {id, name, gender, birthYear, eyeColor} = person;

	return (
		<React.Fragment>
			<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
			     className="person-image"
			     alt="" />
			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush my-3">
					<li className="list-group-item">
						<span className="term">Gender</span>
						<span>{gender}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Birth Year</span>
						<span>{birthYear}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Eye Color</span>
						<span>{eyeColor}</span>
					</li>
				</ul>
				<ErrorButton />
			</div>
		</React.Fragment>
	);
}

export default PersonDetails;
