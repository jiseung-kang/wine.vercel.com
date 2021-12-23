import styled from 'styled-components';
import { Error, Loading, WineCard } from '.';
import { useWineData } from '../hooks/useWineData';
import { Wine } from '../types/Wine';
import { MEDIA_QUERY_END_POINT } from '../constants';

interface WineCardListProps {
	name: string;
}

export const WineCardList = ({ name }: WineCardListProps) => {
	const { data, error } = useWineData(name);

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<div>
			<WineTitle>{name} wine</WineTitle>
			<WineCardContainer>
				{data.map((wineData: Wine) => {
					return <WineCard key={`${name}-wine-list-${wineData.id}`} wineData={wineData} />;
				})}
			</WineCardContainer>
		</div>
	);
};

const WineTitle = styled.h1`
	font-size: 1.5em;
	line-height: 180%;
`;

const WineCardContainer = styled.main`
	display: grid;
	@media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
		grid-template-columns: repeat(4, 1fr);
	}
`;
