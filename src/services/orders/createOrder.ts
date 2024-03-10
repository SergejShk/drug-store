import { apiInstance } from "../apiInstance";

import { ApiResult } from "../../interfaces/api";
import { INewOrderBody, IOrder } from "../../interfaces/orders";

export const createOrderApi = async (body: INewOrderBody): Promise<ApiResult<IOrder>> => {
	const { data } = await apiInstance.post<Promise<ApiResult<IOrder>>>(`orders`, body);

	return data;
};
