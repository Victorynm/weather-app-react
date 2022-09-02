import React from "react";

export default function FormattedDay(props) {
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = days[props.day.getDay()];
	return `${day}`;
}
