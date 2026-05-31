import { ThemeToggle } from './ThemeToggle';

/**
 * Cabeçalho da aplicação contendo o logo e o seletor de tema.
 */
export function Header() {
	return (
		<header className="grid grid-cols-3 items-center p-2 md:p-4">
			{/* Espaçador para manter o logo centralizado */}
			<div />

			<div className="flex justify-center">
				<img
					src="/logo.png"
					alt="Logo Copa do Mundo 2026"
					className="h-10 md:h-12 w-auto"
				/>
			</div>

			<div className="flex justify-end">
				<ThemeToggle />
			</div>
		</header>
	);
}
