import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const navItems = [
	{ name: "Shop", link: "/" },
	{ name: "Shopping Cart", link: "/cart" },
];

const Navigation: FC = () => {
	return (
		<nav>
			<NavList>
				{navItems.map((navItem) => (
					<NavItem key={navItem.link}>
						<NavLinkStyled to={navItem.link}>{navItem.name}</NavLinkStyled>
					</NavItem>
				))}
			</NavList>
		</nav>
	);
};

export default Navigation;

const NavList = styled.ul`
	display: flex;
	align-items: center;
	gap: 20px;
`;

const NavItem = styled.li`
	font-size: 18px;
	font-weight: 700;

	position: relative;
	color: #475ba2;

	&.active,
	&:hover {
		text-decoration: underline;
	}

	&:not(:last-child)::after {
		position: absolute;
		content: "";
		display: block;
		top: 0;
		right: -10px;
		height: 100%;
		width: 2px;
		background-color: #ccc;
	}
`;

const NavLinkStyled = styled(NavLink)`
	&.active,
	&:hover {
		text-decoration: underline;
	}
`;
