import s from './FeatureCard.module.scss';

interface IServiceCardProps {
	icon: string;
	title: string;
	description: string;
	rating: number;
	category: string;
}

export default function FeatureCard({
	icon,
	title,
	description,
	rating,
	category,
}: IServiceCardProps) {
	return (
		<div className={s.card}>
			<div className={s.icon}>{icon}</div>
			<h3 className={s.title}>{title}</h3>
			<p className={s.description}>{description}</p>
			<div className={s.footer}>
				<div className={s.rating}>
					<span className={s.ratingStar}>★</span>
					<span className={s.ratingText}> {rating}</span>
				</div>
				<span className={s.category}>{category}</span>
			</div>
		</div>
	);
}
