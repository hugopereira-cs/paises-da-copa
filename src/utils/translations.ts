const continentMap: Record<string, string> = {
	Africa: 'África',
	Antarctica: 'Antártida',
	Asia: 'Ásia',
	Europe: 'Europa',
	'North America': 'América do Norte',
	Oceania: 'Oceania',
	'South America': 'América do Sul',
};

// Tradutor nativo para Idiomas
const languageNames = new Intl.DisplayNames(['pt-BR'], { type: 'language' });

// Tradutor nativo para Moedas
const currencyNames = new Intl.DisplayNames(['pt-BR'], { type: 'currency' });

export function translateContinent(continent: string): string {
	return continentMap[continent] || continent;
}

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
