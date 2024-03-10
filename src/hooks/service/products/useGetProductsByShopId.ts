import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

import { getProductsShopIdApi } from "../../../services/products/getProductsByShopId";

import { ApiError, ApiResult } from "../../../interfaces/api";
import { IProduct } from "../../../interfaces/products";

export const useGetProductsByShopId = (shopId: string) => {
	return useQuery<ApiResult<IProduct[]> | null, AxiosError<ApiError>>({
		queryKey: ["products-by-shop", shopId],
		queryFn: async () => {
			return await getProductsShopIdApi(shopId);
		},
	});
};
