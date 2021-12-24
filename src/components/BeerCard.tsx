import styled from '@emotion/styled';
import { Beer } from '../types/Beer';

interface BeerCardProps {
	beerData: Beer;
}

export const BeerCard = ({ beerData }: BeerCardProps) => {
	const { name, price, rating, image } = beerData;

	return (
		<Container>
			<img src={image} alt="beer image" />
			<p>{price}</p>
			<h2>{name}</h2>
			<Average>{rating.average}</Average>
			<p>등록된 리뷰 : {rating.reviews}</p>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	padding: 1em;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
	border-radius: 1em;
`;

// const Title = styled.h2`
// 	text-align: center;
// `;

const Average = styled.span`
	display: inline-block;
	padding: 0.3em;
	font-size: 16px;
	margin-left: 0.5em;
	color: white;
	backgroung-color: #2ac1bc;
	border-radius: 3px;
`;
