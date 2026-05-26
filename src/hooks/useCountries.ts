import axios from 'axios';
import { useEffect, useState } from 'react';
import { type Country, countries as localCountries } from '../data/countries';

export function useCountries() {
	const [data, setData] = useState<Country[]>(localCountries);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const response = await axios.get(
					'https://restcountries.com/v3.1/all?fields=name,cca3,continents,languages,currencies,area,population,flags',
				);

				const apiCountries = response.data;

				// Mapear os dados da API para a nossa lista de 48 países
				const mergedData = localCountries.map((local) => {
					const apiData = apiCountries.find(
						(api: any) => api.cca3 === local.code,
					);

					if (apiData) {
						return {
							...local,
							flag: apiData.flags.svg,
							continent: apiData.continents?.[0] || 'N/A',
							languages: Object.values(apiData.languages || {}),
							currencies: Object.values(apiData.currencies || {}).map(
								(c: any) => `${c.name} (${c.symbol})`,
							),
							area: apiData.area,
							population: apiData.population,
						};
					}
					return local;
				});

				setData(mergedData);
			} catch (err) {
				console.error('Erro ao buscar países:', err);
				setError('Não foi possível carregar os dados dos países.');
			} finally {
				setLoading(false);
			}
		};

		fetchCountries();
	}, []);

	return { data, loading, error };
}
