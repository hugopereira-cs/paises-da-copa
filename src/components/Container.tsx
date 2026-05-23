import type { ReactNode } from 'react';

interface ContainerProps {
	children: ReactNode;
}

export function Container({ children }: ContainerProps) {
	return (
		<div className="flex w-full flex-1 flex-col border border-app-border rounded bg-app-bg text-app-primary">
			{children}
		</div>
	);
}
