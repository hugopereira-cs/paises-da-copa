/**
 * Mapeamento manual para tradução de continentes.
 */
const continentMap: Record<string, string> = {
	Africa: 'África',
	Antarctica: 'Antártida',
	Asia: 'Ásia',
	Europe: 'Europa',
	'North America': 'América do Norte',
	Oceania: 'Oceania',
	'South America': 'América do Sul',
};

/**
 * Tradutor nativo da API Intl para nomes de idiomas em português do Brasil.
 */
const languageNames = new Intl.DisplayNames(['pt-BR'], { type: 'language' });

/**
 * Tradutor nativo da API Intl para nomes de moedas em português do Brasil.
 */
const currencyNames = new Intl.DisplayNames(['pt-BR'], { type: 'currency' });

/**
 * Traduz o nome do continente para português.
 * @param continent - Nome do continente em inglês retornado pela API.
 * @returns Nome do continente traduzido ou o original caso não haja mapeamento.
 */
export function translateContinent(continent: string): string {
	return continentMap[continent] || continent;
}

/**
 * Traduz o nome de um idioma usando seu código ISO ou nome original.
 * @param code - Código ISO do idioma (ex: 'spa', 'eng').
 * @param fallback - Nome original do idioma caso a tradução falhe.
 * @returns Nome do idioma traduzido e capitalizado.
 */
export function translateLanguage(code: string, fallback: string): string {
	try {
		const translated = languageNames.of(code);
		if (translated) {
			// Capitalizar a primeira letra (ex: espanhol -> Espanhol)
			return translated.charAt(0).toUpperCase() + translated.slice(1);
		}
		return fallback;
	} catch {
		return fallback;
	}
}

/**
 * Traduz o nome de uma moeda e anexa seu símbolo.
 * @param code - Código da moeda (ex: 'BRL', 'USD').
 * @param symbol - Símbolo da moeda (ex: 'R$', '$').
 * @returns Nome da moeda traduzido e capitalizado seguido do símbolo.
 */
export function translateCurrency(code: string, symbol: string): string {
	try {
		const translated = currencyNames.of(code);
		if (translated) {
			return `${translated.charAt(0).toUpperCase() + translated.slice(1)} (${symbol})`;
		}
		return `${code} (${symbol})`;
	} catch {
		return `${code} (${symbol})`;
	}
}
