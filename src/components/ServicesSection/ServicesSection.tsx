import s from './ServicesSection.module.scss';

import clsx from 'clsx';
import { servicesData } from '@/assets/data/example';
import ServicesNavigation from '../ServicesNavigation/ServicesNavigation';
import ServicesCard from '../ServicesCard/ServicesCard';

function ServicesSection() {
	return (
		<section className={s.services}>
			<div className={clsx('container', s.container)}>
				<h2 className={s.title}>Наши работы</h2>
				<p className={s.subtitle}>
					Ознакомьтесь с нашими лучшими проектами в различных категориях
				</p>
				<ServicesNavigation />
				<div className={s.grid}>
					{servicesData.map((service, index) => (
						<ServicesCard key={index} index={index} {...service} />
					))}
				</div>
			</div>
		</section>
	);
}

export default ServicesSection;
