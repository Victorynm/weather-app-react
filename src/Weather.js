import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);
	function showData(responce) {
		setWeatherData({
			ready: true,
			city: responce.data.name,
			temperature: responce.data.main.temp,
			date: new Date(responce.data.dt * 1000),
			max: 23,
			min: 15,
			description: responce.data.weather[0].description,
			humidity: responce.data.main.humidity,
			wind: responce.data.wind.speed,
		});
	}
	function changeCity(event) {
		setCity(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}
	function search() {
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}
		&appid=a9c8a1ce0370b92d2bf8acab56c68686&units=metric`;
		axios.get(url).then(showData);
	}
	if (weatherData.ready) {
		return (
			<div className="Weather">
				<div className="row">
					<div className="col-md-9">
						<form onSubmit={handleSubmit}>
							<input
								type="search"
								id="search-city"
								className="search"
								onChange={changeCity}
							/>
							<button type="submit" className="search">
								Search City
							</button>
						</form>
					</div>
					<div className="col-md-3">
						<button className="search current">Current Location</button>
					</div>
					<WeatherInfo data={weatherData} />
				</div>
			</div>
		);
	} else {
		search();
		return <div>Loading...</div>;
	}
}

export default Weather;
