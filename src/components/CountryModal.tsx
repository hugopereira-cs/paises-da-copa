import { AnimatePresence, motion } from 'framer-motion';
import { Coins, Globe, MapPin, Maximize, Users, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { Country } from '../types/country';

interface CountryModalProps {
	country: Country | null;
	onClose: () => void;
}

export function CountryModal({ country, onClose }: CountryModalProps) {
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (country) {
			// Pequeno delay para a animação do Framer Motion começar
			const timer = setTimeout(() => {
				closeButtonRef.current?.focus();
			}, 100);
			return () => clearTimeout(timer);
		}
	}, [country]);

	if (!country) return null;

	return (
		<AnimatePresence>
			{country && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-title"
				>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
					/>

					{/* Modal Content */}
					<motion.div
						initial={{ scale: 0.9, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.9, opacity: 0, y: 20 }}
						transition={{ type: 'spring', damping: 25, stiffness: 300 }}
						className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-app-border bg-app-bg shadow-2xl"
					>
						{/* Close Button */}
						<button
							ref={closeButtonRef}
							type="button"
							onClick={onClose}
							aria-label="Fechar modal"
							className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-2 text-white transition-colors hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-white"
						>
							<X size={20} />
						</button>

						{/* Header with Flag */}
						<div className="h-48 w-full overflow-hidden border-b border-app-border">
							<img
								src={country.flag}
								alt={`Bandeira do ${country.name}`}
								className="h-full w-full object-cover"
							/>
						</div>

						{/* Body */}
						<div className="p-6">
							<h2
								id="modal-title"
								className="mb-6 text-3xl font-black tracking-tight text-app-primary"
							>
								{country.name}
							</h2>

							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<InfoItem
									icon={<Globe size={18} className="text-blue-500" />}
									label="Continente"
									value={country.continent}
								/>
								<InfoItem
									icon={<Users size={18} className="text-green-500" />}
									label="População"
									value={country.population?.toLocaleString('pt-BR')}
								/>
								<InfoItem
									icon={<Maximize size={18} className="text-orange-500" />}
									label="Área"
									value={`${country.area?.toLocaleString('pt-BR')} km²`}
								/>
								<InfoItem
									icon={<Coins size={18} className="text-yellow-500" />}
									label="Moeda"
									value={country.currencies?.join(', ')}
								/>
								<InfoItem
									icon={<MapPin size={18} className="text-red-500" />}
									label="Idiomas"
									value={country.languages?.join(', ')}
									fullWidth
								/>
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}

interface InfoItemProps {
	icon: React.ReactNode;
	label: string;
	value?: string | number;
	fullWidth?: boolean;
}

function InfoItem({ icon, label, value, fullWidth }: InfoItemProps) {
	return (
		<div
			className={`flex items-start gap-3 p-3 rounded-lg bg-app-bg/50 border border-app-border/50 ${fullWidth ? 'sm:col-span-2' : ''}`}
		>
			<div className="mt-1">{icon}</div>
			<div>
				<p className="text-[10px] font-bold uppercase tracking-wider text-app-primary opacity-50">
					{label}
				</p>
				<p className="font-semibold text-app-primary">{value || 'N/A'}</p>
			</div>
		</div>
	);
}
