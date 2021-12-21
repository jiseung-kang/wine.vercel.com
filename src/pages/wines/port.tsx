import type { NextPage } from 'next';
import axios from 'axios';
import useSWR from 'swr';
import { Wine } from '../../types/Wine';
import { fetcher } from '../../utils/fetcher';
import { useWineData } from '../../hooks/useWineData';

const Port: NextPage = () => {
	const { data, error } = useWineData('port');

	if (error) return <div>Failed to Loading...</div>;
	if (!data) return <div>...Loading</div>;

	return (
		<div>
			<h1>Wine</h1>
			<main>
				{data.map((wineData: Wine) => {
					const { id, wine, winery } = wineData;

					return (
						<div key={`port-wine-list-$(wineData.id)`}>
							<h1>{wineData.wine}</h1>
							<p>{wineData.winery}</p>
						</div>
					);
				})}
			</main>
		</div>
	);
};

export default Port;
