import type { NextPage } from 'next';
import { Beer } from '../../types/Beer';
import { Error, Loading, BeerCard } from '../../components';
import { useWineData } from '../../hooks/useWineData';

const AleBeerPage: NextPage = () => {
	const name = 'ale';
	const { data, error } = useWineData(name);

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<div>
			<h1>Ale Beer</h1>
			<main>
				{data.map((beerData: Beer) => {
					return <BeerCard key={`${name}-wine-list-${beerData.id}`} beerData={beerData} />;
				})}
			</main>
		</div>
	);
};

export default AleBeerPage;
