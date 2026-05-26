export interface Country {
	id: number;
	name: string;
	code: string; // Código ISO Alpha-3 para busca precisa na API
	flag?: string;
	continent?: string;
	languages?: string[];
	currencies?: string[];
	area?: number;
	population?: number;
}

export const countries: Country[] = [
	{ id: 1, name: 'África do Sul', code: 'ZAF' },
	{ id: 2, name: 'Alemanha', code: 'DEU' },
	{ id: 3, name: 'Arábia Saudita', code: 'SAU' },
	{ id: 4, name: 'Argélia', code: 'DZA' },
	{ id: 5, name: 'Argentina', code: 'ARG' },
	{ id: 6, name: 'Austrália', code: 'AUS' },
	{ id: 7, name: 'Áustria', code: 'AUT' },
	{ id: 8, name: 'Bélgica', code: 'BEL' },
	{ id: 9, name: 'Bósnia e Herzegovina', code: 'BIH' },
	{ id: 10, name: 'Brasil', code: 'BRA' },
	{ id: 11, name: 'Cabo Verde', code: 'CPV' },
	{ id: 12, name: 'Canadá', code: 'CAN' },
	{ id: 13, name: 'Catar', code: 'QAT' },
	{ id: 14, name: 'Colômbia', code: 'COL' },
	{ id: 15, name: 'Coreia do Sul', code: 'KOR' },
	{ id: 16, name: 'Costa do Marfim', code: 'CIV' },
	{ id: 17, name: 'Croácia', code: 'HRV' },
	{ id: 18, name: 'Curaçao', code: 'CUW' },
	{ id: 19, name: 'Egito', code: 'EGY' },
	{ id: 20, name: 'Equador', code: 'ECU' },
	{ id: 21, name: 'Escócia', code: 'GBR' }, // Escócia usa o código do Reino Unido na API
	{ id: 22, name: 'Espanha', code: 'ESP' },
	{ id: 23, name: 'Estados Unidos', code: 'USA' },
	{ id: 24, name: 'França', code: 'FRA' },
	{ id: 25, name: 'Gana', code: 'GHA' },
	{ id: 26, name: 'Haiti', code: 'HTI' },
	{ id: 27, name: 'Holanda', code: 'NLD' },
	{ id: 28, name: 'Inglaterra', code: 'GBR' }, // Inglaterra usa o código do Reino Unido na API
	{ id: 29, name: 'Irã', code: 'IRN' },
	{ id: 30, name: 'Iraque', code: 'IRQ' },
	{ id: 31, name: 'Japão', code: 'JPN' },
	{ id: 32, name: 'Jordânia', code: 'JOR' },
	{ id: 33, name: 'Marrocos', code: 'MAR' },
	{ id: 34, name: 'México', code: 'MEX' },
	{ id: 35, name: 'Noruega', code: 'NOR' },
	{ id: 36, name: 'Nova Zelândia', code: 'NZL' },
	{ id: 37, name: 'Panamá', code: 'PAN' },
	{ id: 38, name: 'Paraguai', code: 'PRY' },
	{ id: 39, name: 'Portugal', code: 'PRT' },
	{ id: 40, name: 'RD do Congo', code: 'COD' },
	{ id: 41, name: 'República Tcheca', code: 'CZE' },
	{ id: 42, name: 'Senegal', code: 'SEN' },
	{ id: 43, name: 'Suécia', code: 'SWE' },
	{ id: 44, name: 'Suíça', code: 'CHE' },
	{ id: 45, name: 'Tunísia', code: 'TUN' },
	{ id: 46, name: 'Turquia', code: 'TUR' },
	{ id: 47, name: 'Uruguai', code: 'URY' },
	{ id: 48, name: 'Uzbequistão', code: 'UZB' },
];
