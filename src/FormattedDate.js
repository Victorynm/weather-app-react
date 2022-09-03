import React from "react";

export default function FormattedDate(props) {
	let date = props.date.getDate();
	if (date < 10) {
		date = `0${date}`;
	}
	let month = props.date.getMonth() + 1;
	if (month < 10) {
		month = `0${month}`;
	}
	let hour = props.date.getHours();
	if (hour < 10) {
		hour = `0${hour}`;
	}
	let minutes = props.date.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	return `${date}/${month} ${hour}:${minutes}`;
}
