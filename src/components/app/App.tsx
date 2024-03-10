import { Navigate, createBrowserRouter } from "react-router-dom";

import SharedLayout from "../common/SharedLayout";

import { ShopPage, CartPage, ProductsByShop } from "./pages";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <SharedLayout />,
		errorElement: <Navigate to="/" />,
		children: [
			{
				path: "/",
				element: <ShopPage />,
				children: [
					{
						path: ":shopId",
						element: <ProductsByShop />,
					},
				],
			},
			{
				path: "cart",
				element: <CartPage />,
			},
		],
	},
]);
