import { Navigate, createBrowserRouter } from "react-router-dom";

import SharedLayout from "../common/SharedLayout";
import { ShopPage, CartPage } from "./pages";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <SharedLayout />,
		errorElement: <Navigate to="/" />,
		children: [
			{
				index: true,
				element: <ShopPage />,
			},
			{
				path: "cart",
				element: <CartPage />,
			},
		],
	},
]);
