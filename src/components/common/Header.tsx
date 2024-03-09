import { FC } from "react";
import styled from "styled-components";

import Navigation from "./Navigation";

const Header: FC = () => {
	return (
		<HeaderStyled>
			<Navigation />
		</HeaderStyled>
	);
};

export default Header;

const HeaderStyled = styled.header`
	padding: 15px;
`;
