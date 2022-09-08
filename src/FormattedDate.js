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

	return `${date}/${month} `;
}
