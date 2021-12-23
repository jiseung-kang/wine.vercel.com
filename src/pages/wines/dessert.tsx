import type { NextPage } from 'next';
import { Error, Loading, WineCard } from '../../components';
import { useWineData } from '../../hooks/useWineData';
import { Wine } from '../../types/Wine';
import { WineCardList } from '../../components/WineCardList';

const DessertWinePage: NextPage = () => {
	const name = 'dessert';

	return (
		<div>
			<WineCardList name={name} />
		</div>
	);
};

export default DessertWinePage;
