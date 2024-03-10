import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { createOrderApi } from "../../../services/orders/createOrder";

import { ApiError, ApiResult } from "../../../interfaces/api";
import { INewOrderBody, IOrder } from "../../../interfaces/orders";

export const useCreateOrder = () => {
	return useMutation<ApiResult<IOrder>, AxiosError<ApiError>, INewOrderBody>({
		mutationFn: async (body) => {
			const data = await createOrderApi(body);

			return data;
		},
	});
};
