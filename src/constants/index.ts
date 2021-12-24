export const WINE_API_ENDPOINT = 'https://api.sampleapis.com/wines/';
export const BEER_API_ENDPOINT = 'https://api.sampleapis.com/beers/';

export const MEDIA_QUERY_END_POINT = {
	MOBILE: '640px',
	TABLET: '1280px',
	DESKTOP: '1920px',
	LARGE: '2560px',
};

export const ROUTES = [
	{
		MAIN: {
			ID: 0,
			PATH: '/beers',
			LABEL: '맥주',
			SUBS: [
				{
					ID: 0,
					PATH: 'ale',
					LABEL: '스타우트',
					ORDER: 1,
				},
				{
					ID: 1,
					PATH: 'ale',
					LABEL: '스타우트',
					ORDER: 1,
				},
				{
					ID: 2,
					PATH: 'ale',
					LABEL: '스타우트',
					ORDER: 1,
				},
			],
		},
	},
];

// export const ROUTES = {
// 	BEERS: {
// 		MAIN: '/beers',
// 		SUBS: [
// 			{
// 				PATH: '/ale',
// 				LABEL: '에일',
// 				ORDER: 0,
// 			},
// 			{
// 				ID: 1,
// 				PATH: '/stouts',
// 				LABEL: '스타우트',
// 				ORDER: 1,
// 			},
// 		],
// 	},
// 	WINES: {},
// };
