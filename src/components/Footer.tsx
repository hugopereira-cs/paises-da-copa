export function Footer() {
	return (
		<footer className="p-8 text-center text-app-primary">
			<p style={{ fontSize: '11px' }} className="uppercase tracking-[0.2em] opacity-80">
				2026 - Desenvolvido por{' '}
				<a
					href="https://www.linkedin.com/in/hugopereiradev/"
					target="_blank"
					rel="noopener noreferrer"
					className="font-bold transition-colors hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-app-primary rounded px-1"
				>
					Hugo Pereira
				</a>
			</p>
		</footer>
	);
}
