import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

import { getShopsApi } from "../../services/shops/getShops";

import { IShop } from "../../interfaces/shops";
import { ApiError, ApiResult } from "../../interfaces/api";

export const useGetShops = () => {
	return useQuery<ApiResult<IShop[]> | null, AxiosError<ApiError>>({
		queryKey: ["shops"],
		queryFn: async () => {
			return await getShopsApi();
		},
	});
};
