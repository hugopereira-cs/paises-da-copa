import type { Country } from '../types/country';

interface CountryCardProps {
	country: Country;
	onClick: (country: Country) => void;
}

export function CountryCard({ country, onClick }: CountryCardProps) {
	return (
		<button
			type="button"
			onClick={() => onClick(country)}
			className="group cursor-pointer rounded-lg border border-app-border bg-app-bg/50 p-4 transition-all duration-300 hover:scale-105 hover:bg-app-bg hover:shadow-lg active:scale-95 w-full max-w-[200px]"
		>
			<div className="mb-3 overflow-hidden rounded-md border border-app-border">
				<img
					src={country.flag || 'https://flagcdn.com/br.svg'}
					alt={`Bandeira do ${country.name}`}
					className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
			</div>
			<h3 className="text-center font-bold text-app-primary">{country.name}</h3>
		</button>
	);
}
