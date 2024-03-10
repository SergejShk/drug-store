import { FC, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import styled from "styled-components";

import Input from "./Input";

import { IOrderProduct, IProduct } from "../../interfaces/products";

interface IFormValues {
	customerName: string;
	email: string;
	phone: string;
	address: string;
	products: IOrderProduct[];
}

interface IProps {
	products: IProduct[];
	removeProductFromCart: (productId: number) => void;
}

const CartForm: FC<IProps> = ({ products, removeProductFromCart }) => {
	const {
		control,
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<IFormValues>({
		defaultValues: {
			customerName: "",
			email: "",
			phone: "",
			address: "",
			products: products.map((product) => ({ ...product, count: 1 })),
		},
	});

	const productsData = useWatch({
		name: "products",
		control,
	});

	const onIncreaseClick = (productId: number) => {
		const updatedProducts = productsData.map((product) => {
			if (product.id === productId) {
				return {
					...product,
					count: product.count + 1,
				};
			}
			return product;
		});

		setValue("products", updatedProducts);
	};

	const onDecreaseClick = (productId: number) => {
		const updatedProducts = productsData.map((product) => {
			if (product.id === productId && product.count > 1) {
				return {
					...product,
					count: product.count - 1,
				};
			}
			return product;
		});

		setValue("products", updatedProducts);
	};

	const totalPrice = useMemo(() => {
		const price = productsData.reduce((acc, product) => {
			return acc + Number(product.price) * product.count;
		}, 0);

		return price.toFixed(2);
	}, [productsData]);

	const onRemoveProduct = (productId: number) => {
		removeProductFromCart(productId);
		const updatedProducts = productsData.filter((product) => product.id !== productId);
		setValue("products", updatedProducts);
	};

	const onSaveClick = (formValues: IFormValues) => {
		console.log(formValues);
	};

	return (
		<Form onSubmit={handleSubmit(onSaveClick)}>
			<BlockWrapper>
				<UserBlock>
					<Input
						type="text"
						name="customerName"
						label="Name:"
						register={register}
						rules={{ required: { value: true, message: "Required" } }}
						error={errors.customerName}
					/>

					<Input
						type="text"
						name="email"
						label="Email:"
						register={register}
						rules={{
							required: { value: true, message: "Required" },
							pattern: {
								value:
									/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: "Please enter a valid email",
							},
						}}
						error={errors.email}
					/>

					<Input
						type="text"
						name="phone"
						label="Phone:"
						register={register}
						rules={{
							required: { value: true, message: "Required" },
							minLength: { value: 5, message: "Min length 5 characters" },
							maxLength: { value: 20, message: "Max length 20 characters" },
							pattern: {
								value: /^[0-9]+$/,
								message: "Must contain only numbers",
							},
						}}
						error={errors.phone}
					/>

					<Input
						type="text"
						name="address"
						label="Address:"
						register={register}
						rules={{ required: { value: true, message: "Required" } }}
						error={errors.address}
					/>
				</UserBlock>

				<Block>
					{productsData.length &&
						productsData.map((product) => (
							<ProductCard key={product.id}>
								<Photo src="empty-img.jpeg" alt="photo of product" />
								<ProductInfo>
									<ProductName>{product.name}</ProductName>
									<ProductPrice>Price: {product.price} грн</ProductPrice>
									<Counter>
										<Count>{product.count}</Count>
										<CounterIncrease
											type="button"
											onClick={() => onIncreaseClick(product.id)}
										></CounterIncrease>
										<CounterDecrease
											type="button"
											onClick={() => onDecreaseClick(product.id)}
										></CounterDecrease>
									</Counter>
								</ProductInfo>

								<RemoveButton type="button" onClick={() => onRemoveProduct(product.id)} />
							</ProductCard>
						))}
				</Block>
			</BlockWrapper>

			<FooterForm>
				<TotalPrice>Total price: {totalPrice} грн</TotalPrice>
				<Button type="submit">Submit</Button>
			</FooterForm>
		</Form>
	);
};

export default CartForm;

const Form = styled.form`
	height: calc(100% - 15px);
	padding: 0 0 15px;
`;

const BlockWrapper = styled.div`
	height: calc(100% - 20px);
	display: flex;
	align-items: center;
	gap: 20px;
`;

const Block = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: calc(100% / 2 - 30px);
	height: calc(100% - 30px);
	border: 2px solid #ccc;
	border-radius: 8px;
	overflow-y: auto;
	padding: 10px;
`;

const UserBlock = styled(Block)`
	justify-content: space-around;
	padding: 10px 50px;
`;

const FooterForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 20px;
`;

const TotalPrice = styled.p`
	font-size: 20px;
`;

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

const ProductCard = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 10px;
	border: 2px solid #ccc;
	border-radius: 8px;
	padding: 10px;
`;

const Photo = styled.img`
	display: block;
	width: 150px;
`;

const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

const ProductName = styled.p`
	font-size: 20px;
	font-weight: 500;
`;

const ProductPrice = styled.p`
	font-size: 18px;
`;

const Counter = styled.div`
	position: relative;
	width: 200px;
	height: 40px;
	display: flex;
	align-items: center;
	border: 2px solid #ccc;
	border-radius: 8px;
	overflow: hidden;
	margin-top: 20px;
`;

const Count = styled.span`
	width: calc(100% - 50px);
	display: flex;
	justify-content: center;
`;

const CounterIncrease = styled.button`
	position: absolute;
	top: -3px;
	right: -2px;
	height: calc(50% + 4px);
	width: 50px;
	border: 2px solid #ccc;
	background-image: url("/caret.svg");
	background-size: contain;
	background-position: center center;
	background-repeat: no-repeat;
`;

const CounterDecrease = styled.button`
	position: absolute;
	bottom: -3px;
	right: -2px;
	height: calc(50% + 4px);
	width: 50px;
	border: 2px solid #ccc;
	background-image: url("/caret.svg");
	background-size: contain;
	background-position: center center;
	background-repeat: no-repeat;
	transform: rotate(180deg);
`;

const RemoveButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	width: 40px;
	height: 40px;
	background-image: url("/cross.svg");
	background-size: contain;
	background-position: center center;
	background-repeat: no-repeat;
`;
