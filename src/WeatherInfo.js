import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedDay from "./FormattedDay";
import FormattedTime from "./FormattedTime";

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
					<FormattedDate date={props.data.date} />{" "}
					<FormattedTime time={props.data.date} />
				</small>
			</div>
			<div className="col-sm-4 today">
				{" "}
				{Math.round(props.data.temperature)}
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
			<div className="col-sm-4 today">
				<img
					src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
					alt="partly_cloudy"
				/>{" "}
			</div>
			<div className="col-sm-4">
				<p>
					<span id="description">{props.data.description}</span>
					<br />
					<br />
					Humidity: {props.data.humidity}% <br />
					Wind: {Math.round(props.data.wind)} km/h
				</p>
			</div>
			<div className="col-sm-12">
				<p>
					Day {props.data.max}° • Night {props.data.min}°
				</p>
			</div>
			<div className="col-sm-12">
				<small>Daily Forecast</small>
			</div>
			<div className="daily-forecast">
				<div className="day">
					Friday
					<br /> 05/08
					<br />{" "}
					<img
						src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
						alt="partly_cloudy"
					/>{" "}
					<br /> 23° 15°
				</div>
			</div>
		</div>
	);
}
