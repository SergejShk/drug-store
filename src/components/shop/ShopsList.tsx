import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Loader from "../common/Loader";

import { IShop } from "../../interfaces/shops";

interface IProps {
	shops?: IShop[];
	isLoading: boolean;
}

const ShopsList: FC<IProps> = ({ shops, isLoading }) => {
	return (
		<ShopsListStyled>
			<Title>Shops:</Title>
			<List>
				{isLoading && <Loader />}

				{!!shops &&
					!isLoading &&
					shops.map((shop) => (
						<Item key={shop.id}>
							<NavLinkStyled to={String(shop.id)}>{shop.name}</NavLinkStyled>
						</Item>
					))}
			</List>
		</ShopsListStyled>
	);
};

export default ShopsList;

const ShopsListStyled = styled.div`
	height: calc(100vh - 96px);
	width: 300px;
	border: 2px solid #ccc;
	border-radius: 8px;
	overflow-y: auto;
	padding: 10px;
`;

const Title = styled.h2`
	font-size: 18px;
	text-align: center;
	margin: 0 0 15px;
`;

const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Item = styled.li``;

const NavLinkStyled = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid #aaa8a8;
	border-radius: 8px;
	padding: 10px;

	&.active,
	&:hover {
		background-color: #ccc;
	}
`;
