import { apiInstance } from "../apiInstance";

import { ApiResult } from "../../interfaces/api";
import { IProduct } from "../../interfaces/products";

export const getProductsShopIdApi = async (shopId: string): Promise<ApiResult<IProduct[]>> => {
	const { data } = await apiInstance.get<Promise<ApiResult<IProduct[]>>>(`products/${shopId}`);

	return data;
};
