import type { ReactNode } from 'react';

interface ContainerProps {
	/** Elementos filhos que serão renderizados dentro do container */
	children: ReactNode;
}

/**
 * Componente de layout principal que define a moldura da aplicação.
 * @param props - Propriedades do componente.
 */
export function Container({ children }: ContainerProps) {
	return (
		<div className="flex w-full flex-1 flex-col border border-app-border rounded-lg bg-app-bg text-app-primary shadow-xl">
			{children}
		</div>
	);
}
