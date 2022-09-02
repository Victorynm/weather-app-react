import React from "react";

export default function FormattedTime(props) {
	let hour = props.time.getHours();
	if (hour < 10) {
		hour = `0${hour}`;
	}
	let minutes = props.time.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	return `${hour}:${minutes}`;
}
