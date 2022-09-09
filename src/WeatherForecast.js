import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDay from "./FormattedDay";
import FormattedDate from "./FormattedDate";

export default function WeatherForecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);
	const apiKey = "c95d60a1e3adbeb286133f1ebebc2579";

	function handleResponse(response) {
		setLoaded(true);
		setForecast(response.data.daily);
		console.log(response.data.daily);
	}
	useEffect(() => {
		setLoaded(false);
	}, [props.coord]);
	if (loaded === true) {
		return (
			<div className="row">
				<div className="col-12">
					Day {Math.round(forecast[0].temp.max)}° • Night{" "}
					{Math.round(forecast[0].temp.min)}°
				</div>
				<div className="col-12">
					<small>Daily Forecast</small>
				</div>
				{forecast.map(function (dailyForecast, index) {
					if (index < 5) {
						return (
							<div className="col day" key={index}>
								<FormattedDay day={new Date(dailyForecast.dt * 1000)} />
								<br />
								<FormattedDate date={new Date(dailyForecast.dt * 1000)} />
								<div className="p-2">
									<WeatherIcon code={dailyForecast.weather[0].icon} size={48} />
								</div>
								{Math.round(dailyForecast.temp.max)}°{" "}
								{Math.round(dailyForecast.temp.min)}°
							</div>
						);
					} else {
						return null;
					}
				})}
			</div>
		);
	} else {
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}
}
