import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import './Album.scss';
import AlbumCard from '../AlbumCard/AlbumCard';
import Button from '../Button/Button';

export default function Album( props ) {
	const [albumData, setAlbumData] = useState([]);
	const [photosData, setPhotosData] = useState([]);
	const [isPhotosLoading, setIsPhotosLoading] = useState(true);
	
	const apiRoot = 'https://gorest.co.in/public-api';
	const apiToken = 'Glr6TxYrN9QzOYFrgf-O1gV9grDc4XN0Qh3p';
	let {albumId} = useParams();

	useEffect(() => {
		fetch(`${apiRoot}/albums/${albumId}?_format=json&access-token=${apiToken}`,)
	      .then(res => res.json())
	      .then(response => {
	        setAlbumData(response.result);
	      })
	      .catch(error => console.log(error));

	    fetch(`${apiRoot}/photos?album_id=${albumId}?_format=json&access-token=${apiToken}`,)
	      .then(res => res.json())
	      .then(response => {
	        setPhotosData(response.result);
	        setIsPhotosLoading(false);
	      })
	      .catch(error => console.log(error));
	}, [])

	const handleSubmit = event => {
		event.preventDefault();

		event.target.querySelectorAll('input[type=checkbox]:checked').forEach(function(el) {
			document.getElementById( el.name ).style.display = 'none';
		});
	}

	return (
		<form className="album" onSubmit={handleSubmit} >
			<div className="album-header">
				<h3>{albumData.title || 'Loading...'}</h3>
				<Button type="submit" className="primary" label="Hide" />
			</div>
			<div className="album-content">
				{isPhotosLoading && <p>Wait I'm Loading photos for you</p>}
				{ photosData.map( photo => <AlbumCard key={photo.id} id={photo.id} url={photo.thumbnail} title={photo.title} /> ) }
			</div>
		</form>
	);
}