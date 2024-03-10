import { FC } from "react";
import { useParams } from "react-router-dom";

import CardsList from "../common/CardsList";

import { useGetProductsByShopId } from "../../hooks/service/products/useGetProductsByShopId";

const ProductsByShop: FC = () => {
	const params = useParams();
	const shopId = params?.shopId || "";

	const { data: productsData, isFetching } = useGetProductsByShopId(shopId);

	return <CardsList products={productsData?.data || []} isLoading={isFetching} />;
};

export default ProductsByShop;
