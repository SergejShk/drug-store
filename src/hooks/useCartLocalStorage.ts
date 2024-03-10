import { useEffect, useState } from "react";

import { IProduct } from "../interfaces/products";

export const useCartLocalStorage = () => {
	const [data, setData] = useState<IProduct[]>(() => {
		const value = localStorage.getItem("cart");

		if (typeof value === "string") {
			return JSON.parse(value) as IProduct[];
		}

		return [];
	});

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(data));
	}, [data]);

	return [data, setData];
};
