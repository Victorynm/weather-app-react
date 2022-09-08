import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedDay from "./FormattedDay";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
	return (
		<div className="row">
			<div className="col-md-4 col-sm-12">
				<h2>
					<FormattedDay day={props.data.date} />
				</h2>
			</div>
			<div className="col-md-8 col-sm-12">
				<h1>{props.data.city}</h1>
			</div>
			<div className="col-sm-12">
				<small>
					<FormattedDate date={props.data.date} />
					<FormattedTime date={props.data.date} />
				</small>
			</div>
			<div className="col-sm-4 today">
				{" "}
				<WeatherTemperature celsius={props.data.temperature} />
			</div>
			<div className="col-sm-4 today" id="icon">
				<WeatherIcon code={props.data.icon} size={100} />
			</div>
			<div className="col-sm-4">
				<p className="m-3">
					<span id="description">{props.data.description}</span>
					<br />
					<br />
					Humidity: {props.data.humidity}% <br />
					Wind: {Math.round(props.data.wind)} km/h
				</p>
			</div>
		</div>
	);
}
