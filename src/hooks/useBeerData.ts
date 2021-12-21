import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import { BEER_API_ENDPOINT } from '../constants';

export const BeerData = (path: string) => {
	return useSWR(`${BEER_API_ENDPOINT}${path}`, fetcher);
};
