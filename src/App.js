import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './styles/App.css';

import axios from 'axios';

//components
import Header from './components/Header';
import Gallery from './components/Gallery';
import About from './components/About';

function App() {
	const [photos, setPhotos] = useState(null);
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
		<>
			<Header />
			{/* <Gallery photos={photos} /> */}
			<About />
		</>
	);
}

export default App;
