import s from './ServicesCard.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

interface IServicesCardProps {
	index: number;
	title?: string;
	subtitle?: string;
	buttonText?: string;
	highlighted?: boolean;
}

export default function ServicesCard({
	index,
	title,
	subtitle,
	buttonText,
	highlighted,
}: IServicesCardProps) {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className={`${s.card} ${highlighted ? s.highlighted : ''}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<span className={s.index}>Проект {index + 1}</span>

			{hovered && (
				<div className={s.overlay}>
					{title && <h3 className={s.title}>{title}</h3>}
					{subtitle && <p className={s.subtitle}>{subtitle}</p>}
					{buttonText && <Button>{buttonText}</Button>}
				</div>
			)}
		</div>
	);
}
