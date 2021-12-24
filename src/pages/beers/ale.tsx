import type { NextPage } from 'next';
import { BeerCardList } from '../../components/BeerCardList';

const AleBeerPage: NextPage = () => {
	const name = 'ale';

	return (
		<div>
			<BeerCardList name={name} />
		</div>
	);
};

export default AleBeerPage;
