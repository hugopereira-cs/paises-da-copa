import { ThemeToggle } from './ThemeToggle';
import logo from '../assets/logo.png';

/**
 * Componente de cabeçalho da aplicação.
 * Contém o logotipo da Copa e o alternador de temas.
 */
export function Header() {
	return (
		<header className="grid grid-cols-3 items-center p-2 md:p-4">
			{/* Espaçador para manter o logo centralizado */}
			<div />

			<div className="flex justify-center">
				<img
					src={logo}
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
