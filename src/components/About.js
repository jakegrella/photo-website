import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
	padding: 0 3%;
	h2 {
		font-size: 2.4rem;
		font-weight: 700;
		text-transform: lowercase;
		margin-bottom: 1.8rem;
	}
	p {
		font-size: 1.8rem;
		font-weight: 400;
		margin-bottom: 1.8rem;
		line-height: 1.2;
	}
`;

export default function About() {
	return (
		<StyledAbout>
			<h2>About</h2>
			<p>
				Hey, I’m Jake. I have a passion for photography, with landscapes making
				up the majority of my work.{' '}
			</p>
			<p>
				As of late I haven’t had much to shoot, so I wander my home with a
				thrift store film point and shoot. It truly isn’t about the gear, but
				about capturing a moment in time.
			</p>
			<p>
				I keep a relatively low profile and really try to be impactful with
				actions and words. I spend most of my time studying web development, and
				I’m currently seeking a position at a firm where I can make a
				difference.
			</p>
		</StyledAbout>
	);
}
