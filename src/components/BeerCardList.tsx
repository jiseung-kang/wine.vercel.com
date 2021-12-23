import { Error, Loading, BeerCard } from '.';
import { useBeerData } from '../hooks/useBeerData';
import { Beer } from '../types/Beer';

interface BeerCardListProps {
	name: string;
}

export const BeerCardList = ({ name }: BeerCardListProps) => {
	const { data, error } = useBeerData(name);

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<div>
			<h1>{name} beer</h1>
			<main>
				{data.map((beerData: Beer) => {
					return <BeerCard key={`${name}-beer-list-${beerData.id}`} beerData={beerData} />;
				})}
			</main>
		</div>
	);
};
