import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import ShopsList from "../../components/shop/ShopsList";
import Loader from "../../components/common/Loader";

import { useGetShops } from "../../hooks/service/useGetShops";

const ShopPage: FC = () => {
	const { data: shopsData, isFetching } = useGetShops();

	return (
		<ShopPageStyled>
			<Suspense
				fallback={
					<LoaderWrapper>
						<Loader />
					</LoaderWrapper>
				}
			>
				<ShopsList shops={shopsData?.data} isLoading={isFetching} />

				<Container>
					<Outlet />
				</Container>
			</Suspense>
		</ShopPageStyled>
	);
};

export default ShopPage;

const ShopPageStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	padding: 0 0 15px;
`;

const LoaderWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	height: calc(100vh - 96px);
	width: calc(100vw - 350px);
	border: 2px solid #ccc;
	border-radius: 8px;
	overflow-y: auto;
	padding: 10px;
`;
