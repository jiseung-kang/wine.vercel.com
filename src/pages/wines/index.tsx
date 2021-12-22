import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const WinesPage: NextPage = () => {
	return (
		<div className={styles.container}>
			<h1>Wines</h1>
			<ul>
				<li>
					<a href="wines/dessert">Dessert Wine</a>
				</li>
				<li>
					<a href="wines/port">Port Wine</a>
				</li>
				<li>
					<a href="wines/reds">Red Wine</a>
				</li>
				<li>
					<a href="wines/rose">Rose Wine</a>
				</li>
				<li>
					<a href="wines/sparkling">Sparkling Wine</a>
				</li>
				<li>
					<a href="wines/whites">White Wine</a>
				</li>
			</ul>
		</div>
	);
};

export default WinesPage;
