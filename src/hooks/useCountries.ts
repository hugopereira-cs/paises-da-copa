import axios from 'axios';
import { useEffect, useState } from 'react';
import { countries as localCountries } from '../data/countries';
import type { Country } from '../types/country';
import {
	translateContinent,
	translateCurrency,
	translateLanguage,
} from '../utils/translations';

/**
 * Interface que representa a estrutura de um país retornada pela Rest Countries API.
 */
interface ApiCountry {
	/** Código ISO Alpha-3 do país (ex: 'BRA') */
	cca3: string;
	/** URLs das bandeiras do país */
	flags: {
		svg: string;
	};
	/** Lista de continentes aos quais o país pertence */
	continents: string[];
	/** Mapa de idiomas falados (código: nome) */
	languages?: Record<string, string>;
	/** Mapa de moedas utilizadas (código: { nome, símbolo }) */
	currencies?: Record<string, { name: string; symbol: string }>;
	/** Área total do país em km² */
	area: number;
	/** População total do país */
	population: number;
}

/**
 * Hook customizado para gerenciar a busca, tradução e integração de dados dos países.
 * 
 * Este hook faz o fetch dos dados na Rest Countries API e realiza o merge com a nossa
 * lista local de 48 países participantes da Copa 2026, aplicando as traduções necessárias.
 * 
 * @returns Objeto contendo a lista de países, o estado de carregamento e possíveis erros.
 */
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

						// Overrides geográficos específicos (Inglaterra e Escócia)
						if (local.name === 'Inglaterra') {
							flag = 'https://flagcdn.com/gb-eng.svg';
						} else if (local.name === 'Escócia') {
							flag = 'https://flagcdn.com/gb-sct.svg';
						}

						// Traduzir idiomas e moedas usando os utilitários de tradução
						const languages = Object.entries(apiData.languages || {}).map(
							([code, name]) => translateLanguage(code, name),
						);

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
