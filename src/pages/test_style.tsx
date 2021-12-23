import type { NextPage } from 'next';
import { Fragment } from 'react';
import styled from 'styled-components';

const TestPage: NextPage = () => {
	return (
		<Fragment>
			<Button />
		</Fragment>
	);
};

const Button = styled.button`
	width: 100px;
	background-color: blue;
	height: 100px;
`;

export default TestPage;
