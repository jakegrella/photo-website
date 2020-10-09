import React from 'react';
// import { IoIosMenu, IoIosCart } from 'react-icons/io';
import styled from 'styled-components';

const StyledHeader = styled.div`
	/* border: 1px solid red; */
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	padding: 2% 3%;
	h1 {
		font-size: 36px;
	}
	.desktopNav {
		/* border: 1px solid blue; */
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		width: 20%;
	}
	.mobileNav,
	.mobileNavIcon {
		display: none;
	}
	a {
		font-size: 1.8rem;
		font-weight: 700;
		text-decoration: none;
		text-transform: lowercase;
		color: ${(pr) => pr.theme.black};
		&:hover,
		&:active {
			color: ${(pr) => pr.theme.primaryColor};
		}
	}
	@media ${(pr) => pr.theme.breakpoints.medium} {
		.desktopNav {
			width: 40%;
		}
	}
	@media ${(pr) => pr.theme.breakpoints.small} {
		a {
			font-size: 2.4rem;
			line-height: 1.9;
		}
		.desktopNav {
			flex-flow: column nowrap;
			align-items: flex-end;
		}
	}
`;

export default function Header() {
	return (
		<StyledHeader>
			<a href='/'>
				<h1>Jake Grella</h1>
			</a>
			<nav className='desktopNav'>
				<a href='/'>About</a>
				<a href='/'>Social</a>
				<a href='/'>Order</a>
				<a href='/'>Cart</a>
				{/* <a href='/'>{IoIosCart}</a> */}
			</nav>
			{/* <span className='mobileNavIcon'>{IoIosMenu}</span> */}
			<a href='/' className='mobileNavIcon'>
				Menu
			</a>
			<nav className='mobileNav'>
				<a href='/'>About</a>
				<a href='/'>Social</a>
				<a href='/'>Order</a>
				<a href='/'>Cart</a>
				{/* <a href='/'>{IoIosCart}</a> */}
			</nav>
		</StyledHeader>
	);
}
