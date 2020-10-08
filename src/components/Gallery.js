//react
import React, { useState, useEffect } from 'react';

import fetch from 'node-fetch';
//unsplash api
import Unsplash, { toJson } from 'unsplash-js';
import axios from 'axios';

global.fetch = fetch;

const unsplash = new Unsplash({
	accessKey: 'L4591ozG82_pYS3W0BmQmQxfuhA8kKfhZS2P6PDl-Ak',
});

export default function Gallery() {
	const [photos, setPhotos] = useState(null);

	// useEffect(() => {
	// 	unsplash.users
	// 		.photos('jakegrella')
	// 		.then(toJson)
	// 		.then((json) => {
	// 			setPhotos(json.data);
	// 			console.log('photos', photos);
	// 		});
	// });
	useEffect(() => {
		axios
			.get(
				`https://api.unsplash.com/users/jakegrella/photos?client_id=L4591ozG82_pYS3W0BmQmQxfuhA8kKfhZS2P6PDl-Ak`
			)
			.then((res) => {
				setPhotos(res.data);
				console.log('photos', photos);
			});
	}, []);

	return (
		<div>
			{photos && (
				<>
					{photos.map((photo) => (
						<img src={photo.urls.regular} alt={photo.alt_description} />
					))}
				</>
			)}
		</div>
	);
}
