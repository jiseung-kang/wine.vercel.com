import type { NextPage } from 'next';
import { Beer } from '../../types/Beer';
import { Error, Loading, BeerCard } from '../../components';
import { useBeerData } from '../../hooks/useBeerData';

const StoutsBeerPage: NextPage = () => {
	const name = 'stouts';
	const { data, error } = useBeerData(name);

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<div>
			<h1>Stouts Beer</h1>
			<main>
				{data.map((beerData: Beer) => {
					return <BeerCard key={`${name}-wine-list-${beerData.id}`} beerData={beerData} />;
				})}
			</main>
		</div>
	);
};

export default StoutsBeerPage;
