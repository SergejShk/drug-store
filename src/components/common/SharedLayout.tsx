import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Loader from "./Loader";
import Header from "./Header";

const SharedLayout: FC = () => {
	return (
		<LayoutStyled>
			<Suspense
				fallback={
					<LoaderWrapper>
						<Loader />
					</LoaderWrapper>
				}
			>
				<Header />
				<Container>
					<Outlet />
				</Container>
			</Suspense>
		</LayoutStyled>
	);
};

export default SharedLayout;

const LayoutStyled = styled.div`
	position: relative;
	width: 100%;
	min-height: 100vh;
	margin: 0 auto;
`;

const LoaderWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	padding: 0 15px;
`;
