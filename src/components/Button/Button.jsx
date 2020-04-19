import React from "react";
import './Button.scss';

export default function Button( props ) {
	const { id, className, type, label } = props;

	return (
		<button id={id} type={type} className={className}>
			{label}
		</button>
	);
}