/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from "react";
import styled from "styled-components";

import CartForm from "../../components/common/CartForm";

import { useCartLocalStorage } from "../../hooks/useCartLocalStorage";

import { IProduct } from "../../interfaces/products";

const CartPage: FC = () => {
	const [cartProducts, setCartProducts] = useCartLocalStorage();

	const removeProductFromCart = (productId: number) => {
		// @ts-ignore
		setCartProducts((prev) => prev.filter((item) => item.id !== productId));
	};

	const resetCart = () => {
		// @ts-ignore
		setCartProducts([]);
	};

	return (
		<CartPageStyled>
			<CartForm
				products={(cartProducts as IProduct[]) || []}
				removeProductFromCart={removeProductFromCart}
				resetCart={resetCart}
			/>
		</CartPageStyled>
	);
};

export default CartPage;

const CartPageStyled = styled.div`
	width: 100%;
	height: calc(100vh - 57px);
`;
