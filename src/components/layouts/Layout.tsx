import styled from '@emotion/styled';
import React from 'react';
import { Navigation } from '.';
import { MEDIA_QUERY_END_POINT } from '../../constants';

export const Layout: React.FC = ({ children }) => {
	return (
		<div>
			<Navigation />
			<Container>{children}</Container>
		</div>
	);
};

const Container = styled.main`
	max-width: ${MEDIA_QUERY_END_POINT.TABLET};
	margin: auto;
`;
