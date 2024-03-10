/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from "react";
import styled from "styled-components";

import Loader from "./Loader";

import { useCartLocalStorage } from "../../hooks/useCartLocalStorage";

import { IProduct } from "../../interfaces/products";

interface IProps {
	products: IProduct[];
	isLoading?: boolean;
}

const CardsList: FC<IProps> = ({ products, isLoading = false }) => {
	const [data, setData] = useCartLocalStorage();

	const handleAddToCart = (product: IProduct) => {
		// @ts-ignore
		setData((prev: IProduct[]) => [...prev, product]);
	};

	const isAddedToCart = (productId: number) => {
		if (Array.isArray(data)) {
			return data.some((item) => item.id === productId);
		}
		return false;
	};

	return (
		<List $isLoading={isLoading}>
			{isLoading && <Loader />}

			{!isLoading &&
				products?.map((product) => (
					<Item key={product.id}>
						<Photo src="empty-img.jpeg" alt="photo of product" />
						<ProductName>{product.name}</ProductName>
						<Price>{product.price} грн</Price>
						<Button
							type="button"
							onClick={() => handleAddToCart(product)}
							disabled={isAddedToCart(product.id)}
						>
							{isAddedToCart(product.id) ? "In the cart" : "Add to cart"}
						</Button>
					</Item>
				))}
		</List>
	);
};

export default CardsList;

const List = styled.ul<{ $isLoading: boolean }>`
	min-height: ${({ $isLoading }) => $isLoading && "100%"};
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 10px;
`;

const Item = styled.li`
	width: calc(100% / 2 - 30px);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	border: 2px solid #ccc;
	border-radius: 8px;
	padding: 10px;
`;

const Photo = styled.img`
	display: block;
	width: 50%;
`;

const ProductName = styled.p`
	font-weight: 500;
`;

const Price = styled.p``;

const Button = styled.button`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	font-weight: 600;
	letter-spacing: 0.8px;
	border-radius: 4px;
	padding: 3px 10px;
	color: #fff;
	background-color: #6b7fca;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: #475ba2;
	}

	&:disabled {
		cursor: auto;
		background-color: #6b7fca;
	}
`;
