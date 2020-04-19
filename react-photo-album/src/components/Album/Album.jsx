import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import './Album.scss';
import Photo from '../Photo/Photo';
import Button from '../Button/Button';


export default function Album( props ) {
	const [albumData, setAlbumData] = useState([]);
	const [photosData, setPhotosData] = useState([]);
	const [isPhotosLoading, setIsPhotosLoading] = useState(true);
	
	const API_BASE_URL = 'https://gorest.co.in/public-api';
	const API_ALBUM_ENDPOINT = '/albums/';
	const API_PHOTOS_ENDPOINT = '/photos?album_id=';
	const PARAMS = '?_format=json&access-token=Glr6TxYrN9QzOYFrgf-O1gV9grDc4XN0Qh3p';
	let {albumId} = useParams();


	useEffect(() => {
		fetch(`${API_BASE_URL}${API_ALBUM_ENDPOINT}${albumId}${PARAMS}`,)
	      .then(res => res.json())
	      .then(response => {
	        setAlbumData(response.result);
	      })
	      .catch(error => console.log(error));

	    fetch(`${API_BASE_URL}${API_PHOTOS_ENDPOINT}${albumId}${PARAMS}`,)
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
				{ photosData.map( photo => <Photo key={photo.id} id={photo.id} url={photo.thumbnail} title={photo.title} /> ) }
			</div>
		</form>
	);
}