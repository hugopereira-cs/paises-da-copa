import type { Country } from '../data/countries';

interface CountryCardProps {
	country: Country;
	onClick: (country: Country) => void;
}

export function CountryCard({ country, onClick }: CountryCardProps) {
	return (
		<button
			type="button"
			onClick={() => onClick(country)}
			className="group cursor-pointer rounded-lg border border-app-border bg-app-bg/50 p-4 transition-all duration-300 hover:scale-105 hover:bg-app-bg hover:shadow-lg active:scale-95 w-48"
		>
			<div className="mb-3 overflow-hidden rounded-md border border-app-border">
				<img
					src="https://flagcdn.com/br.svg"
					alt={`Bandeira do ${country.name}`}
					className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
			</div>
			<h3 className="text-center font-bold text-app-primary">{country.name}</h3>
		</button>
	);
}
