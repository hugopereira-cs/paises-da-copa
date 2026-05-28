import axios from 'axios';
import { useEffect, useState } from 'react';
import { type Country, countries as localCountries } from '../data/countries';
import {
	translateContinent,
	translateCurrency,
	translateLanguage,
} from '../utils/translations';

// Definindo a interface para a resposta da API para evitar o uso de 'any'
interface ApiCountry {
	cca3: string;
	flags: {
		svg: string;
	};
	continents: string[];
	languages?: Record<string, string>;
	currencies?: Record<string, { name: string; symbol: string }>;
	area: number;
	population: number;
}

export function useCountries() {
	const [data, setData] = useState<Country[]>(localCountries);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const response = await axios.get<ApiCountry[]>(
					'https://restcountries.com/v3.1/all?fields=cca3,continents,languages,currencies,area,population,flags',
				);

				const apiCountries = response.data;

				// Mapear os dados da API para a nossa lista de 48 países
				const mergedData: Country[] = localCountries.map((local) => {
					const apiData = apiCountries.find((api) => api.cca3 === local.code);

					if (apiData) {
						let flag = apiData.flags.svg;

						// Override para Inglaterra e Escócia que a API retorna como UK
						if (local.name === 'Inglaterra') {
							flag = 'https://flagcdn.com/gb-eng.svg';
						} else if (local.name === 'Escócia') {
							flag = 'https://flagcdn.com/gb-sct.svg';
						}

						// Traduzir idiomas usando os códigos da API (ex: { spa: "Spanish" } -> ["Espanhol"])
						const languages = Object.entries(apiData.languages || {}).map(
							([code, name]) => translateLanguage(code, name),
						);

						// Traduzir moedas usando os códigos e símbolos
						const currencies = Object.entries(apiData.currencies || {}).map(
							([code, info]) => translateCurrency(code, info.symbol),
						);

						return {
							...local,
							flag,
							continent: translateContinent(apiData.continents?.[0] || 'N/A'),
							languages,
							currencies,
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
