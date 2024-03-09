import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <div />,
		errorElement: <Navigate to="/" />,
		children: [],
	},
]);
