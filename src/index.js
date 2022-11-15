class SwapiService {
	_apiBase = 'https://swapi.dev/api';
	async getResource(url) {
		const res  = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`)
		}
		return await res.json();
	};
	async getAllPeople() {
		const res = await this.getResource(`/people/`);
		return res.results.forEach(item => {
			console.log(item.name);
		});
	}
	getPerson(id) {
		return this.getResource(`/people/${id}/`);
	}
	async getAllPlanets() {
		return this.getResource(`/planets/`)
	}
	getPlanet(id) {
		return this.getResource(`/planets/${id}/`)
	}
	async getAllStarships() {
		return this.getResource(`/starships/`)
	}
	getStarship(id) {
		return this.getResource(`/starships/${id}/`)
	}
}

const swapi = new SwapiService();
swapi.getPerson(3)
	.then((people) => {
		console.log(people.name);
	})