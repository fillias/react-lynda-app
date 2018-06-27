import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key = '37c1e40dd8fb2b4986ec2384ca2786a1';

class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			city: 'Cagliari',
			country: '',
			description: '',
			temp: ''
		}
	}

	componentDidMount() {
		this.grapWeather(this.state.city);
	}

	grapWeather(city) {
		fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&units=metric&q=${city}`)
			.then(response => {
				console.log('fetch response: ', response);
				return response.json();
			})
			.then( json => {
				console.log('json response: ', json);
				this.setState({description: json.weather[0].description});
				this.setState({temp: json.main.temp});
				this.setState({country: json.sys.country});
			})
			
	}


	render() {
		return (
			<div>
				<h1>report pro: {this.state.city}, {this.state.country}</h1>
				<h2>{this.state.description}</h2>
				<h2>{this.state.temp}</h2>
			</div>
		)
		
	}
}

ReactDOM.render(<App />, document.getElementById('root'));