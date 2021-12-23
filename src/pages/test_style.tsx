import type { NextPage } from 'next';
import { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		background-color: green;
  }
  * {
    font-family: 'Open Sans', sans-serif;
  }`;

const TestPage: NextPage = () => {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Button />
				<Button />
				<Anchor href="#">go google</Anchor>
				<Test href="http://www.google.com">go google</Test>
			</Container>
		</>
	);
};

const Container = styled.div`
	height: 100vh;
	width: 50%;
	background-color: pink;
`;

const Button = styled.button`
	width: 100px;
	background-color: blue;
	height: 100px;
	color: white;
`;

const Anchor = styled(Button)`
	background-color: yellow;
`.withComponent('a');

const Test = Button.withComponent('a');

export default TestPage;
