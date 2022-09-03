import React, { useState } from "react";

export default function WeatherTemperature(props) {
	const [unit, setUnit] = useState("celsius");
	function convertToFahrenheit(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}
	function convertToCelsius(event) {
		event.preventDefault();
		setUnit("celsius");
	}
	function fahrenheit() {
		return (props.celsius * 9) / 5 + 32;
	}
	if (unit === "celsius") {
		return (
			<div>
				{Math.round(props.celsius)}
				<span className="degree">
					{" "}
					<a href="/" className="active" id="сelsius">
						℃
					</a>{" "}
					|{" "}
					<a href="/" id="fahrenheit" onClick={convertToFahrenheit}>
						℉
					</a>
				</span>
			</div>
		);
	} else {
		return (
			<div>
				{Math.round(fahrenheit())}
				<span className="degree">
					{" "}
					<a href="/" id="сelsius" onClick={convertToCelsius}>
						℃
					</a>{" "}
					|{" "}
					<a href="/" id="fahrenheit" className="active">
						℉
					</a>
				</span>
			</div>
		);
	}
}
