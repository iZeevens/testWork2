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
			{/* <div className={s.icon}>{icon}</div> */}
			<h3 className={s.title}>{title}</h3>
			<p className={s.description}>{description}</p>
			<div className={s.footer}>
				<span className={s.rating}> {rating}</span>
				<span className={s.category}>{category}</span>
			</div>
		</div>
	);
}
