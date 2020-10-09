//react
import React from 'react';
import styled from 'styled-components';

const StyledGallery = styled.div`
	/* border: 1px solid red; */
	margin: 5% 10% 0;
	display: flex;
	flex-flow: row wrap;
	img {
		width: 25%;
		object-fit: cover;
		padding: 0.5% 0.5%;
	}
	@media ${(pr) => pr.theme.breakpoints.medium} {
		margin: 5% 5% 0;
		img {
			width: 50%;
		}
	}
	@media ${(pr) => pr.theme.breakpoints.small} {
		margin: 5% 5% 0;
		img {
			width: 100%;
		}
	}
`;

export default function Gallery(props) {
	return (
		<StyledGallery>
			{props.photos && (
				<>
					{props.photos.map((photo) => (
						<img src={photo.urls.regular} alt={photo.alt_description} />
					))}
				</>
			)}
		</StyledGallery>
	);
}
