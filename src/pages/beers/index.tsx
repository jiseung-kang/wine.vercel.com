import type { NextPage } from 'next';

const BeersPage: NextPage = () => {
	return (
		<div>
			<h1>Beers</h1>
			<ul>
				<li>
					<a href="beers/ale">Ale Beer</a>
				</li>
				<li>
					<a href="beers/stouts">Stout Beer</a>
				</li>
			</ul>
		</div>
	);
};

export default BeersPage;
