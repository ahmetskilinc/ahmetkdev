import React from "react";
import styled from "styled-components";

const PhotographyWrapper = styled.div`
	display: grid;
	grid-gap: 6px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	> img {
		height: 400px;
		width: 100%;
		object-fit: cover;
		transition: all 1s;
		&:hover {
			object-fit: contain;
		}
	}
`;

export const PhotographyGrid = ({ children }) => {
	return <PhotographyWrapper>{children}</PhotographyWrapper>;
};
