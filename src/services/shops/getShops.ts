import { apiInstance } from "../apiInstance";

import { ApiResult } from "../../interfaces/api";
import { IShop } from "../../interfaces/shops";

export const getShopsApi = async (): Promise<ApiResult<IShop[]>> => {
	const { data } = await apiInstance.get<Promise<ApiResult<IShop[]>>>(`shops`);

	return data;
};
