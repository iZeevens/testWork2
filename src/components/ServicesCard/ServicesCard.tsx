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

	const handleTouch = () => {
		setHovered(true);
		setTimeout(() => setHovered(false), 3000);
	};

	return (
		<div
			className={`${s.card} ${highlighted ? s.highlighted : ''}`}
			aria-label={`Проект ${index + 1}${title ? `: ${title}` : ''}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onTouchStart={handleTouch}
			onTouchEnd={(e) => e.stopPropagation()}
		>
			<span className={s.index}>Проект {index + 1}</span>

			<div className={`${s.overlay} ${hovered ? s.visible : ''}`}>
				{title && <h3 className={s.title}>{title}</h3>}
				{subtitle && <p className={s.subtitle}>{subtitle}</p>}
				{buttonText && <Button>{buttonText}</Button>}
			</div>
		</div>
	);
}
