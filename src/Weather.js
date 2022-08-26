import React from "react";

function Weather() {
	let WeatherData = {
		city: "London",
		temperature: 20,
		date: "05/08 18.57",
		max: 23,
		min: 15,
		description: "Scattered Clouds",
		humidity: 43,
		wind: 4,
		day: "Friday",
	};
	return (
		<div className="Weather">
			<form id="search">
				<input type="text" id="search-city" className="search" />
				<button type="submit" className="search">
					Search City
				</button>
			</form>
			<button className="search" id="current-button">
				Current
			</button>
			<div className="row">
				<div className="col-4">
					<h2>
						<span className="first-day">{WeatherData.day}</span>
					</h2>
				</div>
				<div className="col-8">
					<h1>{WeatherData.city}</h1>
				</div>
				<div className="col-12">
					<small>
						<span className="first-date"></span>
						{WeatherData.date}
						<span className="month"></span> <span id="hour"></span>.
						<span id="minutes"></span>
					</small>
				</div>
				<div className="col-4 today">
					{" "}
					<span id="temperature">{WeatherData.temperature} </span>
					<span className="degree">
						{" "}
						<a href="#" className="active" id="сelsius">
							℃
						</a>{" "}
						|{" "}
						<a href="#" id="fahrenheit">
							℉
						</a>
					</span>
				</div>
				<div className="col-4 today">
					<img src="" alt="" id="icon" />
				</div>
				<div className="col-4">
					<p>
						<span id="description">{WeatherData.description}</span>
						<br />
						<br />
						Humidity: <span id="humidity">{WeatherData.humidity}</span>% <br />
						Wind: <span id="wind">{WeatherData.wind}</span> km/h
					</p>
				</div>
				<div className="col-12">
					<p>
						Day <span id="today-max-temperature">{WeatherData.max}</span>° •
						Night <span id="today-min-temperature">{WeatherData.min}</span>°
					</p>
				</div>
				<div className="col-12">
					<small>Daily Forecast</small>
				</div>
				<div className="daily-forecast"></div>
			</div>
		</div>
	);
}

export default Weather;
