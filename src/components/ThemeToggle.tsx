import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
	const [theme, setTheme] = useState<'light' | 'dark'>(() => {
		const saved = localStorage.getItem('theme');
		if (saved === 'light' || saved === 'dark') return saved;
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	});

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
		<button
			type="button"
			onClick={toggleTheme}
			className="cursor-pointer transition-all duration-300 hover:opacity-80 text-app-primary p-2"
			aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
		>
			{theme === 'light' ? (
				<Moon className="h-6 w-6" />
			) : (
				<Sun className="h-6 w-6" />
			)}
		</button>
	);
}
