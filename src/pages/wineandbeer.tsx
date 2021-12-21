import type { NextPage } from 'next';

const WineandBeerPage: NextPage = () => {
	return (
		<div>
			<h1>Wine and Beer</h1>
			<ul>
				<li>
					<a href="wines">Wine</a>
				</li>
				<li>
					<a href="beers">Beer</a>
				</li>
			</ul>
		</div>
	);
};

export default WineandBeerPage;
