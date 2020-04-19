import React from "react";
import './AlbumCard.scss';

export default function Photo( props ) {
	const { id, url, title } = props;

	return (
		<label id={id} className="photo">
			<div className="photo-image" style={{backgroundImage: `url(${url})`}}></div>
			<div className="photo-title">
				{title}
			</div>
			<div className="photo-action">
				<input type="checkbox" className="photo-action-select" name={id} />
				<div className="photo-action-selected"></div>
			</div>
		</label>
	);
}