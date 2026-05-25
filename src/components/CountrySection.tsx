import { type Country, countries } from '../data/countries';
import { CountryCard } from './CountryCard';

export function CountrySection() {
	const handleCountryClick = (country: Country) => {
		console.log(`Abrir modal para: ${country.name}`);
		// TODO: Lógica do modal será implementada futuramente
	};

	return (
		<section className="mx-auto grid max-w-350 grid-cols-1 justify-items-center gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
			{countries.map((country) => (
				<CountryCard
					key={country.id}
					country={country}
					onClick={handleCountryClick}
				/>
			))}
		</section>
	);
}

