import useSWR from 'swr';
import { fetchHomes } from './http';

export const useHomes = () => {
  return useSWR('homes', fetchHomes);
};
