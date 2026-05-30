import { useState } from 'react';
import { useCountries } from '../hooks/useCountries';
import type { Country } from '../types/country';
import { CountryCard } from './CountryCard';
import { CountryModal } from './CountryModal';

export function CountrySection() {
	const { data: countries, loading, error } = useCountries();
	const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

	const handleCountryClick = (country: Country) => {
		setSelectedCountry(country);
	};

	if (loading) {
		return (
			<div className="flex flex-1 items-center justify-center p-10">
				<div className="h-12 w-12 animate-spin rounded-full border-4 border-app-primary border-t-transparent" />
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex flex-1 items-center justify-center p-10 text-red-500">
				<p>{error}</p>
			</div>
		);
	}

	return (
		<>
			<section className="mx-auto grid max-w-350 grid-cols-1 justify-items-center gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
				{countries.map((country) => (
					<CountryCard
						key={country.id}
						country={country}
						onClick={handleCountryClick}
					/>
				))}
			</section>

			<CountryModal
				country={selectedCountry}
				onClose={() => setSelectedCountry(null)}
			/>
		</>
	);
}
