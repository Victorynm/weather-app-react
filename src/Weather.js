import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);
	function showData(responce) {
		console.log(responce.data);
		setWeatherData({
			ready: true,
			city: responce.data.name,
			temperature: responce.data.main.temp,
			coordinates: responce.data.coord,
			date: new Date(responce.data.dt * 1000),
			description: responce.data.weather[0].description,
			humidity: responce.data.main.humidity,
			wind: responce.data.wind.speed,
			icon: responce.data.weather[0].icon,
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
		let apiKey = "a9c8a1ce0370b92d2bf8acab56c68686";
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}
		&appid=${apiKey}&units=metric`;
		axios.get(url).then(showData);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<div className="row">
					<div className="col-12">
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
				</div>
				<WeatherInfo data={weatherData} />
				<WeatherForecast coord={weatherData.coordinates} />
			</div>
		);
	} else {
		search();
		return <div>Loading...</div>;
	}
}

export default Weather;
