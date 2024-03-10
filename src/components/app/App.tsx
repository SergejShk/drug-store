import { Navigate, createBrowserRouter } from "react-router-dom";

import SharedLayout from "../common/SharedLayout";
import CardsList from "../common/CardsList";

import { ShopPage, CartPage } from "./pages";

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
						element: <CardsList />,
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
