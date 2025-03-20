import s from './FeatureSection.module.scss';
import clsx from 'clsx';
import { featureData } from '@/assets/data/example';
import FeatureCard from '../FeatureCard/FeatureCard';

export default function HeroSection() {
	return (
		<section className={s.hero}>
			<div className={clsx('container', s.container)}>
				<h3 className={s.title}>Инновационные решения для вашего бизнеса</h3>
				<div className={s.flex}>
					{featureData.map((feature) => (
						<FeatureCard {...feature} />
					))}
				</div>
			</div>
		</section>
	);
}
