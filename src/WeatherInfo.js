import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedDay from "./FormattedDay";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
	return (
		<div className="row">
			<div className="col-sm-4">
				<h2>
					<FormattedDay day={props.data.date} />
				</h2>
			</div>
			<div className="col-sm-8">
				<h1>{props.data.city}</h1>
			</div>
			<div className="col-sm-12">
				<small>
					<FormattedDate date={props.data.date} />
				</small>
			</div>
			<div className="col-sm-4 today">
				{" "}
				<WeatherTemperature celsius={props.data.temperature} />
			</div>
			<div className="col-sm-4 today">
				<WeatherIcon code={props.data.icon} />
			</div>
			<div className="col-sm-4">
				<p className="ms-4">
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
